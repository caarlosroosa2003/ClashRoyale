import { TestBed } from '@angular/core/testing';

import { CartasSerService } from './cartas-ser.service';

describe('CartasSerService', () => {
  let service: CartasSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartasSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
