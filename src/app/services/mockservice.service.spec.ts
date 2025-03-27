import { TestBed } from '@angular/core/testing';

import { MockserviceService } from './mockservice.service';

describe('MockserviceService', () => {
  let service: MockserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
