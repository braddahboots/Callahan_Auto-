import Automobile from '.auto_mobile';

export default class Truck extends Automobile {

  constructor( model, color, wheelSize, doors, trunkSize, engineCyl, seating, sunRoof, gasTankSize, transmission, gas ) {
    super( model, color, 'Large', 2, trunkSize, 8, 2, sunRoof, 'Large', transmission, gas );
  }
}