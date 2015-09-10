import Automobile from './auto_mobile';
import Compact from './compact';
import Bus from './bus';
import Full from './full';
import Semi from './semi';
import SUV from './suv';
import Truck from './truck';
import {FuelType} from './fueltype';

var myAuto = new Automobile( 'Mazda2', 'black', 4, 6, 5, 'manual', FuelType.gas.key );
console.log(myAuto);

var partyBus = new Bus( 'DevLeague Pimp Ride', 'Blood of our Enemys', 16, FuelType.diesel.key );
console.log(partyBus);

var batMobile = new Full( 'BatMobile', 'Black', 'Manual', FuelType.hybrid.key );
console.log(batMobile);

var autoBot = new Semi( 'Optimus Prime', 'Hotrod Red', 9000, 2, ' Kick-ass ', FuelType.energon.key );
console.log(autoBot);

var athleteClass = new SUV( ' Escalade ', ' Black ', 8, 'automatic', FuelType.gas.key );
console.log(athleteClass);

var monsterTruck = new Truck( 'Monsta Truck', ' Army Green ', 16, ' manual ', FuelType.gas.key );
console.log(monsterTruck);

var cheapCategory = new Compact( 'Ford Fiesta', 'pink', 2, 4, 'automatic', FuelType.electric.key );
console.log(cheapCategory);
