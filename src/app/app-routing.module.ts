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

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'project', component: ProjectComponent },
    { path: 'project/create', component: ProjectCreateComponent },
    { path: 'project/update/{id}', component: ProjectUpdateComponent },
    { path: 'project/view/{id}', component: ProjectViewComponent},
    { path: 'users', component: UserComponent},
    { path: 'users/{id}', component: UserViewComponent},
    { path: 'admin', component: AdminComponent },
    { path: 'admin/user/create', component: UserCreateComponent},
    { path: 'admin/user/{id}', component: UserUpdateComponent },
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
