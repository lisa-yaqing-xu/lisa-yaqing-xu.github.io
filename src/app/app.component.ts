import { Component, HostBinding, HostListener, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ArtService } from './services/art.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  // @ts-ignore
  @ViewChild('header') set header (header){
    if(!header){
      return;
    }
    this.baseHeaderHeight = header.element.nativeElement.getBoundingClientRect().height;
    document.body.style.setProperty('--lx-header-height',`${this.baseHeaderHeight}px`);
    this.scrollCutoffValue = 420 - 43;
  };
  @HostBinding('class.lx-app') baseClass = true;
  public collapsedHeader = false;
  public baseHeaderHeight = 0;
  private scrollCutoffValue = 0;

  private lastScrollPos = 0;
  @HostListener('window:scroll')
  onScroll() {
    this.collapsedHeader = (window.scrollY >  this.scrollCutoffValue);
    this.lastScrollPos = window.scrollY;
  }

  constructor(private router: Router, private art: ArtService){
    this.art.loadArt();
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)) {
        return;
      }
      if(this.lastScrollPos > this.scrollCutoffValue){
        // this lets router-outlet load the content first
        setTimeout(()=>{
          window.scrollTo({top: this.scrollCutoffValue + 1});
         },0);
      }
    });
  }
  
}
