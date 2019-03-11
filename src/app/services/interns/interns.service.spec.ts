import { TestBed } from '@angular/core/testing';

import { InternsService } from './interns.service';

describe('InternsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InternsService = TestBed.get(InternsService);
    expect(service).toBeTruthy();
  });
});
