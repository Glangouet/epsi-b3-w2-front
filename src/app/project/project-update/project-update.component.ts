import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../class/project';

@Component({
  selector: 'app-project-update',
  templateUrl: './project-update.component.html',
  styleUrls: ['./project-update.component.css']
})
export class ProjectUpdateComponent implements OnInit {

  private proj: Project;
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    
  }

  public updateProject() {
    this.projectService.updateProject(this.proj, state => {
      console.log(state);
      this.proj = state;
    });
  }

}
