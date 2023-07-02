import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { artGuard } from './art.guard';

describe('artGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => artGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
