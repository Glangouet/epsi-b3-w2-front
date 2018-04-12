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
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { CampusService } from './services/campus.service';
import { SkillService } from './services/skill.service';
import { RoleService } from './services/role.service';
import { CampusCreateComponent } from './campus/campus-create/campus-create.component';
import { CampusUpdateComponent } from './campus/campus-update/campus-update.component';
import { SkillCreateComponent } from './skill/skill-create/skill-create.component';
import { SkillUpdateComponent } from './skill/skill-update/skill-update.component';
import { RoleCreateComponent } from './role/role-create/role-create.component';
import { RoleUpdateComponent } from './role/role-update/role-update.component';
import {CustomDatePipe} from './pipes/custom-date.pipe';
import { HelpRequestComponent } from './help-request/help-request.component';
import { CreateHelpRequestComponent } from './help-request/create-help-request/create-help-request.component';


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
    UserListComponent,
    LoginComponent,
    CampusCreateComponent,
    CampusUpdateComponent,
    SkillCreateComponent,
    SkillUpdateComponent,
    RoleCreateComponent,
    RoleUpdateComponent,
    CustomDatePipe,
    HelpRequestComponent,
    CreateHelpRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
      AuthService,
      UserService,
      ProjectService,
      CampusService,
      SkillService,
      RoleService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
