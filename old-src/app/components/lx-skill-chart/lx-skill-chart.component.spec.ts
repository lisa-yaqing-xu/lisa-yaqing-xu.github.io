import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LxSkillChartComponent } from './lx-skill-chart.component';

describe('LxSkillChartComponent', () => {
  let component: LxSkillChartComponent;
  let fixture: ComponentFixture<LxSkillChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LxSkillChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LxSkillChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
