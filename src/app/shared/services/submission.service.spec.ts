import { TestBed, inject } from '@angular/core/testing';

import { SubmissionService } from './submission.service';

describe('SubmissionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubmissionService]
    });
  });

  it('should ...', inject([SubmissionService], (service: SubmissionService) => {
    expect(service).toBeTruthy();
  }));
});
