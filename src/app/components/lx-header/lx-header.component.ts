import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-lx-header',
  templateUrl: './lx-header.component.html',
  styleUrls: ['./lx-header.component.scss']
})
export class LxHeaderComponent implements OnInit {
  @Input() routes: Array<string>;
  @Input() enableSmall: boolean;
  constructor() { }

  ngOnInit() {
  }

}
