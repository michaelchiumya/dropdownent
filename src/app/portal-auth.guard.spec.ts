import { TestBed } from '@angular/core/testing';

import { PortalAuthGuard } from './portal-auth.guard';

describe('PortalAuthGuard', () => {
  let guard: PortalAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PortalAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
