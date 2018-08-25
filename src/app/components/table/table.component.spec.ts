import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {CamelToHumanPipe} from '../../pipes/camelToHuman.pipe';
import { TableComponent } from './table.component';

import {
  MatButtonModule,
  MatCardModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatOptionModule, MatRadioModule, MatSelectModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [
          TableComponent,
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
          MatTableModule
        ]
      })
        .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(TableComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
