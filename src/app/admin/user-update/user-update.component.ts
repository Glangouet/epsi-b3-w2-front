import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../class/user';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  private user: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  public updateUser() {
      this.userService.updateUser(this.user, state => {
          console.log(state);
      });
  }

}
