import { Component, OnInit } from '@angular/core';
import {CampusService} from '../../services/campus.service';
import {Campus} from '../../class/campus';

@Component({
  selector: 'app-campus-create',
  templateUrl: './campus-create.component.html',
  styleUrls: ['./campus-create.component.css']
})
export class CampusCreateComponent implements OnInit {

  private campus: Campus;
  constructor(private campusService: CampusService) { }

  ngOnInit() {
    this.campus = new Campus();
  }

  public addCampus() {
    this.campusService.createCampus(this.campus, (state) => {
      console.log(state);
      this.campus = new Campus();
    });
    console.log(this.campus);
  }

}
