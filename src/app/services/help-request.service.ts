import { Injectable } from '@angular/core';
import {AuthService} from './auth.service';
import {HttpClient} from '@angular/common/http';
import {HelpRequest} from '../class/help-request';

@Injectable()
export class HelpRequestService {

    constructor(private http: HttpClient, private authService: AuthService) { }

    public addHelpRequest(helpRequest: HelpRequest, callback) {
        console.log(helpRequest);
        this.http.post(
            this.authService.getApiUrl() + '/api/help-request/add',
            helpRequest
        ).subscribe(
            data => {
                callback(data);
            },
            error => {
                console.log(error);
            }
        );
    }

    public deleteHelpRequest(helpRequest: HelpRequest, callback) {
        console.log(helpRequest);
        this.http.delete(
            this.authService.getApiUrl() + '/api/help-request/delete/' + helpRequest.id,
        ).subscribe(
            data => {
                callback(data);
            },
            error => {
                console.log(error);
            }
        );
    }

    public getAll(callback) {
        this.http.get(
            this.authService.getApiUrl() + '/api/help-request/get-all',
        ).subscribe(
            data => {
                callback(data);
            },
            error => {
                console.log(error);
            }
        );
    }

    public getByProjectId(projectId, callback) {
        this.http.get(
            this.authService.getApiUrl() + '/api/help-request/get-by-project/' + projectId,
        ).subscribe(
            data => {
                callback(data);
            },
            error => {
                console.log(error);
            }
        );
    }

    public getByUserRequestedId(userId, callback) {
        this.http.get(
            this.authService.getApiUrl() + '/api/help-request/get-by-user-requested/' + userId,
        ).subscribe(
            data => {
                callback(data);
            },
            error => {
                console.log(error);
            }
        );
    }

    public getById(id, callback) {
        this.http.get(
            this.authService.getApiUrl() + '/api/help-request/get/' + id,
        ).subscribe(
            data => {
                callback(data);
            },
            error => {
                console.log(error);
            }
        );
    }
}
