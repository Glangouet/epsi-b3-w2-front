import { Component, OnInit } from '@angular/core';
import {SkillService} from '../../services/skill.service';
import {Skill} from '../../class/skill';

@Component({
  selector: 'app-skill-update',
  templateUrl: './skill-update.component.html',
  styleUrls: ['./skill-update.component.css']
})
export class SkillUpdateComponent implements OnInit {

  private skill: Skill;

  constructor(private skillService: SkillService) { }

  ngOnInit() {
  }

  public updateSkill() {
      this.skillService.updateSkill(this.skill, state => {
        console.log(state);
        this.skill = state;
      });
  }

}
