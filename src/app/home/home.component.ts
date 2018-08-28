import { Component, OnInit } from '@angular/core';

// Services
import { CarListingsService } from '../services/carListings/carListings.service';


// Car Table Header Model
import { carResults } from '../models/carResults.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [CarListingsService]
})
export class HomeComponent implements OnInit {
  searchData = [];
  carListings = [];
  carMakes = [];
  searchFlag;
  carYears = [];
  carColors = [];
  searchParams = [];
  query = [];
  tableKeys = carResults;
  constructor(
    private carService: CarListingsService
  ) { }

  ngOnInit() {
    this.getCarListings();
    this.getFilterOptions();
  }
  getCarListings (): void {
    // on init grab the card to post process
    // the make, color, and year options
    // send car data to the service to return the filter options
    this.carService.getCarListings()
      .subscribe((data) => {
        this.carListings = data.carData;

      }, (error) => {
        this.handleError(error);
      });
  }
  getFilterOptions (): void {
    this.carService.getFilterOptions()
      .subscribe((filter) => {
        this.carColors = filter.color.sort();
        this.carMakes = filter.make.sort();
        this.carYears = filter.year.sort();
      }, (error) => {
        this.handleError(error);
      });
  }
  onSearch (searchResults) {
    this.searchData = searchResults;
  }
  bindSearchParams (data) {
    this.query = data;
    this.searchParams = this.parseKeysOfModel(data);
  }
  bindSearchFlag (flagValue) {
    this.searchFlag = flagValue;
  }
  parseKeysOfModel(model) {
    const keys = Object.keys(model);
    return keys.sort();
  }
  handleError (error) {
    console.log(error);
  }
}
