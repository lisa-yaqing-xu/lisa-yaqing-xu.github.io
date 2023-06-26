import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-skill-chart',
  templateUrl: './skill-chart.component.html',
  styleUrls: ['./skill-chart.component.scss']
})
export class SkillChartComponent implements OnInit {
  @Input() skillList: Array<any> = [];
  @Input('activate') set activateSetter (active:boolean){
    this.invisible = !active;
    this.activate = active;
  }
  @Input() color?: string;

  @HostBinding('class.lx-skills') baseClass = true;
  @HostBinding('class.lx-skills--invis') invisible = true;

  activate = false;
  metrics: Array<String> = ['Beginner', 'Novice', 'Adequate', 'Comfortable', 'Excellent'];
  constructor() {

  }

  ngOnInit() {
  }
  /*
  * */
}
