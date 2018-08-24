import { TestBed, inject } from '@angular/core/testing';

import { RetreieveCarDataService } from './retreieve-car-data.service';

describe('RetreieveCarDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RetreieveCarDataService]
    });
  });

  it('should be created', inject([RetreieveCarDataService], (service: RetreieveCarDataService) => {
    expect(service).toBeTruthy();
  }));
});
