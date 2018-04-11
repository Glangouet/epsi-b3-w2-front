import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../class/user';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {

  private user: User;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user = new User();
  }

  public deleteUser() {
    this.userService.deleteUser(this.user, (state) => {
      console.log(state);
    });
  }
  
}
