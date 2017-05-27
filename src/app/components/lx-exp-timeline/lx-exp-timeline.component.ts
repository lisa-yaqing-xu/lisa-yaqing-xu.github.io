import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lx-exp-timeline',
  templateUrl: './lx-exp-timeline.component.html',
  styleUrls: ['../../styles/body.scss','./lx-exp-timeline.component.scss']
})
export class LxExpTimelineComponent implements OnInit {
  @Input() data:any = [];
  constructor() { }

  ngOnInit() {
  }

}
