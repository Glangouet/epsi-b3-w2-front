import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { ProjectMyComponent } from './project/project-my/project-my.component';
import {ProjectComponent} from './project/project.component';
import {ProjectViewComponent} from './project/project-view/project-view.component';
import {ProjectCreateComponent} from './project/project-create/project-create.component';
import { ProjectUpdateComponent } from './project/project-update/project-update.component';
//import { ProjectDeleteComponent } from './project/project-delete/project-delete.component';

import {UserComponent} from './user/user.component';
import { UserViewComponent } from './user/user-view/user-view.component';
import { UserListComponent } from './admin/user-list/user-list.component';
import {UserCreateComponent} from './admin/user-create/user-create.component';
import { UserUpdateComponent } from './admin/user-update/user-update.component';
import { UserDeleteComponent } from './admin/user-delete/user-delete.component';

import { CampusCreateComponent } from './campus/campus-create/campus-create.component';
import { CampusUpdateComponent } from './campus/campus-update/campus-update.component';
import { CampusDeleteComponent } from './campus/campus-delete/campus-delete.component';

import {AdminComponent} from './admin/admin.component';

import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

import { SkillCreateComponent } from './skill/skill-create/skill-create.component';
import { SkillUpdateComponent } from './skill/skill-update/skill-update.component';
import { SkillDeleteComponent } from './skill/skill-delete/skill-delete.component';

import { RoleCreateComponent } from './role/role-create/role-create.component';
import { RoleUpdateComponent } from './role/role-update/role-update.component';
import {HelpRequestComponent} from './help-request/help-request.component';
import { RoleDeleteComponent } from './role/role-delete/role-delete.component';
import {CreateHelpRequestComponent} from './help-request/create-help-request/create-help-request.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },

    { path: 'projects', component: ProjectComponent },
    { path: 'projects/view/:id', component: ProjectViewComponent},
    { path: 'my-projects', component: ProjectMyComponent },
    { path: 'projects/create', component: ProjectCreateComponent },
    { path: 'projects/update/:id', component: ProjectUpdateComponent },
    { path: 'projects/view/:id', component: ProjectViewComponent},
    { path: 'help-request', component: HelpRequestComponent },
    { path: 'help-request/create', component: CreateHelpRequestComponent },
    { path: 'users', component: UserComponent},
    { path: 'users/:id', component: UserViewComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'admin/users', component: UserListComponent },
    { path: 'admin/users/create', component: UserCreateComponent },
    { path: 'admin/users/update/:id', component: UserUpdateComponent },
    
  //{ path: 'campus', component: CampusComponent },
    { path: 'campus/create', component: CampusCreateComponent },
  { path: 'campus/update', component: CampusUpdateComponent },
 // { path: 'campus/delete', component: CampusDeleteComponent },

    { path: 'skill/create', component: SkillCreateComponent },
  { path: 'skill/update', component: SkillUpdateComponent },
  //{ path: 'skill/delete', component: SkillDeleteComponent },
  
    { path: 'role/create', component: RoleCreateComponent },
  { path: 'role/update', component: RoleUpdateComponent },
  //{ path: 'role/delete', component: RoleDeleteComponent }

];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
