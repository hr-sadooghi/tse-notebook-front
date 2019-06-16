import { TestBed } from '@angular/core/testing';

import { ApiCoreService } from './api-core.service';

describe('ApiCoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiCoreService = TestBed.get(ApiCoreService);
    expect(service).toBeTruthy();
  });
});
