import Automobile from './auto_mobile';

export default class Bus extends Automobile {

  constructor( model, color, engineCyl, fueltype ) {
    super( model, color, 2, engineCyl, 30, 'manual', fueltype );
  }
}