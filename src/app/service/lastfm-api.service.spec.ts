import { TestBed } from '@angular/core/testing';

import { LastfmApiService } from './lastfm-api.service';

describe('LautfmApiService', () => {
  let service: LastfmApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LastfmApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
