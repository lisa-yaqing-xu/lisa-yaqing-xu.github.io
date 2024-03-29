import { Component, ElementRef, EventEmitter, HostBinding, HostListener, Input, Output, ViewChild } from '@angular/core';

import { IRouteConfigItem } from '../../interfaces/route-config.interface';
import { OverlayHandler, OverlayHandlerService } from '../../services/overlay-handler.service';
import { RouteConfig } from '../../config/routes.config';
import { SMALL_SCREEN } from 'src/app/config/breakpoints';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './header-collapsed.component.scss']
})
export class HeaderComponent {
  @HostBinding('class.lx-header') baseClass = true;
  @HostBinding('class.lx-header--small') smallScreen = window.innerWidth <= SMALL_SCREEN;
  @ViewChild('hamburger') hamburgerRef: ElementRef;
  @ViewChild('navigation') navigationRef: ElementRef;
  @HostListener('window:resize') onResize() {
    this.smallScreen = window.innerWidth <= SMALL_SCREEN;
    if (!this.smallScreen) {
      this.hamburgerActive = false;
    }
  }

  @HostListener('document:keydown.escape') escape() {
    this.exitHamburger();
  }
  @Input() @HostBinding('class.lx-header--collapsed') set menuCollapsed(collapsed: boolean) {
    if (this.smallScreen) {
      this.setFocusForAccessibility(collapsed)
    };
    this._menuCollapsed = collapsed;
    if (!collapsed) {
      this.hamburgerActive = false;
    }
  };
  get menuCollapsed() {
    return this._menuCollapsed;
  }

  @Output() hamburgerMenuState = new EventEmitter<boolean>();
  public set hamburgerActive(active: boolean) {
    if (this._hamburgerActive === active) {
      return;
    }
    this._hamburgerActive = active;
    this.hamburgerMenuState.emit(active);
    if (active) {
      this.overlayData = this.overlay.setup({
        baseElement: this.navigationRef,
        focusTrapElements: [this.hamburgerRef, this.navigationRef]
      });
    } else {
      this.overlayData?.teardown();
      this.overlayData = null;
    }
  }
  public get hamburgerActive() {
    return this._hamburgerActive;
  }

  public routes: IRouteConfigItem[] = Object.values(RouteConfig);

  public linkClass = 'lx-header__link';
  public hamburgerClass = 'lx-header__hamburger';

  private _menuCollapsed = false;
  private _hamburgerActive = false;

  private overlayData?: OverlayHandler;

  constructor(private element: ElementRef, private overlay: OverlayHandlerService) { }

  setFocusForAccessibility(collapsed: boolean) {
    // settimeouts are to run the focus on next js execution so angular lifecycle happens before it
    if (collapsed && document.activeElement?.classList.contains(this.linkClass)) {
      setTimeout(() => { this.hamburgerRef.nativeElement.focus(); }, 0);
    } if (!collapsed && document.activeElement?.classList.contains(this.hamburgerClass)) {
      setTimeout(() => { this.navigationRef.nativeElement.querySelector(`.${this.linkClass}`).focus(); }, 0);
    }
  }

  exitHamburger() {
    if(this.smallScreen && this.menuCollapsed){
      this.hamburgerActive = false;
      this.hamburgerRef.nativeElement.focus();
    }    
  }
}
