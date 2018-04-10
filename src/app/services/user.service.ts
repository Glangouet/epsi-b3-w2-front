import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from './auth.service';
import {User} from '../class/user';

@Injectable()
export class UserService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  public createUser(user: User, callback) {
      this.http.post(
          this.authService.getApiUrl() + '/user/create',
          user
      ).subscribe(
          data => {
              callback(data);
          },
          error => {
              console.log(error);
          }
      );
  }

  public deleteUser(id, callback) {
      this.http.delete(
          this.authService.getApiUrl() + '/user/delete/' + id
      ).subscribe(
          data => {
              callback(data);
          },
          error => {
              console.log(error);
          }
      );
  }

  public updateUser(user: User, callback) {
      this.http.put(
          this.authService.getApiUrl() + '/user/update',
          user
      ).subscribe(
          data => {
              callback(data);
          },
          error => {
              console.log(error);
          }
      );
  }

  public getUserById(id, callback) {
      this.http.get(
          this.authService.getApiUrl() + '/user/get-by-id/' + id
      ).subscribe(
          data => {
              callback(data);
          },
          error => {
              console.log(error);
          }
      );
  }

  public getAllUsers(callback) {
      this.http.get(
          this.authService.getApiUrl() + '/user/get-all'
      ).subscribe(
          data => {
              callback(data);
          },
          error => {
              console.log(error);
          }
      );
  }

  public getUsersBySkills(skills, callback) {
      this.http.post(
          this.authService.getApiUrl() + '/user/get-by-skills',
          skills
      ).subscribe(
          data => {
              callback(data);
          },
          error => {
              console.log(error);
          }
      );
  }

  public getUsersByCampus(campus, callback) {
      this.http.post(
          this.authService.getApiUrl() + '/user/get-by-campus',
          campus
      ).subscribe(
          data => {
              callback(data);
          },
          error => {
              console.log(error);
          }
      );
  }

  public getUsersByProject(projectId, callback) {
      this.http.get(
          this.authService.getApiUrl() + '/user/get-by-project/' + projectId
      ).subscribe(
          data => {
              callback(data);
          },
          error => {
              console.log(error);
          }
      );
  }

  public getUsersByRoles(roles, callback) {
      this.http.post(
          this.authService.getApiUrl() + '/user/get-by-roles',
          roles
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
