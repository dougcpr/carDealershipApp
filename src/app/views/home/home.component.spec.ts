import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { HomeComponent } from './home.component';

import {
  MatButtonModule,
  MatCardModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatOptionModule, MatRadioModule, MatSelectModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CamelToHumanPipe } from '../../pipes/camelToHuman.pipe';
import { CardLayoutComponent} from '../../layouts/card-layout/card-layout.component';
import { TableComponent } from '../../genericComponents/table/table.component';
import { FilterComponent } from './components/filter/filter.component';
import { HttpClientModule } from '@angular/common/http';


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
    beforeEach(async(() => {
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
});
