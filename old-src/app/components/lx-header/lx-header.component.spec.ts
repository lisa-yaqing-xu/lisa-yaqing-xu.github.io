import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LxHeaderComponent } from './lx-header.component';

describe('LxHeaderComponent', () => {
  let component: LxHeaderComponent;
  let fixture: ComponentFixture<LxHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LxHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LxHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
