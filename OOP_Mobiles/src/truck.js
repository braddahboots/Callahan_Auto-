import Automobile from './auto_mobile';

export default class Truck extends Automobile {

  constructor (model, color, engineCyl, transmission, fueltype) {
    super( model, color, 2, engineCyl, 2, transmission, fueltype); {

    }
  }
}