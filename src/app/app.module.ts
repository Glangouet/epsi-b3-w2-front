import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { UserComponent } from './user/user.component';
import { LeftMenuComponent } from './layout/left-menu/left-menu.component';
import { CreateProjectComponent } from './project/create-project/create-project.component';


@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProjectComponent,
    UserComponent,
    LeftMenuComponent,
    CreateProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
      AuthService,
      UserService,
      ProjectService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
