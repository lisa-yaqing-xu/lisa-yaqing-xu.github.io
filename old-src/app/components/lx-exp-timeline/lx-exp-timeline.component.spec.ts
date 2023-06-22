import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LxExpTimelineComponent } from './lx-exp-timeline.component';

describe('LxExpTimelineComponent', () => {
  let component: LxExpTimelineComponent;
  let fixture: ComponentFixture<LxExpTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LxExpTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LxExpTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
