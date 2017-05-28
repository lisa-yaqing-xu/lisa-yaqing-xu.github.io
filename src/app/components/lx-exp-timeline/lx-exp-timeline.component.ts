import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lx-exp-timeline',
  templateUrl: './lx-exp-timeline.component.html',
  styleUrls: ['../../styles/body.scss','./lx-exp-timeline.component.scss']
})
export class LxExpTimelineComponent implements OnInit {
  @Input() data:any = [];
  @Input() activate: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  calculateTransition(index){
    return `all ${this.data.length * .2}s ${index*.2}s ease-in`;
  }

}
