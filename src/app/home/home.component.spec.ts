import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

import {
  MatButtonModule,
  MatCardModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatOptionModule, MatRadioModule, MatSelectModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CamelToHumanPipe } from '../pipes/camelToHuman.pipe';
import { CardLayoutComponent} from '../layouts/card-layout/card-layout.component';
import { TableComponent } from '../components/table/table.component';
import { FilterComponent } from '../components/filter/filter.component';
import { HttpClientModule } from '@angular/common/http';

import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
// this confuses me? why are they injecting potentially a large data set to test against
import { CARS } from '../mock-cars';
import { CarListingsService } from '../services/carListings/carListings.service';


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let carListingsService;
  let getCarsSpy;
    beforeEach(async(() => {
      // create spy for hero service to look at get heroes
      carListingsService = jasmine.createSpyObj('CarListingsService', ['getCarListings']);
      // invoke get Heroes to get data set
      getCarsSpy = carListingsService.getCarListings.and.returnValue( of(CARS) );
      TestBed.configureTestingModule({
        declarations: [
          HomeComponent,
          CardLayoutComponent,
          TableComponent,
          FilterComponent,
          CamelToHumanPipe
        ],
        imports: [
          FormsModule,
          ReactiveFormsModule,
          BrowserAnimationsModule,
          MatRadioModule,
          MatIconModule,
          MatFormFieldModule,
          MatCardModule,
          MatOptionModule,
          MatToolbarModule,
          MatSelectModule,
          MatCheckboxModule,
          MatButtonModule,
          MatTableModule,
          HttpClientModule
        ],
        // provide hero service and jasmine spy
        providers: [
          { provide: CarListingsService, useValue: carListingsService }
        ]
      })
        .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(HomeComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

  // see if hero service was called...what? that's it?
  it('should call carListingsService', async(() => {
    expect(getCarsSpy.calls.any()).toBe(true);
  }));
});
