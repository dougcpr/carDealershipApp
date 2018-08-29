import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardLayoutRoutingModule } from './card-layout-routing.module';
import { CardLayoutComponent } from './card-layout.component';
import { FilterComponent } from '../../views/home/components/filter/filter.component';
import { TableComponent } from '../../genericComponents/table/table.component';

// Angular Material
import {
  MatButtonModule, MatCardModule,
  MatCheckboxModule, MatFormFieldModule, MatIconModule, MatOptionModule, MatRadioModule,
  MatSelectModule, MatTableModule, MatToolbarModule
} from '@angular/material';

// Pipes
import {CamelToHumanPipe} from '../../pipes/camelToHuman.pipe';
import {HomeComponent} from '../../views/home/home.component';

@NgModule({
  imports: [
    CommonModule,
    CardLayoutRoutingModule,
    MatRadioModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,
    MatOptionModule,
    MatToolbarModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    MatTableModule
  ],
  declarations: [
    CardLayoutComponent,
    FilterComponent,
    TableComponent,
    FilterComponent,
    TableComponent,
    CamelToHumanPipe,
    CardLayoutComponent,
    HomeComponent
  ]
})
export class CardLayoutModule { }
