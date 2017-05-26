import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LxSkillchartComponent } from './lx-skillchart.component';

describe('LxSkillchartComponent', () => {
  let component: LxSkillchartComponent;
  let fixture: ComponentFixture<LxSkillchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LxSkillchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LxSkillchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
