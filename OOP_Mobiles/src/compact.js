import Automobile from './auto_mobile';

export default class Compact extends Automobile {

  constructor( model, color, doors, seating, transmission, fueltype ) {
    super( model, color, doors, 4, seating, transmission, fueltype );
  }
}