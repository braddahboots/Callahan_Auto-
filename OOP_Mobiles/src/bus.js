import Automobile from '.auto_mobile';

export default class Bus extends Automobile {

  constructor( model, color, doors, seating, transmission, gas ) {
    super( model, color, 'Large', 2, trunkSize, engineCyl, 30, sunRoof, 'Large', transmission, gas );
  }
}