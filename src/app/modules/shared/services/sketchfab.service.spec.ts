import { TestBed } from '@angular/core/testing';

import { SketchfabService } from './sketchfab.service';

describe('SketchfabService', () => {
  let service: SketchfabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SketchfabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
