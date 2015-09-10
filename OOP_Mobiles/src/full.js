import Automobile from './auto_mobile';

export default class Full extends Automobile {

  constructor( model, color, transmission, fueltype ) {
    super( model, color, 4, 6, 5, transmission, fueltype );
  }
}