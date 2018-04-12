import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import {AuthService} from '../../services/auth.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {


    private users: any;

    constructor(private auth: AuthService, private userService: UserService) { }

    ngOnInit() {
        this.userService.getUsersByRole(null, data => {
            this.users = data;
            console.log(this.users);
        });
    }

}
