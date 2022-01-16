import { TestBed } from '@angular/core/testing';

import { GuardProfilGuard } from './guard-profil.guard';

describe('GuardProfilGuard', () => {
  let guard: GuardProfilGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardProfilGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
