import Automobile from '.auto_mobile';

export default class Compact extends Automobile {

  constructor( model, color, doors, seating, sunRoof, transmission, gas ) {
    super( model, color, 'standard', doors, 'small', 4, seating, sunRoof, 'small', transmission, gas );
  }
}