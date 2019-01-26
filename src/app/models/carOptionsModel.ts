export class CarOptions {
  constructor (
    make: String,
    year: Number,
    color: String,
    hasSunroof: Boolean,
    isFourWheelDrive: Boolean,
    hasLowMiles: Boolean,
    hasPowerWindows: Boolean,
    hasNavigation: Boolean,
    hasHeatedSeats: Boolean,
  ) {}
}

export interface CarDetails {
  make: String;
  year: Number;
  color: String;
  hasSunroof: Boolean;
  isFourWheelDrive: Boolean;
  hasLowMiles: Boolean;
  hasPowerWindows: Boolean;
  hasNavigation: Boolean;
  hasHeatedSeats: Boolean;
}
