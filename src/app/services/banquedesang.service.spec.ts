import { TestBed } from '@angular/core/testing';

import { BanquedesangService } from './banquedesang.service';

describe('BanquedesangService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BanquedesangService = TestBed.get(BanquedesangService);
    expect(service).toBeTruthy();
  });
});
