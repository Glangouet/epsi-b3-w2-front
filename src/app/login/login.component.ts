import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {User} from '../class/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: User;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.user = new User;
  }

  public submitLogin() {
    this.auth.login(this.user);
    console.log(this.user);
  }

}
