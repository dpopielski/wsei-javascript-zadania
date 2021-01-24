// Zadanie 1
function Person(name, lastName, age, country, city) {
  this.name = name;
  this.lastName = lastName;
  this.age = age;
  this.country = country;
  this.city = city;

  this.showDetails = function () {
    console.log(
      "Person: " +
        this.name +
        this.lastName +
        " " +
        "age: " +
        this.age +
        " " +
        "country: " +
        this.country +
        " " +
        "city: " +
        this.city
    );
  };

  this.addYear = function () {
    ++this.age;
  };

  const person = new Person("Leon", "Nowak", 19, "Poland", "Katowice");
  const person2 = new Person("Kamil", "Kowal", 29, "Poland", "Krakow");
}

person.showDetails();
person.addYear();
person.addYear();
person.addYear();

person.showDetails();

person2.showDetails();
person2.addYear();

person2.showDetails();

// Zadanie 2
const person = {
  name: "Michał",
  surname: "Seweryn",
  age: 1,
  country: "Poland",
  city: "Kraków",
};

const secondPerson = {
  name: "Seweyn",
  surname: "Michal",
  age: 12,
  country: "Poland",
  city: "Kraków",
};

function showInfo() {
  console.log(
    `Personal info: ${this.name} ${this.surname} ${this.age} ${this.country} ${this.city}`
  );
}

function changeAge() {
  this.age++;
}

person.showInfo = showInfo;
secondPerson.showInfo = showInfo;
person.changeAge = changeAge;
secondPerson.changeAge = changeAge;

person.showInfo();
secondPerson.showInfo();

person.changeAge();
person.changeAge();
console.log("person.age: ", person.age);

secondPerson.changeAge();
secondPerson.changeAge();

console.log("person.age: ", secondPerson.age);

// Zadanie 2
console.log("\nZadanie 2:");

person.favouriteMeal = [];
secondPerson.favouriteMeal = [];

function showMeal() {
  console.log("Ulubione posiłki: ", this.favouriteMeal.join(", "));
}

function addMeal(meal) {
  this.favouriteMeal.push(meal);
}

person.showMeal = showMeal;
person.addMeal = addMeal;
secondPerson.showMeal = showMeal;
secondPerson.addMeal = addMeal;

person.addMeal("schabowy");
person.addMeal("placek");
person.addMeal("pierogi");
person.showMeal();

secondPerson.addMeal("schabowy 2");
secondPerson.addMeal("placek 2");
secondPerson.addMeal("pierogi 2");
secondPerson.showMeal();

//Zadanie 3
//1)

function Calculatro(a, b) {
  this.a = a;
  this.b = b;

  this.sum = function () {
    let sum = this.a + this.b;
    console.log(sum);
  };

  this.sub = function () {
    let sub = this.a - this.b;
    console.log(sub);
  };

  this.multi = function () {
    let multi = this.a * this.b;
    console.log(multi);
  };
}

// Zadanie 4
function Ladder() {
  this.steps = 0;

  this.up = function () {
    this.steps++;
  };

  this.down = function () {
    if (this.steps > 0) {
      this.steps--;
    } else {
      console.log("Jesteś na ziemi");
    }
  };

  this.showLevel = function () {
    console.log(this.steps);
  };
}

const ladder = new Ladder();
ladder.up();
ladder.up();
ladder.up();
ladder.up();
ladder.up();
ladder.down();
ladder.showLevel();
