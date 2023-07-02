import { TestBed } from '@angular/core/testing';

import { OverlayHandlerService } from './overlay-handler.service';

describe('OverlayHandlerService', () => {
  let service: OverlayHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OverlayHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
