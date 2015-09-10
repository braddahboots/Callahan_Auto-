export default class Automobile {

  constructor (model, color, doors, engineCyl, seating, transmission, fueltype) {
    this._model = model;
    this._color = color;
    this._doors = doors;
    this._engineCyl = engineCyl;
    this._seating = seating;
    this._brakes = true;
    this._transmission = transmission;
    this._fueltype = fueltype;
  }

  get model() {
    return this._model;
  }

  set model( m ) {
    this._model = m;
  }

  get color() {
    return this._color;
  }

  set color( m ) {
    this._color = m;
  }

  get doors() {
    return this._doors;
  }

  set doors( m ) {
    this._doors = m;
  }

  get engineCyl() {
    return this._engineCyl;
  }

  set engineCyl( m ) {
    this._engineCyl = m;
  }

  get seating() {
    return this._seating;
  }

  set seating( m ) {
    this._seating = m;
  }

  get brakes() {
    return this._brakes;
  }

  get transmission() {
    return this._transmission;
  }

  set transmission( m ) {
    this._transmission = m;
  }

  get fueltype() {
    return this._fueltype;
  }

  set fueltype( ft ) {
    this._fueltype = ft;
  }
}