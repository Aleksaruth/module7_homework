
class ElectricalEquipment{
	constructor(name, power) {
	this.name = name;
	this.power = power;
	}
}

// Прибор 1

class Lamp extends ElectricalEquipment {
	constructor(name, brand, power){
	super(name, power);
	this.name = name;
	this.brand = brand;
	this.power = power;
	}

	getTurn = function (on_off) {
        return `The ${this.name} is switched ${on_off}.`
    }
	
}

// Прибор 2

class Computer extends ElectricalEquipment  {
	constructor (name, brand, power){
	super(name, power);
	this.name = name;
	this.brand = brand;
	this.power = power;
	}

	getTurn = function (on_off) {
        return `The ${this.name} is switched ${on_off}.`
    }
	
}

const tableLamp = new Lamp("Table lamp", "Xiaomi", 2);
const homePC = new Computer("Table PC", "Intel", 50);

console.log(homePC)
console.log(tableLamp)
console.log(tableLamp.getTurn("on"));
console.log(homePC.getTurn("off"));
