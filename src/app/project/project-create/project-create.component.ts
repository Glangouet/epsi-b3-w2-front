import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../../services/project.service';
import {Project} from '../../class/project';
import {User} from '../../class/user';
import {UserService} from '../../services/user.service';


@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.css']
})
export class ProjectCreateComponent implements OnInit {

  private project: Project;
  private partnerstest: any;

  constructor(private projectService: ProjectService, private userService: UserService) { }

  ngOnInit() {
    this.project = new Project();
    this.userService.getUsersByRole(null, data => {
        this.partnerstest = data;
    });
  }

  public addProject() {
    console.log(this.project);
    this.projectService.createProject(this.project, state => {
      console.log(state);
      this.project = new Project();
    });
  }

}
