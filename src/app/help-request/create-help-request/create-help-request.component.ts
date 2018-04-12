import { Component, OnInit } from '@angular/core';
import {HelpRequest} from '../../class/help-request';
import {HelpRequestService} from '../../services/help-request.service';
import {UserService} from '../../services/user.service';
import {ProjectService} from '../../services/project.service';

@Component({
  selector: 'app-create-help-request',
  templateUrl: './create-help-request.component.html',
  styleUrls: ['./create-help-request.component.css']
})
export class CreateHelpRequestComponent implements OnInit {

  private request: HelpRequest;
  private projects: any;
  private users: any;

  constructor(private helpRequestService: HelpRequestService, private userService: UserService, private projectService: ProjectService) { }

  ngOnInit() {
    this.request = new HelpRequest();
    this.userService.getUsersByRole(null, data => {
      this.users = data;
    });
    this.projectService.getAllProjects(data => {
      this.projects = data;
    });
  }

  public addRequest() {
    this.helpRequestService.addHelpRequest(this.request, state => {
      console.log(state);
    });
  }
}
