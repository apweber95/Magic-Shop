import { TestBed } from '@angular/core/testing';

import { ItemCatalogService } from './item-catalog.service';

describe('ItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemCatalogService = TestBed.get(ItemCatalogService);
    expect(service).toBeTruthy();
  });
});
