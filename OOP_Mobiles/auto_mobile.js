export default class Automobile {

  constructor (model, color, wheelSize, doors, trunkSize, engineCyl, seating, sunRoof, gasTankSize, transmission, gas) {
    this._model = model;
    this._color = color;
    this._wheelSize = wheelSize;
    this._doors = doors;
    this._trunkSize = trunkSize;
    this._engineCyl = engineCyl;
    this._seating = seating;
    this._sunRoof = sunRoof;
    this._brakes = true;
    this._gasTankSize = gasTankSize;
    this._transmission = transmission;
    this._gas = gas;
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

  get wheelSize() {
    return this._wheelSize;
  }

  set wheelSize( m ) {
    this._wheelSize = m;
  }

  get doors() {
    return this._doors;
  }

  set doors( m ) {
    this._doors = m;
  }

  get trunkSize() {
    return this._trunkSize;
  }

  set trunkSize( m ) {
    this._trunkSize = m;
  }

  get engineCyl() {
    return this. engineCyl;
  }

  set engineCyl( m ) {
    this. engineCyl = m;
  }

  get seating() {
    return this._seating;
  }

  set seating( m ) {
    this._seating = m;
  }

  get sunRoof() {
    return this._sunRoof;
  }

  set sunRoof( m ) {
    this._sunRoof = m;
  }

  get brakes() {
    return this._brakes;
  }

  get gasTankSize() {
    return this._gasTankSize;
  }

  set gasTankSize( m ) {
    this._gasTankSize = m;
  }

  get transmission() {
    return this._transmission;
  }

  set transmission( m ) {
    this._transmission = m;
  }

  get gas() {
    return this._gas;
  }

  set gas( m ) {
    this._gas = m;
  }
}