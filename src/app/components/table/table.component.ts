import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input('filteredOptions') filteredOptions = [''];
  @Input('searchParams') searchParams;
  @Input('query') query;
  @Input('searchFlag') searchFlag;
  @Input('keys') keys;
  @ViewChild(MatSort) sort: MatSort;
  constructor() { }

  ngOnInit() {
    this.filteredOptions.sort = this.sort;
  }
  alterColor (key, value) {
    if (this.searchParams.includes(key)) {
      if (this.query[key] === value) {
        return '#90EE90';
      } else {
        return 'lightblue';
      }
      }
  }

}
