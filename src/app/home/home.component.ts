import { Component, OnInit } from '@angular/core';
import { CarListingsService } from '../services/carListings.service';
import { FilterOptionsService } from '../services/filterOptions.service';
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
    private carDataService: CarListingsService,
    private filter: FilterOptionsService
  ) { }

  ngOnInit() {
    // on init grab the card to post process
    // the make, color, and year options
    // send car data to the service to return the filter options
    this.carDataService.getCarListings()
      .subscribe((data: any) => {
        this.carListings = data;
        this.carMakes = this.filter.generateFilterOptions('make', this.carListings);
        this.carYears = this.filter.generateFilterOptions('year', this.carListings);
        this.carColors = this.filter.generateFilterOptions('color', this.carListings);
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
}
