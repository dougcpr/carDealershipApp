import { TestBed, inject } from '@angular/core/testing';
import { FilterOptionsService } from './filterOptions.service';

describe('FilterOptionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilterOptionsService]
    });
  });

  it('should be created', inject([FilterOptionsService], (service: FilterOptionsService) => {
    expect(service).toBeTruthy();
  }));
});
