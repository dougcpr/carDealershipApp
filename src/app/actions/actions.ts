// Section 1
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { CarDetails } from './../models/carOptionsModel';

// Define the type of actions
export const ADD       = '[TUTORIAL] Add';
export const REMOVE   = '[TUTORIAL] Remove';

// strong typing for creating the actions
export class AddTutorial implements Action {
  readonly type = ADD;

  constructor(public payload: CarDetails) {}
}

export class RemoveTutorial implements Action {
  readonly type = REMOVE;

  constructor(public payload: number) {}
}

// Section 4
export type Actions = AddTutorial | RemoveTutorial;