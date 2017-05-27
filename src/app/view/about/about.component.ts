import {Component, OnInit, HostListener} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss', '../../styles/body.scss']
})
export class AboutComponent implements OnInit {
  testData: any = [
    {name: 'JavaScript', value: 99},
    {name: 'Java', value: 70}
  ];
  constructor() { }

  ngOnInit() {
  }

  @HostListener('scroll', ['$event']) onScroll($event) {
    console.log('scrolling2');
  }

}
