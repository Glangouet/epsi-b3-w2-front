import { Component, OnInit } from '@angular/core';
import {HelpRequestService} from '../services/help-request.service';

@Component({
  selector: 'app-help-request',
  templateUrl: './help-request.component.html',
  styleUrls: ['./help-request.component.css']
})
export class HelpRequestComponent implements OnInit {

  private helpRequests: any;

  constructor(private helpRequestService: HelpRequestService) { }

  ngOnInit() {
    this.helpRequestService.getAll(data => {
      this.helpRequests = data;
      console.log(data);
    });
  }

}
