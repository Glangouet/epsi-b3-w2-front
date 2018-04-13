import { Injectable } from '@angular/core';
import {AuthService} from './auth.service';
import {Skill} from '../class/skill';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class SkillService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  public createSkill(skill: Skill, callback) {
      this.http.post(
          this.authService.getApiUrl() + '/skill/create',
          skill
      ).subscribe(
          data => {
              callback(data);
          },
          error => {
              console.log(error);
          }
      );
  }

  public deleteSkill(id, callback) {
    this.http.delete(
        this.authService.getApiUrl() + '/skill/delete/' + id
    ).subscribe(
        data => {
            callback(data);
        },
        error => {
            console.log(error);
        }
    );
  }

  public updateSkill(skill: Skill, callback) {
      this.http.put(
          this.authService.getApiUrl() + '/skill/update',
          skill
      ).subscribe(
          data => {
              callback(data);
          },
          error => {
              console.log(error);
          }
      );
  }

  public getAllSkills(callback) {
      this.http.get(
          this.authService.getApiUrl() + '/api/skill/get-all'
      ).subscribe(
          data => {
              callback(data);
          },
          error => {
              console.log(error);
          }
      );
  }

  public getSkillById(id, callback) {
      this.http.get(
          this.authService.getApiUrl() + '/skill/get-by-id/' + id
      ).subscribe(
          data => {
              callback(data);
          },
          error => {
              console.log(error);
          }
      );
  }

  public getSkillsByUserId(userId, callback) {
      this.http.get(
          this.authService.getApiUrl() + '/skill/get-by-user-id/' + userId
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
