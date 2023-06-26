import { Component, ElementRef, HostBinding, Input } from '@angular/core';
import { RouteConfig } from 'src/app/config/routes';
import { IRouteConfigItem } from 'src/app/interfaces/route-config.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{
  @HostBinding('class.lx-header') baseClass = true;
  @Input() @HostBinding('class.lx-header--collapsed') menuCollapsed = false;
  routes: IRouteConfigItem[] = Object.values(RouteConfig);

  constructor(private element: ElementRef) {}


}
