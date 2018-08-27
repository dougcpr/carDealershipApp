import { Component, OnInit } from '@angular/core';

// Services
import { CarListingsService } from '../services/carListings/carListings.service';
import { FilterOptionsService } from '../services/filterOptions/filterOptions.service';

// Car Table Header Model
import { carResults } from '../models/carResults.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
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
    private carService: CarListingsService,
    private filter: FilterOptionsService
  ) { }

  ngOnInit() {
    // on init grab the card to post process
    // the make, color, and year options
    // send car data to the service to return the filter options
    this.carService.getCarListings()
      .subscribe((data) => {
      this.carListings = data.carData;
      this.carColors = data.filterOptions.color.sort();
      this.carMakes = data.filterOptions.make.sort();
      this.carYears = data.filterOptions.year.sort();
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
