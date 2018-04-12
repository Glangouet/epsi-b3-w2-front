import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProjectComponent} from './project/project.component';
import {ProjectViewComponent} from './project/project-view/project-view.component';
import {ProjectCreateComponent} from './project/project-create/project-create.component';
import {ProjectUpdateComponent} from './project/project-update/project-update.component';
import {UserComponent} from './user/user.component';
import {UserViewComponent} from './user/user-view/user-view.component';
import {AdminComponent} from './admin/admin.component';
import {UserCreateComponent} from './admin/user-create/user-create.component';
import {UserUpdateComponent} from './admin/user-update/user-update.component';
import {ProjectMyComponent} from './project/project-my/project-my.component';
import {UserListComponent} from './admin/user-list/user-list.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { CampusCreateComponent } from './campus/campus-create/campus-create.component';
import { CampusUpdateComponent } from './campus/campus-update/campus-update.component';
import { SkillCreateComponent } from './skill/skill-create/skill-create.component';
import { SkillUpdateComponent } from './skill/skill-update/skill-update.component';
import { RoleCreateComponent } from './role/role-create/role-create.component';
import { RoleUpdateComponent } from './role/role-update/role-update.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'projects', component: ProjectComponent },
    { path: 'my-projects', component: ProjectMyComponent },
    { path: 'projects/create', component: ProjectCreateComponent },
    { path: 'projects/update/:id', component: ProjectUpdateComponent },
    { path: 'projects/view/:id', component: ProjectViewComponent},
    { path: 'users', component: UserComponent},
    { path: 'users/:id', component: UserViewComponent},
    { path: 'admin', component: AdminComponent },
    { path: 'admin/users', component: UserListComponent },
    { path: 'admin/users/create', component: UserCreateComponent},
    { path: 'admin/users/view/:id', component: UserUpdateComponent },
    { path: 'campus/create', component: CampusCreateComponent },
    { path: 'campus/update', component: CampusUpdateComponent },
    { path: 'skill/create', component: SkillCreateComponent },
    { path: 'skill/update', component: SkillUpdateComponent },
    { path: 'role/create', component: RoleCreateComponent },
    { path: 'role/update', component: RoleUpdateComponent },
    
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
