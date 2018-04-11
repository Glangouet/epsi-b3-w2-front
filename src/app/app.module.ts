import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './home/home.component';
import { ContentComponent } from './layout/content/content.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import {ProjectService} from './services/project.service';
import {UserService} from './services/user.service';
import {AuthService} from './services/auth.service';
import { ProjectComponent } from './project/project.component';
import { LeftMenuComponent } from './layout/left-menu/left-menu.component';
import { AdminComponent } from './admin/admin.component';
import { ProjectViewComponent } from './project/project-view/project-view.component';
import { ProjectUpdateComponent } from './project/project-update/project-update.component';
import { ProjectCreateComponent } from './project/project-create/project-create.component';
import { UserComponent } from './user/user.component';
import { UserViewComponent } from './user/user-view/user-view.component';
import { UserCreateComponent } from './admin/user-create/user-create.component';
import { UserUpdateComponent } from './admin/user-update/user-update.component';
import { ProjectMyComponent } from './project/project-my/project-my.component';
import { UserListComponent } from './admin/user-list/user-list.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProjectComponent,
    LeftMenuComponent,
    AdminComponent,
    ProjectViewComponent,
    ProjectUpdateComponent,
    ProjectCreateComponent,
    UserComponent,
    UserCreateComponent,
    UserUpdateComponent,
    UserViewComponent,
    ProjectMyComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
      AuthService,
      UserService,
      ProjectService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
