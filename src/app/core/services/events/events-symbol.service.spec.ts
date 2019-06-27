import { TestBed } from '@angular/core/testing';

import { EventsSymbolService } from './events-symbol.service';

describe('EventsSymbolService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventsSymbolService = TestBed.get(EventsSymbolService);
    expect(service).toBeTruthy();
  });
});
