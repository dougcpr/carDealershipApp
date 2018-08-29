import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { FilterComponent } from './views/home/components/filter/filter.component';
import { TableComponent } from './genericComponents/table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule,
  MatCheckboxModule, MatFormFieldModule, MatIconModule, MatInputModule, MatOptionModule, MatRadioModule,
  MatSelectModule, MatSliderModule, MatTableModule, MatToolbarModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CamelToHumanPipe} from './pipes/camelToHuman.pipe';
import { CardLayoutComponent } from './layouts/card-layout/card-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilterComponent,
    TableComponent,
    CamelToHumanPipe,
    CardLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatOptionModule,
    MatToolbarModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    MatTableModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
