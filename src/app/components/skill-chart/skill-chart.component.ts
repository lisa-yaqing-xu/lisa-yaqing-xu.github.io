import { Component, Input, HostBinding } from '@angular/core';
import { ISkill } from 'src/app/interfaces/skills.interface';

@Component({
  selector: 'app-skill-chart',
  templateUrl: './skill-chart.component.html',
  styleUrls: ['./skill-chart.component.scss']
})
export class SkillChartComponent {
  @Input('skillList') set skillList(skillList: ISkill[]) {
    this._skillList = skillList.map(data => ({ ...data, proficiencyLabel: this.getProficiencyString(data.value)}))
  };
  get skillList(){
    return this._skillList;
  }
  @Input('activate') set activateSetter(active: boolean) {
    this.invisible = !active;
    this.activate = active;
  }
  @Input() color?: string;
  @Input() labelledBy: string;

  @HostBinding('class.lx-skills') baseClass = true;
  @HostBinding('class.lx-skills--invis') invisible = true;

  private _skillList = [];
  activate = false;
  metrics: Array<String> = ['Novice', 'Adequate', 'Comfortable', 'Excellent'];
  constructor() {

  }

  getProficiencyString(value: number) {
      let index = Math.min(3, Math.floor(value/(100/this.metrics.length)));
      return this.metrics[index];
  }
}
