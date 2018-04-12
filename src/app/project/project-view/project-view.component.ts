import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../../services/project.service';
import {ActivatedRoute} from '@angular/router';
import {Project} from '../../class/project';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css']
})
export class ProjectViewComponent implements OnInit {

  private projectId: any;
  private project: any;

  constructor(private projectService: ProjectService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.project = new Project();
    this.route.params.subscribe(params => this.projectId = params.id);
    this.projectService.getProjectById(this.projectId, data => {
      this.project = data;
    });
  }

}
