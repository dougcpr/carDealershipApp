import { RetrieveCarDataService } from './retrieve-car-data.service';
import { HttpErrorResponse } from '@angular/common/http';
let httpClientSpy: { get: jasmine.Spy };

beforeEach(() => {
  // set up a spy for the http client
  httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
  // create a new instance of the service
  retrieveCarDataService = new RetrieveCarDataService(<any> httpClientSpy);
});

// preform a test to return car data
it('should return expected cars (HttpClient called once)', () => {
  httpClientSpy.get.and.returnValue();

  // subscribe to the observable and you are expecting cars
  retrieveCarDataService.getCarData().subscribe(
    cars => expect(cars).toEqual(expectedCars, 'expected cars'),
    fail
  );
  // you expect one call to be made
  expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
});
// generate an error when making an http call
it('should return an error when the server returns a 404', () => {
  const errorResponse = new HttpErrorResponse({
    error: 'test 404 error',
    status: 404, statusText: 'Not Found'
  });

  httpClientSpy.get.and.returnValue(asyncError(errorResponse));

  retrieveCarDataService.getCarData().subscribe(
    cars => fail('expected an error, not cars'),
    error  => expect(error.message).toContain('test 404 error')
  );
});
