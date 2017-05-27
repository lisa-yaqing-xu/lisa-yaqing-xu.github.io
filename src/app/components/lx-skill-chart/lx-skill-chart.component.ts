import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lx-skill-chart',
  templateUrl: './lx-skill-chart.component.html',
  styleUrls: ['./lx-skill-chart.component.scss']
})
export class LxSkillChartComponent implements OnInit {
  @Input() skillList: Array<any> = [];
  @Input() activate: boolean = true;
  constructor() {

  }

  ngOnInit() {
  }
  /*
  * */
}
