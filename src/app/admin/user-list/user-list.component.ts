import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../class/user';
import { Campus } from '../../class/campus';
import { Skill } from '../../class/skill';
import { Role } from '../../class/role';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  private user: User;
  private users: User[];
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  public getUsers() {
    this.userService.getAllUsers(state => {
      console.log(state);
      this.users = state;
    });
  }

  public getUser() {
    this.userService.getUserById(this.user.id, state => {
      console.log(state);
      this.user = state;
    });
  }

  //public getUserBySkill() {
  //  this.userService.getUsersByUserId(this.user.id, state => {
  //    console.log(state);
  //    this.user = state;
  //  });
  //}


}
