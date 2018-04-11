import { Injectable } from '@angular/core';
import {AuthService} from './auth.service';
import {Campus} from '../class/campus';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CampusService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  public createCampus(campus: Campus, callback) {
      this.http.post(
          this.authService.getApiUrl() + '/campus/create',
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

  public deleteCampus(id, callback) {
    this.http.delete(
        this.authService.getApiUrl() + '/campus/delete/' + id
    ).subscribe(
        data => {
            callback(data);
        },
        error => {
            console.log(error);
        }
    );
  }

  public updateCampus(campus: Campus, callback) {
      this.http.put(
          this.authService.getApiUrl() + '/campus/update',
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

  public getAllCampuss(callback) {
      this.http.get(
          this.authService.getApiUrl() + '/campus/get-all'
      ).subscribe(
          data => {
              callback(data);
          },
          error => {
              console.log(error);
          }
      );
  }

  public getCampusById(id, callback) {
      this.http.get(
          this.authService.getApiUrl() + '/campus/get-by-id/' + id
      ).subscribe(
          data => {
              callback(data);
          },
          error => {
              console.log(error);
          }
      );
  }

  public getCampussByUserId(userId, callback) {
      this.http.get(
          this.authService.getApiUrl() + '/campus/get-by-user-id/' + userId
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
