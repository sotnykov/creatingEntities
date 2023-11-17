class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  showInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

class Car {
  constructor(brand, model, year, plateNumber, owner) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.plateNumber = plateNumber;
    this.owner = this.checkOwner(owner);
  }

  checkOwner(owner) {
    if (owner.age >= 18) {
      return owner;
    } else {
      console.log('The owner of the car cannot be a minor.');
      return null;
    }
  }

  showCarInfo() {
    console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Number: ${this.plateNumber}`);
    if (this.owner !== null) {
      console.log('Information about the owner:');
      this.owner.showInfo();
    }
  }
}

const person1 = new Person('Alex', 25);
const person2 = new Person('Mark', 17);
const person3 = new Person('Niki', 30);

const car1 = new Car('BMW', 'X5', 2018, 'AB1234BC', person1);
const car2 = new Car('Toyota', 'Corolla', 2015, 'BC5678AB', person2);
const car3 = new Car('Audi', 'A4', 2019, 'CD9876EF', person3);

car1.showCarInfo();
car2.showCarInfo();
car3.showCarInfo();
