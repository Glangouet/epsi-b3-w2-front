import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {
    private apiUrl;

    constructor(private http: HttpClient, private router: Router) {
        this.apiUrl = 'http://localhost:8080/api';
    }

    public getApiUrl(): string {
        return this.apiUrl;
    }

}
