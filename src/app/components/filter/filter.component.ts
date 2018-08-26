import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { CarOptions } from '../../models/carOptionsModel';
import { RetrieveCarDataService } from '../../services/retrieve-car-data.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  providers: [RetrieveCarDataService]
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
  @Output() searchParams = new EventEmitter();
  @Output() keys = new EventEmitter();
  model = new CarOptions(null, null, null, null, null, null, null, null, null);
  constructor(
    private carDataService: RetrieveCarDataService
  ) {}
  ngOnInit() {}

  // matches against ALL of the properties
  searchAll () {
    this.flag = true;
    this.carDataService.searchForAllMatchingResults(this.model)
      .subscribe((data) => {
        // emit the objects to the home component,
        // so you can import them into the table
        this.keys.emit(Object.keys(this.carListings[0]));
        this.carProperties.emit(data);
        this.searchParams.emit(this.model);
      });
  }
  // matches against SOME of the properties
  searchSome () {
    this.flag = true;
    this.carDataService.searchForSomeMatchingResults(this.model)
      .subscribe((data) => {
        this.keys.emit(Object.keys(this.carListings[0]));
        this.carProperties.emit(data);
        this.searchParams.emit(this.model);
      });
  }
  // reset the search parameters
  reset () {
    this.model = new CarOptions(null, null, null, null, null, null, null, null, null);
    this.filteredCarOptions = [];
    this.modelKeys = [];
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
