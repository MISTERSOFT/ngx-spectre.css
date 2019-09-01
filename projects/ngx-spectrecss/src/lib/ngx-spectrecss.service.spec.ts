import { TestBed } from '@angular/core/testing';

import { NgxSpectrecssService } from './ngx-spectrecss.service';

describe('NgxSpectrecssService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxSpectrecssService = TestBed.get(NgxSpectrecssService);
    expect(service).toBeTruthy();
  });
});
