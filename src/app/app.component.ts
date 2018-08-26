import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  MatButtonModule,
  MatCardModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatOptionModule, MatSelectModule,
  MatToolbarModule
} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor (
    private router: Router
  ) {}
  navigate (route) {
    this.router.navigate(route);
  }
}
