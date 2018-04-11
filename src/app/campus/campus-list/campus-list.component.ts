import { Component, OnInit } from '@angular/core';
import { CampusService } from '../../services/campus.service';
import { Campus } from '../../class/campus';
import { User } from '../../class/user';
import { Skill } from '../../class/skill';
import { Role } from '../../class/role';


@Component({
  selector: 'app-campus-list',
  templateUrl: './campus-list.component.html',
  styleUrls: ['./campus-list.component.css']
})
export class CampusListComponent implements OnInit {

  private campus: Campus;
  private campuss: Campus[];
  constructor(private campusService: CampusService) { }

  ngOnInit() {
  }

  public getCampuss() {
    this.campusService.getAllCampuss(state => {
      console.log(state);
      this.campuss = state;
    });
  }

  public getCampus() {
    this.campusService.getCampusById(this.campus.id, state => {
      console.log(state);
      this.campus = state;
    });
  }

  //public getCampusBySkill() {
  //  this.campusService.getCampussByCampusId(this.campus.id, state => {
  //    console.log(state);
  //    this.campus = state;
  //  });
  //}


}
