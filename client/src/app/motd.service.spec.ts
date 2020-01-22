import { TestBed } from '@angular/core/testing';

import { MotdService } from './motd.service';

describe('MotdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MotdService = TestBed.get(MotdService);
    expect(service).toBeTruthy();
  });
});
