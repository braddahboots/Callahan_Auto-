import Truck from './truck';

export default class Semi extends Truck {

  constructor( model, color, engineCyl, seating, transmission, fueltype ) {
    super( model, color, engineCyl, transmission, fueltype );
  }
}