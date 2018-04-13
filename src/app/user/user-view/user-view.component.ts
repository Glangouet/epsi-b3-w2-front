import { Component, OnInit } from '@angular/core';
import {SkillService} from '../../services/skill.service';
import {UserService} from '../../services/user.service';
import {User} from '../../class/user';
import {ActivatedRoute} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  private allSkills: any;
  private user: User;

  constructor(private authService: AuthService,
              private skillService: SkillService,
              private userService: UserService,
              private route: ActivatedRoute) {}

  ngOnInit() {
      this.skillService.getAllSkills(data => {
          this.allSkills = data;
      });
    this.user = new User();
    this.route.params.subscribe(params => this.user.id = params.id);
    this.userService.getUserById(this.user.id, data => {
      this.user.id = data.id;
      this.user.login = data.username;
      this.user.email = data.email;
      this.user.firstname = data.username;
      this.user.lastname = data.username;
      this.user.roles = data.roles;
      this.user.skills = data.skills;
    });
  }

  public updateSkills() {
    this.userService.updateUser(this.user, state => {
      console.log(state);
    });
  }

}
