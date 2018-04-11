import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../class/user';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  private user: User;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user = new User();
  }

  public addUser() {
    this.userService.createUser(this.user, (state) => {
      console.log(state);
      this.user = new User();
    });
    console.log(this.user);
  }

}
