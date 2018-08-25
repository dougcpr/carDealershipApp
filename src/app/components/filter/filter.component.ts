import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { RetrieveCarDataService } from '../../services/retreieve-car-data.service';
import { CarOptions } from '../../models/carOptionsModel';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  providers: [RetrieveCarDataService]
})
export class FilterComponent implements OnInit {
  carData;
  flag;
  filteredCarOptions;
  modelKeys;
  carMake = [];
  carYear = [];
  carColor = [];
  @Input('title') title;
  @Output() carProperties = new EventEmitter();
  @Output() searchParams = new EventEmitter();
  @Output() keys = new EventEmitter();
  model = new CarOptions(null, null, null, null, null, null, null, null, null);
  constructor(
    private carDataService: RetrieveCarDataService
  ) {}
  ngOnInit() {
    // on init grab the card to post process
    // the make, color, and year options
    this.carDataService.getCarData()
      .subscribe((data: any) => {
        this.carData = data;
        this.carData.map((element) => {
          if (!this.carMake.includes(element.make)) {
            this.carMake.push(element.make);
          }
        });
        this.carData.map((element) => {
          if (!this.carYear.includes(element.year)) {
            this.carYear.push(element.year);
          }
        });
        this.carData.map((element) => {
          if (!this.carColor.includes(element.color)) {
            this.carColor.push(element.color);
          }
        });
        this.carMake.sort();
        this.carYear.sort();
        this.carColor.sort();
      });
  }

  // matches against ALL of the properties
  searchAll () {
    this.flag = true;
    this.carDataService.searchForAllMatchingResults(this.model)
      .subscribe((data) => {
        // emit the objects to the home component,
        // so you can import them into the table
        this.keys.emit(Object.keys(this.carData[0]));
        this.carProperties.emit(data);
        this.searchParams.emit(this.model);
      });
  }
  // matches against SOME of the properties
  searchSome () {
    this.flag = true;
    this.carDataService.searchForSomeMatchingResults(this.model)
      .subscribe((data) => {
        this.keys.emit(Object.keys(this.carData[0]));
        this.carProperties.emit(data);
        this.searchParams.emit(this.model);
      });
  }
  reset () {
    this.model = new CarOptions(null, null, null, null, null, null, null, null, null);
    this.filteredCarOptions = [];
    this.modelKeys = [];
  }


  selChk (val, name) {
    // if the value was unchecked, remove it from the model
    // the default method keeps it in the model
    // and ruins of only looking for what was asked for
    if (!val) {
      delete this.model[name];
    }
  }

}
