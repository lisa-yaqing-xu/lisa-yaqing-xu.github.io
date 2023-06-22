import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LxGalleryComponent } from './lx-gallery.component';

describe('LxGalleryComponent', () => {
  let component: LxGalleryComponent;
  let fixture: ComponentFixture<LxGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LxGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LxGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
