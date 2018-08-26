import { TestBed, async, tick, fakeAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import {Location} from '@angular/common';

import { routes } from './app-routing.module';
import { Router } from '@angular/router';

import {
  MatButtonModule,
  MatCardModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatOptionModule, MatSelectModule, MatTableModule,
  MatToolbarModule
} from '@angular/material';


import { CardLayoutComponent } from './layouts/card-layout/card-layout.component';

import {HttpClientModule} from '@angular/common/http';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FilterComponent} from './components/filter/filter.component';
import {TableComponent} from './components/table/table.component';
import {CamelToHumanPipe} from './pipes/camelToHuman.pipe';

describe('AppComponent', () => {
  let location: Location;
  let router: Router;
  let fixture;
  // uses async to complete any async processes before continuing to
  // create the test bed
  beforeEach(async(() => {
    // configured test module by importing and
    // declaring dependencies of app.component
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatFormFieldModule,
        MatCardModule,
        MatOptionModule,
        MatToolbarModule,
        HttpClientModule,
        MatSelectModule,
        MatCheckboxModule,
        MatButtonModule,
        MatTableModule
      ],
      declarations: [
        AppComponent,
        HomeComponent,
        CardLayoutComponent,
        FilterComponent,
        TableComponent,
        CamelToHumanPipe
      ],
      // a fixture object is created, such that an independent
      // component for testing is created
    }).compileComponents();
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  }));
  it('should create the app', async(() => {
    // creates an instance of app component
    const app = fixture.debugElement.componentInstance;
    // invokes a jasmine "expect" to determine if the app is created
    expect(app).toBeTruthy();
  }));
  it('navigate to "" redirects you to /home', fakeAsync(() => {
    router.navigate(['']);
    tick();
    expect(location.path()).toBe('/home');
  }));
  it('navigate to "home" directs you to /home', fakeAsync(() => {
    router.navigate(['/home']);
    tick();
    expect(location.path()).toBe('/home');
  }));
});
