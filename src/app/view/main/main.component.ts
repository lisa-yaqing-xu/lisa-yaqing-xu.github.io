import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  subPages: Array<string> = [];
  constructor(private router: Router) {
    let routerObj = this.router.config[0].children;
    this.subPages = routerObj
      .filter(route => !route.redirectTo)
      .map(route => route.path);
  }

  ngOnInit() {
  }

}
