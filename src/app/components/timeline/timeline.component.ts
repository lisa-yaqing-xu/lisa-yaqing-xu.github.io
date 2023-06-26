import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {
  @Input() data: any = [];
  @Input() activate: boolean = true;
  constructor() { }

  calculateTransition(index: number) {
    return `opacity ${this.data.length * .2}s ${index * .2}s ease-in`;
  }
}
