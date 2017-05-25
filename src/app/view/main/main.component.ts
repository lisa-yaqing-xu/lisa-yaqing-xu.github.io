import {Component, OnInit, ElementRef, ViewChild, HostListener} from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @ViewChild('header') headerElement: ElementRef;
  menuCollapsed: boolean = false;
  subPages: Array<string> = [];
  headerHeight: number;



  constructor(private router: Router) {
    //get the router
    let routerObj = this.router.config[0].children;
    this.subPages = routerObj
      .filter(route => !route.redirectTo)
      .map(route => route.path);
  }

  ngOnInit() {
    this.headerHeight = this.headerElement.nativeElement.offsetHeight;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    if(window.pageYOffset > this.headerHeight - 10) this.menuCollapsed = true;
    else this.menuCollapsed = false;
  }

  getBodyOffset(){
    if (this.menuCollapsed) return (this.headerHeight + 38) + 'px';
    else return '10px';
  }




}
