import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CreateProjectComponent} from './project/create-project/create-project.component';

const appRoutes: Routes = [
        {
            path: '', component: HomeComponent,
            path: 'project/create', component: CreateProjectComponent
        },
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
