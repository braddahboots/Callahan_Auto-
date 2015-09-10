import Automobile from '.auto_mobile';

export default class SUV extends Automobile {

  constructor( model, color, wheelSize, doors, trunkSize, engineCyl, seating, sunRoof, gasTankSize, transmission, gas ) {
    super( model, color, 'Large', 4, 'Large', 8, 5, sunRoof, 'Large', transmission, gas );
  }
}