import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { CarOptions } from '../../models/carOptionsModel';
import { CarListingsService } from '../../services/carListings.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  providers: [CarListingsService]
})
export class FilterComponent implements OnInit {
  flag;
  filteredCarOptions;
  modelKeys;
  @Input('title') title;
  @Input('carListings') carListings = [];
  @Input('carMakes') carMakes = [];
  @Input('carYears') carYears = [];
  @Input('carColors') carColors = [];
  @Output() carProperties = new EventEmitter();
  @Output() searchFlag = new EventEmitter();
  @Output() searchParams = new EventEmitter();
  model = new CarOptions(null, null, null, null, null, null, null, null, null);
  constructor(
    private carListing: CarListingsService
  ) {}
  ngOnInit() {
    this.searchFlag.emit(false);
  }

  // matches against ALL of the properties
  searchAll () {
    this.flag = true;
    this.carListing.searchForAllMatchingResults(this.model)
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
    this.carListing.searchForSomeMatchingResults(this.model)
      .subscribe((data) => {
        this.carProperties.emit(data);
        // send back the search parameters to let the user know what they
        // searched by in the table
        this.searchParams.emit(this.model);
        this.searchFlag.emit(true);
      });
  }
  // reset the search parameters
  reset () {
    this.model = new CarOptions(null, null, null, null, null, null, null, null, null);
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

}
