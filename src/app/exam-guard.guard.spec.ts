import { TestBed } from '@angular/core/testing';

import { ExamGuardGuard } from './exam-guard.guard';

describe('ExamGuardGuard', () => {
  let guard: ExamGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ExamGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
