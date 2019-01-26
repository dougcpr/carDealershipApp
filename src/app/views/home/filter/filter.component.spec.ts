import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FilterComponent } from './filter.component';
import {
  MatButtonModule,
  MatCardModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatOptionModule, MatSelectModule,
  MatToolbarModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CarListingsService} from '../../../services/carListings/carListings.service';
import {HttpClientModule} from '@angular/common/http';

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FilterComponent
      ],
      imports: [
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
        MatButtonModule
      ],
      providers: [
        CarListingsService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
