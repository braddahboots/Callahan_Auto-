import Automobile from './auto_mobile';

export default class Full extends Automobile {

  constructor( model, color, doors, seating, sunRoof, transmission, gas ) {
    super( model, color, 'standard', 4, 'average', 6, 5, sunRoof, 'average', transmission, gas );
  }
}