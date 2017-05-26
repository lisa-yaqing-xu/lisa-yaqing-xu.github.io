import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LxSkillbarComponent } from './lx-skillbar.component';

describe('LxSkillbarComponent', () => {
  let component: LxSkillbarComponent;
  let fixture: ComponentFixture<LxSkillbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LxSkillbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LxSkillbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
