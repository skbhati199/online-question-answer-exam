import { TestBed, async, inject } from '@angular/core/testing';

import { CanDeactivateRouteGuard } from './can-deactivate-route.guard';

describe('CanDeactivateRouteGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanDeactivateRouteGuard]
    });
  });

  it('should ...', inject([CanDeactivateRouteGuard], (guard: CanDeactivateRouteGuard) => {
    expect(guard).toBeTruthy();
  }));
});
