import { Component, OnInit } from '@angular/core';
import {CampusService} from '../../services/campus.service';
import {Campus} from '../../class/campus';

@Component({
  selector: 'app-campus-update',
  templateUrl: './campus-update.component.html',
  styleUrls: ['./campus-update.component.css']
})
export class CampusUpdateComponent implements OnInit {

  private campus: Campus;

  constructor(private campusService: CampusService) { }

  ngOnInit() {
  }

  public updateCampus() {
      this.campusService.updateCampus(this.campus, state => {
        console.log(state);
        this.campus = state;
      });
  }

}
