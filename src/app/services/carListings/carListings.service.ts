import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/index';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/internal/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CarListingsService {
  route = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) { }

  getCarListings (): Observable<any> {
    return this.http.get(`${this.route}/getCarData`)
      .pipe(map((carData: Array<any>) => {
          return carData;
        }));
  }
  getFilterOptions (): Observable<any> {
    return this.http.get(`${this.route}/getCarData`)
      .pipe(map((carData: Array<any>) => {
        const filterOptions = {};
        // reverse index data based on key values
        if (carData) {
          // map over the car data
          carData.map((element) => {
            // map over the keys of the car data
            Object.keys(element).map((keyName) => {
              // determine if the filtered options has a unique key
              if (filterOptions[keyName]) {
                // if unique key already has a value, then don't include that value in the list
                if (!filterOptions[keyName].includes(element[keyName])) {
                  filterOptions[keyName].push(element[keyName]);
                }
              } else {
                // if it isn't a unique key, make it a unique key
                filterOptions[keyName] = [element[keyName]];
              }
            });
          });
        }
        return filterOptions;
      }));
  }
  searchForAllMatchingResults(body): Observable<any> {
      return this.http.post(`${this.route}/searchAll`, body, httpOptions);
  }
  searchForSomeMatchingResults(body): Observable<any> {
    return this.http.post(`${this.route}/searchSome`, body, httpOptions);
  }
}
