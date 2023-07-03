import { Component, OnInit, Input } from '@angular/core';
import { ISkill } from 'src/app/interfaces/skills.interface';

@Component({
  selector: 'app-skill-bar',
  templateUrl: './skill-bar.component.html',
  styleUrls: ['./skill-bar.component.scss']
})
export class SkillBarComponent implements OnInit {
  @Input() data: ISkill;
  @Input() activate: boolean = true;
  @Input() color?: string; 
  constructor() { }

  ngOnInit() {
  }

  getCustomColorClass(){
    return this.color || '';
  }

}
