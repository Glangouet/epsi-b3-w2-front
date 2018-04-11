import { Component, OnInit } from '@angular/core';
import {RoleService} from '../../services/role.service';
import {Role} from '../../class/role';

@Component({
  selector: 'app-role-update',
  templateUrl: './role-update.component.html',
  styleUrls: ['./role-update.component.css']
})
export class RoleUpdateComponent implements OnInit {

  private role: Role;

  constructor(private roleService: RoleService) { }

  ngOnInit() {
  }

  public updateRole() {
      this.roleService.updateRole(this.role, state => {
        console.log(state);
        this.role = state;
      });
  }

}
