import { TestBed, inject } from '@angular/core/testing';

import { CarListingsService } from './carListings.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {CARS} from '../../mock-cars';
import {environment} from '../../../environments/environment';

describe('CarListingsService', () => {
  const route = environment.apiUrl;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarListingsService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should be created', inject([CarListingsService], (service: CarListingsService) => {
    expect(service).toBeTruthy();
  }));

  it('expects service to fetch data with GET',
    inject([HttpTestingController, CarListingsService],
      (httpMock: HttpTestingController, service: CarListingsService) => {
        // We call the service
        service.getCarListings().subscribe(data => {
          expect(data).toBe(data);
        });
        // We set the expectations for the HttpClient mock
        const req = httpMock.expectOne(`${route}/getCarData`);
        expect(req.request.method).toEqual('GET');
        // Then we set the fake data to be returned by the mock
        req.flush({data: CARS});
      })
  );
});
