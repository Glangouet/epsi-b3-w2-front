import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-project-my',
  templateUrl: './project-my.component.html',
  styleUrls: ['./project-my.component.css']
})
export class ProjectMyComponent implements OnInit {

  private projects: any;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
      this.projectService.getAllProjects(data => {
          console.log(data);
          this.projects = data;
      });
  }

}
