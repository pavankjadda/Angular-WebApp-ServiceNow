import {TestBed} from '@angular/core/testing';

import {TimeoutInterceptorService} from './timeout-interceptor.service';

describe('TimeoutInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TimeoutInterceptorService = TestBed.get(TimeoutInterceptorService);
    expect(service).toBeTruthy();
  });
});
