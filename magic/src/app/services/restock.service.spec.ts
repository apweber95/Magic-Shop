import { TestBed } from '@angular/core/testing';

import { RestockService } from './restock.service';

describe('RestockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestockService = TestBed.get(RestockService);
    expect(service).toBeTruthy();
  });
});
