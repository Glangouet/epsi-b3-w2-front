import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent} from '@angular/common/http';
import {tokenNotExpired} from 'angular2-jwt';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/operator/toPromise';
import 'rxjs/operator/find';
import {Router} from '@angular/router';
import {User} from '../class/user';
import {UserService} from './user.service';

declare const $;

@Injectable()

export class AuthService {
    private apiUrl;
    private isConnected: boolean;
    private sessionUsername: string;

    constructor(private http: HttpClient, private router: Router) {
        this.apiUrl = 'http://localhost:8000';
        if (localStorage.getItem('token')) {
            this.isConnected = true;
        } else {
            this.isConnected = false;
        }
    }

    public getApiUrl(): string {
        return this.apiUrl;
    }

    public getToken(): string {
        return localStorage.getItem('token');
    }

    public getTokenRefresh(): string {
        return localStorage.getItem('refresh_token');
    }

    public getUsername(): string {
        return localStorage.getItem('username');
    }

    public updateToken(data) {
        localStorage.setItem('token', data['token']);
        localStorage.setItem('refresh_token', data['refresh_token']);
    }

    public register(form, callback) {
        this.http.post(
            `${this.apiUrl}/api/register`,
            {
                email: form['email'],
                username: form['username'],
                plainPassword: {
                    first: form['plainPassword.first'],
                    second: form['plainPassword.second']
                }
            }
        ).subscribe(
            response => {
                callback({status: true, message: response['message']});
            },
            error => {
                let errorForm;
                const errors = [];
                const data = error['error']['errors']['children'];
                for (const type in data) {
                    if (typeof data[type].children !== 'undefined') {
                        if (data[type].children.first.errors) {
                            errorForm = data[type].children.first.errors;
                            errors.push(errorForm[0]);
                        }
                    } else if (typeof data[type].errors !== 'undefined') {
                        errorForm = data[type].errors;
                        errors.push(errorForm[0]);
                    }
                }
                callback({status: false, errors: errors});
            }
        );
    }

    public login(user: User): void {
        this.check(user, tokens => {
            this.updateToken(tokens);
            this.isConnected = true;
            localStorage.setItem('username', user['login']);
            this.sessionUsername = user['login'];
        });
    }

    public refresh(token): Observable<object> {
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('token');
        const url = `${this.getApiUrl()}/api/token/refresh`;
        return this.http.post(url, {refresh_token: token});
    }

    public logout(): void {
        localStorage.clear();
        this.isConnected = false;
        document.location.href = '/';
    }

    public check(user: User, tokens): void {
        console.log(user);
        const url = `${this.getApiUrl()}/api/login_check`;
        this.http.post(
            url,
            {username: user['login'], password: user['password']},
        ).subscribe(
            data => {
                tokens({
                    token: data['token'],
                    refresh_token: data['refresh_token']
                });
                console.log('Successful identification.');
            },
            error => {
                console.log('Bad identification.');
            }
        );
    }

    public isAuthenticated() {
        const token = this.getToken();
        return tokenNotExpired(null, token);
    }
}
