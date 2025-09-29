import { TestBed } from '@angular/core/testing';

import { Mockservice } from './mockservice';

describe('Mockservice', () => {
  let service: Mockservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Mockservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
