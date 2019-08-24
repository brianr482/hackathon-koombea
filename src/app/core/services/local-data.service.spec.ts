import { TestBed } from '@angular/core/testing';

import { LocalDataService } from './local-data.service';

describe('LocalDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocalDataService = TestBed.get(LocalDataService);
    expect(service).toBeTruthy();
  });
});
