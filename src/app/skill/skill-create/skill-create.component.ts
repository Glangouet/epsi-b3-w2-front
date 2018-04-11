import { Component, OnInit } from '@angular/core';
import {SkillService} from '../../services/skill.service';
import {Skill} from '../../class/skill';

@Component({
  selector: 'app-skill-create',
  templateUrl: './skill-create.component.html',
  styleUrls: ['./skill-create.component.css']
})
export class SkillCreateComponent implements OnInit {

  private skill: Skill;
  constructor(private skillService: SkillService) { }

  ngOnInit() {
    this.skill = new Skill();
  }

  public addSkill() {
    this.skillService.createSkill(this.skill, (state) => {
      console.log(state);
      this.skill = new Skill();
    });
    console.log(this.skill);
  }

}
