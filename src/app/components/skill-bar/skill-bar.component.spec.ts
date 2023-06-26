import {ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SkillBarComponent } from './skill-bar.component';

describe('SkillBarComponent', () => {
  let component: SkillBarComponent;
  let fixture: ComponentFixture<SkillBarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
