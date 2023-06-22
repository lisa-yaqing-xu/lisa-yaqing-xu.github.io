import {Component, OnInit, ElementRef, ViewChild, HostListener} from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['../../styles/body.scss','./main.component.scss']
})
export class MainComponent implements OnInit {
  @ViewChild('header') headerElement: ElementRef;
  menuCollapsed: boolean = false;
  subPages: Array<string> = [];
  headerHeight: number;
  year: number;


  constructor(private router: Router) {
    //get the router
    let routerObj = this.router.config[0].children;
    this.subPages = routerObj
      .filter(route => !route.redirectTo)
      .map(route => route.path);
    this.year = new Date().getFullYear();
  }

  ngOnInit() {
    this.headerHeight = this.headerElement.nativeElement.offsetHeight;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    this.menuCollapsed = (window.pageYOffset > this.headerHeight - 43);
  }

  getBodyOffset(){
    if (this.menuCollapsed) return (this.headerHeight + 13) + 'px';
    else return '10px';
  }


}
