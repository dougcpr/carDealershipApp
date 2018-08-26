import { Component, OnInit } from '@angular/core';
import { RetrieveCarDataService } from '../services/retrieve-car-data.service';
import { FilterOptionsService } from '../services/FilterOptions.service';

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
    private carDataService: RetrieveCarDataService,
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
