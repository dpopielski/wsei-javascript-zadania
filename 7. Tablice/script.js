// Zadanie 1
let myArr = ['Pies', 'Kot', 'Ptak', 'Pingwin'];

for (let item of myArr) {
    console.log(item);
}

// Zadanie 2
let myArr2 = ['Bartek', 'Ania', 1, 2, 'Stefan', 'Hubert'];

// 1.
console.log(myArr2[0]); // Bartek 
console.log(myArr2[1]); // Ania

// 2.
console.log(myArr2[myArr2.length - 1]); // Hubert

// 3.
for (let item of myArr2) {
    console.log(item);
}

// 4.
for (let i = 0; i < myArr2.length; i += 2) {
    console.log(myArr2[i]);
}

// 5.
const arrStrings = myArr2.filter(e => typeof e == 'string');

console.log(arrStrings);

// 6.
const arrNumbers = myArr2.filer(e => typeof e == 'number');

console.log(arrNumbers);

// Zadanie 3 
let myArray = [1, 2, 3, 4, 5];

// 1.
let sum = myArray.reduce((a, b) => a + b);
console.log(sum);

// 2.
let diff = myArray.reduce((a, b) => a - b);
console.log(diff);

// 3. 
let average = sum / myArray.length;
console.log(average);

// 4.
let evenNumbers = myArray.filter(number => number % 2 == 0);
console.log(evenNumbers);

// 5.
let unEvenNumbers = myArray.filter(number => number % 2 !== 0);
console.log(unEvenNumbers);

// 6.
myArray.sort((a, b) => a - b);
const max = myArray[myArray.length - 1];
console.log(max);

// 7.
const min = myArray[0];
console.log(min);

// 8.
console.log(myArray.reverse());

// Zadanie 4
const sumFunc = (tab) => {
    let result = tab.reduce((a, b) => a + b);
    console.log(result);
}
sumFunc([2, 5, 3, 1]);

// Zadanie 5
const func2 = (tab) => {
    let sum = tab.reduce((a, b) => a + b);
    let average = sum / tab.length;

    for (e of tab) {
        console.log(e * average);
    }
}

func2([2, 5, 3, 6]);

// Zadanie 6
let randomTab = [5, 2, 3, 1, 4, 6];
const func3 = (params) => {
    let evenNumbers = params.filter(number => number % 2 == 0);
    let sumEvenNumbers = evenNumbers.reduce((a, b) => a + b);
    let averageEvenNumbers = sumEvenNumbers / evenNumbers.length;

    console.log(averageEvenNumbers);
}

func3(randomTab);

// Zadanie 7
const sortTab = randomTab.sort((a, b) => a - b);
console.log(sortTab);

// Zadanie 8
const func4 = (tab1, tab2) => {
    
    return tab1.concat(tab2);
}
console.log(func4([1, 2, 3], [4, 5, 6]));

const toSumArrayA = [2, 3, 2]
const toSumArrayB = [1, 4, 3]

function sumArraysValue(arrayA, arrayB) {
    let newArray = [];

    arrayA.forEach((num1, i) => {
        newArray.push(num1 + arrayB[i]);
    });

    return newArray;
}

console.log(sumArraysValue(toSumArrayA, toSumArrayB));

// Zadanie 9
const func5 = (tab, tabElem) => {

    let newTab = tab.filter(e => e !== tabElem);
    console.log(newTab);
}

func5([5, 4, 1, 9, 8], 5);

// Zadanie 10
const func6 = (tab) => {
    let newTab = tab.map(e => e * -1);
    console.log(newTab);
}

func6([5, -4, 1, 9, -8]);