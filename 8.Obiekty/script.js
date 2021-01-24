// Zadanie 1
const car = {
    name: 'Audi',
    horsePower: 534,
    age: 2
}
console.log(car);

// Zadanie 2
car.changeName = function (newName) {
    this.name = newName;
    console.log(newName);
}
car.changeName('Jeep');

// Zadanie 3
const obj = {

    sumNumbers: function (tab) {
        this.sum = tab.reduce((a, b) => a + b);
        console.log(this.sum);
    }
}
obj.sumNumbers([2, 5, 3]);

// Zadanie 4
const car = {
    name: 'BMW',
    age: 12,
    horsePower: 350
}

for (let key in car) {
    console.log(`${key}: ${car[key]}`);
}

// Zadanie 5 
const car = {
    name: 'Mercedes',
    age: 10,
    engine: {
        horsePower: 190,
        milage: 11400
    }
}

for (let property in car.engine) {
    console.log(`${property}: ${car.engine[property]}`)
}

// Zadanie 6
const car = {
    name: 'Mercedes',
    age: 10,
}

car.horsePower = 250;
car.sayHello = function () {
    console.log('Hello');
}

console.log(car);
car.sayHello();