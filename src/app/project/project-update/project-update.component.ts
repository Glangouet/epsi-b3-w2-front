import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../class/project';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-project-update',
  templateUrl: './project-update.component.html',
  styleUrls: ['./project-update.component.css']
})
export class ProjectUpdateComponent implements OnInit {

  private project: Project;
  private userList: any;

  constructor(private projectService: ProjectService, private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsersByRole(null, data => {
      this.userList = data;
    });
    this.project = new Project();
    this.route.params.subscribe(params => this.project.id = params.id);
    this.projectService.getProjectById(this.project.id, data => {
      this.project.dateStart    = data['startDate'];
      this.project.dateEnd      = data['endDate'];
      this.project.name         = data['name'];
      this.project.description  = data['description'];
      this.project.partners     = data['partners'];
    });
    console.log(this.project);
  }

  public updateProject() {
    this.projectService.updateProject(this.project, state => {
      console.log(state);
    });
  }

}
