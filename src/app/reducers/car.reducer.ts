import { Action } from '@ngrx/store';
import { CarDetails } from './../models/carOptionsModel';
import * as TutorialActions from './../actions/actions';

const initialState: CarDetails = {
  make: '',
  year: 0,
  color: '',
  hasSunroof: false,
  isFourWheelDrive: false,
  hasLowMiles: false,
  hasPowerWindows: false,
  hasNavigation: false,
  hasHeatedSeats: false,
};

// takes in the initial object and action
export function reducer(state: CarDetails[] = [initialState], action: TutorialActions.Actions) {

  // switches on the type of action
  switch (action.type) {
    case TutorialActions.ADD:
      return [...state, action.payload];
    default:
      return state;
  }
}