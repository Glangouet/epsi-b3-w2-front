import { Injectable } from '@angular/core';
import {AuthService} from './auth.service';
import {Role} from '../class/role';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class RoleService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  public createRole(role: Role, callback) {
      this.http.post(
          this.authService.getApiUrl() + '/role/create',
          role
      ).subscribe(
          data => {
              callback(data);
          },
          error => {
              console.log(error);
          }
      );
  }

  public deleteRole(id, callback) {
    this.http.delete(
        this.authService.getApiUrl() + '/role/delete/' + id
    ).subscribe(
        data => {
            callback(data);
        },
        error => {
            console.log(error);
        }
    );
  }

  public updateRole(role: Role, callback) {
      this.http.put(
          this.authService.getApiUrl() + '/role/update',
          role
      ).subscribe(
          data => {
              callback(data);
          },
          error => {
              console.log(error);
          }
      );
  }

  public getAllRoles(callback) {
      this.http.get(
          this.authService.getApiUrl() + '/role/get-all'
      ).subscribe(
          data => {
              callback(data);
          },
          error => {
              console.log(error);
          }
      );
  }

  public getRoleById(id, callback) {
      this.http.get(
          this.authService.getApiUrl() + '/role/get-by-id/' + id
      ).subscribe(
          data => {
              callback(data);
          },
          error => {
              console.log(error);
          }
      );
  }

  public getRoleByUserId(userId, callback) {
      this.http.get(
          this.authService.getApiUrl() + '/role/get-by-user-id/' + userId
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
