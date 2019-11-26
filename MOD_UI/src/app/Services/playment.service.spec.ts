import { TestBed } from '@angular/core/testing';

import { PlaymentService } from './playment.service';

describe('PlaymentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlaymentService = TestBed.get(PlaymentService);
    expect(service).toBeTruthy();
  });
});
