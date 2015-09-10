import Truck from './truck';

export default class SUV extends Truck {

  constructor( model, color, engineCyl, transmission, fueltype ) {
    super( model, color, engineCyl, transmission, fueltype );
  }
}