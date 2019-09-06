import { TestBed } from '@angular/core/testing';

import { PerceptionService } from './perception.service';

describe('PerceptionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PerceptionService = TestBed.get(PerceptionService);
    expect(service).toBeTruthy();
  });
});
