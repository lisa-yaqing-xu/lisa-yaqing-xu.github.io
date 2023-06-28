import { Component, ElementRef, HostBinding, HostListener, Input } from '@angular/core';
import { RouteConfig } from 'src/app/config/routes';
import { IRouteConfigItem } from 'src/app/interfaces/route-config.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './header-collapsed.component.scss']
})
export class HeaderComponent {
  @Input() @HostBinding('class.lx-header--collapsed') set menuCollapsed(collapsed: boolean) {
    this._menuCollapsed = collapsed;
    if(!collapsed){
      this.hamburgerActive = false;
    }
  };
  get menuCollapsed() {
    return this._menuCollapsed;
  }
  readonly smallScreenCutoff = 400;
  @HostBinding('class.lx-header') baseClass = true;
  @HostBinding('class.lx-header--small') smallScreen = window.innerWidth <= this.smallScreenCutoff;
  routes: IRouteConfigItem[] = Object.values(RouteConfig);

  hamburgerActive = false;

  private _menuCollapsed = false;

  @HostListener('window:resize') onResize() {
    this.smallScreen = window.innerWidth <= this.smallScreenCutoff;
    if (!this.smallScreen) {
      this.hamburgerActive = false;
    }
  }

  constructor(private element: ElementRef) { }

  openHamburger() {
    this.hamburgerActive = true;
  }

  closeHamburger(){
    this.hamburgerActive = false;
  }
}
