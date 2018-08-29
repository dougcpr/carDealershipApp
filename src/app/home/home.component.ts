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
  minPrice;
  maxPrice;
  carPrices = [];
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
    this.getFilterOptions();
  }
  getFilterOptions (): void {
    // on init grab the card to post process
    // the make, color, and year options
    // send car data to the service to return the filter options
    this.carService.getFilterOptions()
      .subscribe((filter) => {
        this.carColors = filter.color.sort();
        this.carMakes = filter.make.sort();
        this.carYears = filter.year.sort();
        this.carPrices = this.roundCarPrices(filter.price);
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
  roundCarPrices (prices) {
    prices.map((price, index) => {
      prices[index] = Math.round(price / 1000) * 1000;
    });
    prices.sort();
    prices = Array.from(new Set(prices));
    return prices;
  }
}
