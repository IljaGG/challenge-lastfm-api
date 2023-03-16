import { TestBed } from '@angular/core/testing';

import { LautfmApiService } from './lastfm-api.service';

describe('LautfmApiService', () => {
  let service: LautfmApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LautfmApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
