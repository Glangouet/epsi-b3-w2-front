import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../../services/project.service';
import {Project} from '../../class/project';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.css']
})
export class ProjectCreateComponent implements OnInit {

  private project: Project;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.project = new Project();
  }

  public addProject() {
    console.log(this.project);
    this.projectService.createProject(this.project, state => {
      console.log(state);
      this.project = new Project();
    });
  }


}
