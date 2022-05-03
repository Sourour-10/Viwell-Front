import { TestBed } from '@angular/core/testing';

import { ReactfeedService } from './reactfeed.service';

describe('ReactfeedService', () => {
  let service: ReactfeedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReactfeedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
