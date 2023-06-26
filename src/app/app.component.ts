import { AfterViewInit, Component, ElementRef, Host, HostBinding, HostListener, ViewChild } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  // @ts-ignore
  @ViewChild('header') set header (header){
    if(!header){
      return;
    }
    this.baseHeaderHeight = header.element.nativeElement.getBoundingClientRect().height;
    document.body.style.setProperty('--lx-header-height',`${this.baseHeaderHeight}px`);
  };
  @HostBinding('class.lx-app') baseClass = true;
  public collapsedHeader = false;
  public baseHeaderHeight = 0;

  @HostListener('window:scroll')
  onScroll() {
    this.collapsedHeader = (window.scrollY >  420 - 43);

  }
}
