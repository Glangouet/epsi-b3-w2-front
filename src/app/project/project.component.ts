import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  private projects: any;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.getAllProjects(data => {
      this.projects = data;
      console.log(this.projects);
    });
  }

}
