import { Component, OnInit } from '@angular/core';
import { User } from '../../class/user';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../class/project';

@Component({
  selector: 'app-project-my',
  templateUrl: './project-my.component.html',
  styleUrls: ['./project-my.component.css']
})
export class ProjectMyComponent implements OnInit {

  private user: User;
  private project: Project;
  private myProjects: Project[];
  private allProjects: Project[];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {

  }

  public getProjects() {
    this.projectService.getAllProjects(state => {
      console.log(state);
      this.allProjects = state;
    });
  }

  public getProject() {
    this.projectService.getProjectById(this.project.id, state => {
      console.log(state);
      this.project = state;
    });
  }

  public getMyProjects() {
    this.projectService.getProjectsByUserId(this.user.id, state => {
      console.log(state);
      this.project = state;
    });
  }

}
