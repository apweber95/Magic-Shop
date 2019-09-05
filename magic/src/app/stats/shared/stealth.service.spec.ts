import { TestBed } from '@angular/core/testing';

import { StealthService } from './stealth.service';

describe('StealthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StealthService = TestBed.get(StealthService);
    expect(service).toBeTruthy();
  });
});
