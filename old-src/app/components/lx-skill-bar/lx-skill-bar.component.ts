import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lx-skill-bar',
  templateUrl: './lx-skill-bar.component.html',
  styleUrls: ['./lx-skill-bar.component.scss']
})
export class LxSkillBarComponent implements OnInit {
  @Input() data: any;
  @Input() activate: boolean = true;
  @Input() color: string;
  constructor() { }

  ngOnInit() {
  }

  getCustomColorClass(){
    return this.color || '';
  }

}
