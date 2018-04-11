import { Component, OnInit } from '@angular/core';
import {SkillService} from '../../services/skill.service';
import {Skill} from '../../class/skill';

@Component({
  selector: 'app-skill-delete',
  templateUrl: './skill-delete.component.html',
  styleUrls: ['./skill-delete.component.css']
})
export class SkillDeleteComponent implements OnInit {

  private skill: Skill;
  constructor(private skillService: SkillService) { }

  ngOnInit() {
    this.skill = new Skill();
  }

  public deleteSkill() {
    this.skillService.deleteSkill(this.skill, (state) => {
      console.log(state);
    });
  }
  
}
