import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lx-skillbar',
  templateUrl: './lx-skillbar.component.html',
  styleUrls: ['./lx-skillbar.component.scss']
})
export class LxSkillbarComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
