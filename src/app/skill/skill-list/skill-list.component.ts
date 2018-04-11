import { Component, OnInit } from '@angular/core';
import { SkillService } from '../../services/skill.service';
import { Skill } from '../../class/skill';
import { User } from '../../class/user';
import { Campus } from '../../class/campus';
import { Role } from '../../class/role';


@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.css']
})
export class SkillListComponent implements OnInit {

  private skill: Skill;
  private skills: Skill[];
  constructor(private skillService: SkillService) { }

  ngOnInit() {
  }

  public getSkills() {
    this.skillService.getAllSkills(state => {
      console.log(state);
      this.skills = state;
    });
  }

  public getSkill() {
    this.skillService.getSkillById(this.skill.id, state => {
      console.log(state);
      this.skill = state;
    });
  }

  //public getSkillBySkill() {
  //  this.skillService.getSkillsBySkillId(this.skill.id, state => {
  //    console.log(state);
  //    this.skill = state;
  //  });
  //}


}
