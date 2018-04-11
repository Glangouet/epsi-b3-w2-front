import { Component, OnInit } from '@angular/core';
import {RoleService} from '../../services/role.service';
import {Role} from '../../class/role';

@Component({
  selector: 'app-role-delete',
  templateUrl: './role-delete.component.html',
  styleUrls: ['./role-delete.component.css']
})
export class RoleDeleteComponent implements OnInit {

  private role: Role;
  constructor(private roleService: RoleService) { }

  ngOnInit() {
    this.role = new Role();
  }

  public deleteRole() {
    this.roleService.deleteRole(this.role, (state) => {
      console.log(state);
    });
  }
  
}
