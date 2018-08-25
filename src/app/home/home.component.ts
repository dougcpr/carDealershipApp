import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchData = null;
  searchParams = [];
  tableKeys = [];
  constructor() { }

  ngOnInit() {
  }

  onSearch (data) {
    this.searchData = data;
  }
  bindSearchParams (data) {
    this.searchParams = data;
  }
  bindTableKeys (keys) {
    keys.splice(0, 1);
    this.tableKeys = keys;
  }
}
