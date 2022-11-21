function ElectricalEquipment(name, power) {
  this.name = name;
  this.power = power;
  this. isConnected = false;
}

//подключен
ElectricalEquipment.prototype.ConnectIn = function () {
  console.log(this.name + " подключен!");
  this.isConnected = true;
};

//не подключен
ElectricalEquipment.prototype.unConnect = function () {
  console.log(this.name + " не подключен!");
  this.isConnected = false;
};

// Прибор 1

function Lamp(name, brand, power) {
  this.name = name;
  this.brand = brand;
  this.power = power;
  this.isConnected = true;
}
Lamp.prototype = new ElectricalEquipment();

// Прибор 2

function Computer(name, brand, power) {
  this.name = name;
  this.brand = brand;
  this.power = power;
  this.isConnected = false;
}
Computer.prototype = new ElectricalEquipment();

const tableLamp = new Lamp("Table lamp", "Xiaomi", 2);
const homePC = new Computer("Table PC", "Intel", 50);

tableLamp.unConnect();
homePC.ConnectIn();

console.log(homePC)
console.log(tableLamp)
