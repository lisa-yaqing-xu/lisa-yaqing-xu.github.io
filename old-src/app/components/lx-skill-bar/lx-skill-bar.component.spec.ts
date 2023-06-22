import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LxSkillBarComponent } from './lx-skill-bar.component';

describe('LxSkillBarComponent', () => {
  let component: LxSkillBarComponent;
  let fixture: ComponentFixture<LxSkillBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LxSkillBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LxSkillBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
