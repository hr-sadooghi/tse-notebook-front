import { TestBed } from '@angular/core/testing';

import { NamadListService } from './namad-list.service';

describe('NamadListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NamadListService = TestBed.get(NamadListService);
    expect(service).toBeTruthy();
  });
});
