import { Component, OnInit } from '@angular/core';
import { RetrieveCarDataService } from '../services/retrieve-car-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchData = [];
  carListings = [];
  carMakes = [];
  carYears = [];
  carColors = [];
  searchParams = [];
  query = [];
  tableKeys = [];
  constructor(
    private carDataService: RetrieveCarDataService
  ) { }

  ngOnInit() {
    // on init grab the card to post process
    // the make, color, and year options
    // send car data to the service to return the filter options
    this.carDataService.getCarListings()
      .subscribe((data: any) => {
        this.carListings = data;
        this.carListings.map((element) => {
          if (!this.carMakes.includes(element.make)) {
            this.carMakes.push(element.make);
          }
        });
        this.carListings.map((element) => {
          if (!this.carYears.includes(element.year)) {
            this.carYears.push(element.year);
          }
        });
        this.carListings.map((element) => {
          if (!this.carColors.includes(element.color)) {
            this.carColors.push(element.color);
          }
        });
        this.carMakes.sort();
        this.carYears.sort();
        this.carColors.sort();
      });
  }

  onSearch (data) {
    this.searchData = data;
  }
  bindSearchParams (data) {
    this.query = data;
    this.searchParams = this.parseKeysOfModel(data);
  }
  bindTableKeys (keys) {
    keys.splice(0, 1);
    this.tableKeys = keys;
  }
  parseKeysOfModel(model) {
    const keys = Object.keys(model);
    return keys.sort();
  }
}
