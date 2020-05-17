import { TestBed } from '@angular/core/testing';

import { SitunaGuard } from './situna.guard';

describe('SitunaGuard', () => {
  let guard: SitunaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SitunaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
