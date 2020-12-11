import { TestBed } from '@angular/core/testing';

import { Submissions.FacadeService } from './submissions.facade.service';

describe('Submissions.FacadeService', () => {
  let service: Submissions.FacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Submissions.FacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
