import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CarOptions } from '../../../../models/carOptionsModel';
import { CarListingsService } from '../../../../services/carListings/carListings.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  providers: [CarListingsService]
})
export class FilterComponent implements OnInit {
  // I/O
  @Input('title') title;
  @Input('carMakes') carMakes = [];
  @Input('carYears') carYears = [];
  @Input('carColors') carColors = [];
  @Input('carPrices') carPrices;
  @Output() carProperties = new EventEmitter();
  @Output() searchFlag = new EventEmitter();
  @Output() searchParams = new EventEmitter();
  // Variables
  flag;
  filteredCarOptions;
  modelKeys;
  model = new CarOptions('', 0, '', false, false, false, false, false, false);
  constructor(
    private carService: CarListingsService
  ) {}
  ngOnInit() {
    this.searchFlag.emit(false);
  }

  // matches against ALL of the properties
  searchAll () {
    this.flag = true;
    this.carService.searchForAllMatchingResults(this.model)
      .subscribe((data) => {
        // emit the objects to the home component,
        // so you can import them into the table
        this.carProperties.emit(data);
        this.searchParams.emit(this.model);
        this.searchFlag.emit(true);
      });
  }
  // matches against SOME of the properties
  searchSome () {
    this.flag = true;
    this.carService.searchForSomeMatchingResults(this.model)
      .subscribe((data) => {
        this.carProperties.emit(data);
        // send back the home parameters to let the user know what they
        // searched by in the table
        this.searchParams.emit(this.model);
        this.searchFlag.emit(true);
      });
  }
  // reset the home parameters
  reset () {
    this.model = new CarOptions('', 0, '', false, false, false, false, false, false);
    this.filteredCarOptions = [];
    this.modelKeys = [];
    this.searchFlag.emit(false);
  }


  selChk (val, name) {
    // if the checkbox was unchecked, remove it from the model
    // the default method keeps it in the model
    // and ruins of only looking for what was asked for
    if (!val) {
      delete this.model[name];
    }
  }
  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }

    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

}
