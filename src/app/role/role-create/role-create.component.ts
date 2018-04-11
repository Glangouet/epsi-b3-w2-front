import { Component, OnInit } from '@angular/core';
import {RoleService} from '../../services/role.service';
import {Role} from '../../class/role';

@Component({
  selector: 'app-role-create',
  templateUrl: './role-create.component.html',
  styleUrls: ['./role-create.component.css']
})
export class RoleCreateComponent implements OnInit {

  private role: Role;
  constructor(private roleService: RoleService) { }

  ngOnInit() {
    this.role = new Role();
  }

  public addRole() {
    this.roleService.createRole(this.role, (state) => {
      console.log(state);
      this.role = new Role();
    });
    console.log(this.role);
  }

}
