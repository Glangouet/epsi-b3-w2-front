import { Component, OnInit } from '@angular/core';
import {CampusService} from '../../services/campus.service';
import {Campus} from '../../class/campus';

@Component({
  selector: 'app-campus-delete',
  templateUrl: './campus-delete.component.html',
  styleUrls: ['./campus-delete.component.css']
})
export class CampusDeleteComponent implements OnInit {

  private campus: Campus;
  constructor(private campusService: CampusService) { }

  ngOnInit() {
    this.campus = new Campus();
  }

  public deleteCampus() {
    this.campusService.deleteCampus(this.campus, (state) => {
      console.log(state);
    });
  }
  
}
