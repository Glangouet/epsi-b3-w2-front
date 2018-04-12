import { Injectable } from '@angular/core';
import {AuthService} from './auth.service';
import {Project} from '../class/project';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ProjectService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  public createProject(project: Project, callback) {
      console.log(project);
      this.http.post(
          this.authService.getApiUrl() + '/api/project/add',
          project
      ).subscribe(
          data => {
              callback(data);
          },
          error => {
              console.log(error);
          }
      );
  }

  public deleteProject(id, callback) {
    this.http.delete(
        this.authService.getApiUrl() + '/api/project/delete/' + id
    ).subscribe(
        data => {
            callback(data);
        },
        error => {
            console.log(error);
        }
    );
  }

  public updateProject(project: Project, callback) {
      this.http.put(
          this.authService.getApiUrl() + '/api/project/update',
          project
      ).subscribe(
          data => {
              callback(data);
          },
          error => {
              console.log(error);
          }
      );
  }

  public getAllProjects(callback) {
      this.http.get(
          this.authService.getApiUrl() + '/api/project/get-all'
      ).subscribe(
          data => {
              callback(data);
          },
          error => {
              console.log(error);
          }
      );
  }

  public getProjectById(id, callback) {
      this.http.get(
          this.authService.getApiUrl() + '/api/project/get-by-id/' + id
      ).subscribe(
          data => {
              callback(data);
          },
          error => {
              console.log(error);
          }
      );
  }

  public getProjectsByUserId(userId, callback) {
      this.http.get(
          this.authService.getApiUrl() + '/api/project/get-by-user-id/' + userId
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
