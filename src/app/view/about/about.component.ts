import {Component, OnInit, HostListener, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['../../styles/body.scss', './about.component.scss']
})
export class AboutComponent implements OnInit {
  @ViewChild('skillChart') skillChart: ElementRef;
  @ViewChild('programmingChart') programmingChart: ElementRef;
  @ViewChild('timeline') timeline: ElementRef;

  generalSkillsColor: string = 'salmon';
  generalSkills: any = this.getGeneralSkillValues();
  programmingLanguages: any = this.getProgrammingSkillValues();
  experience: any = this.getExperience();

  skillActivate: boolean = false;
  programmingActivate: boolean = false;
  timelineActivate: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }


  @HostListener('window:scroll', ['$event'])
  onScroll($event) {
    this.skillActivate = this.getActivateValue(this.skillActivate, this.skillChart);
    this.programmingActivate = this.getActivateValue(this.programmingActivate, this.programmingChart);
    this.timelineActivate = this.getActivateValue(this.timelineActivate, this.timeline);
  }

  getActivateValue(activate, element){
    if(!activate){
      let offset = this.getElementTop(element);
      return (window.pageYOffset > offset + 200);
    }
    return activate;
  }

  getElementTop(element){
    return element.nativeElement.getBoundingClientRect().top
  }

  getGeneralSkillValues() {
    return [
      {name: 'Programming', value: 100},
      {name: 'Photoshop', value: 95},
      {name: 'Illustration', value: 78},
      {name: 'Character Design', value: 85},
      {name: 'UI Design', value: 65}
    ];
  }

  getProgrammingSkillValues() {
    return [
      {name: 'JavaScript', value: 100},
      {name: 'Typescript', value: 82},
      {name: 'HTML5', value: 98},
      {name: 'CSS3', value: 98},
      {name: 'Angular', value: 88},
      {name: 'Google Polymer', value: 77},
      {name: 'D3.js', value: 70},
      {name: 'Java', value: 65},
      {name: 'Python', value: 55},
      {name: 'Kotlin', value: 40},
      {name: 'C++', value: 36},
    ];
  }

  getExperience() {
    return [
      {
        type: 'work',
        where: 'CA Technologies',
        start: 'July 2016',
        end: 'present',
        title: 'Associate Software Engineer',
        subtype: 'Full-Time'
      },

      {
        type: 'edu',
        where: 'Stony Brook University',
        start: 'August 2015',
        end: 'May 2016',
        title: 'M.S. in Computer Science',
        subtype: 'Grad School'
      },

      {
        type: 'work',
        where: 'CA Technologies',
        start: 'June 2015',
        end: 'June 2016',
        title: 'Senior Research Aide',
        subtype: 'Internship/Part-Time'
      },

      {
        type: 'work',
        where: 'Eduware Inc.',
        start: 'October 2014',
        end: 'February 2015',
        title: 'Graphic Artist',
        subtype: 'Internship/Part-Time'
      },

      {
        type: 'edu',
        where: 'Stony Brook University',
        start: 'August 2011',
        end: 'May 2015',
        title: 'B.S. in Computer Science and Applied Math & Statistics',
        subtype: 'College'
      }
    ];
  }


}
