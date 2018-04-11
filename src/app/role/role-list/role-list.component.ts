import { Component, OnInit } from '@angular/core';
import { RoleService } from '../../services/role.service';
import { Role } from '../../class/role';
import { User } from '../../class/user';
import { Skill } from '../../class/skill';
import { Campus } from '../../class/campus';


@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RoleListComponent implements OnInit {

  private role: Role;
  private roles: Role[];
  constructor(private roleService: RoleService) { }

  ngOnInit() {
  }

  public getRoles() {
    this.roleService.getAllRoles(state => {
      console.log(state);
      this.roles = state;
    });
  }

  public getRole() {
    this.roleService.getRoleById(this.role.id, state => {
      console.log(state);
      this.role = state;
    });
  }

  //public getRoleBySkill() {
  //  this.roleService.getRolesByRoleId(this.role.id, state => {
  //    console.log(state);
  //    this.role = state;
  //  });
  //}


}
