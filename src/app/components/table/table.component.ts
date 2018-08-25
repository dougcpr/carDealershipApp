import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input('filteredOptions') filteredOptions;
  @Input('searchParams') searchParams;
  @Input('keys') keys;
  constructor() { }

  ngOnInit() {
  }
  alterColor (key, value) {
    if (this.searchParams.includes(key)) {
      if (value) {
        return '#90EE90';
      }
    }
  }

}
