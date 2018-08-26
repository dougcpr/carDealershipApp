import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FilterOptionsService {
  tempArray = [];
  generateFilterOptions(type, data) {
    this.tempArray = [];
    data.map((element) => {
      if (!this.tempArray.includes(element[type])) {
        this.tempArray.push(element[type]);
      }
      this.tempArray.sort();
    });
    return this.tempArray;
  }
}
