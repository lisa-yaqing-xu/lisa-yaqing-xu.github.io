import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { LXExperience } from '../../config/experience';
import { LXSkills } from '../../config/skills';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  @ViewChild('skillChart') skillChart: ElementRef;
  @ViewChild('timeline') timeline: ElementRef;

  public experience = LXExperience;
  public skills = LXSkills;

  public skillActivate = false;
  public timelineActivate = false;
  constructor() { }

  @HostListener('window:scroll')
  onScroll() {
    let activationHeight = 50;
    this.skillActivate = this.getActivateValue(this.skillActivate, this.skillChart, activationHeight);
    this.timelineActivate = this.getActivateValue(this.timelineActivate, this.timeline, activationHeight);
  }

  getActivateValue(activate: boolean, element: ElementRef, elementOffset: number) {
    if (!activate) {
      let offset = this.getElementTop(element);
      return ((window.scrollY + window.innerHeight) > (offset + elementOffset));
    }
    return activate;
  }

  getElementTop(element: ElementRef) {
    return element.nativeElement.offsetTop;
  }
}
