import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/index';
import { environment } from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RetrieveCarDataService {
  route = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) { }

  getCarListings (): Observable<any> {
    return this.http.get(`${this.route}/getCarData`);
  }
  searchForAllMatchingResults(body): Observable<any> {
      return this.http.post(`${this.route}/searchAll`, body, httpOptions);
  }
  searchForSomeMatchingResults(body): Observable<any> {
    return this.http.post(`${this.route}/searchSome`, body, httpOptions);
  }
}
