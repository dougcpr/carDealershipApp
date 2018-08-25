import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchData = [];
  searchParams = [];
  query = [];
  tableKeys = [];
  constructor() { }

  ngOnInit() {
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
