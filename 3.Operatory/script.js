// Zadanie 1
let x = true;
let y = false;

console.log(x == y); // false

// Zadanie 2
let num1 = 5;
let num2 = 3;
let moduloResult = 0;

moduloResult = num1 % num2;
console.log(moduloResult); // 2

// Zadanie 3
let str = "pies";
let str1 = "kot";
stringsResult = "";

stringsResult = str + str1;
console.log(stringsResult); // pieskot

// Zadanie 4
var someNumber = 425;
var someString = "425";

console.log(someNumber == someString); // true => operator "==" nie bierze pod uwage typu danych stad wynik true
console.log(someNumber === someString); // false => operator "===" bierze pod wage typ danych w tym wypadku 425 = integer, "425" = string stad wynik false

// Zadanie 5
let counter = 30;

console.log(counter); //30

counter++;
console.log(counter); // 31

counter--;
console.log(counter); // 30

// Zadanie 6
let number1 = 2;
let number2 = 6;
let result = null;

result = number1 > number2;
console.log(result); // false