import {Component, Input, OnInit} from '@angular/core';

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
  constructor() { }

  ngOnInit() {}
  alterColor (key, value) {
    if (this.searchParams.includes(key)) {
      if (this.query[key] === value) {
        return '#90EE90';
      }
      if (key === 'price') {
        if (this.query.price > value) {
          return '#90EE90';
        }
      }
    }
  }

}
