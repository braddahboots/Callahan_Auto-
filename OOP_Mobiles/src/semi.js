import Automobile from '.auto_mobile';

export default class Semi extends Automobile {

  constructor( model, color, engineCyl, seating, gasTankSize, transmission, gas ) {
    super( model, color, 'Large', 2, trunkSize, 8, 2, sunRoof, 'Large', 'manual', gas );
  }
}