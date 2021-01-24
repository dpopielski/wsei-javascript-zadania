// Zadanie 1
let n1 = 15,
    n2 = 6;

if (n1 > n2) {
    console.log(n1);
} else {
    console.log(n2);
}

// Zadanie 2
let x = 1;
let x2 = 2;
let x3 = 3;

if (x > x2 || x > x3) {
    console.log(x);
} else if (x2 > x || x3) {
    console.log(x3);
} else {
    console.log(x3)
}

// Zadanie 3 
for (let i = 0; i < 10; i++) {
    console.log("Lubię JavaScript");
}

// Zadanie 4
let result = 0;
for (let i = 1; i <= 10; i++) {
    result += i;
}
console.log(result);

// Zadanie 5
var n = 5;
for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
        console.log(i + " parzysta");
    } else {
        console.log(i + " nieparzysta");
    }
}

// Zadanie 6
for (let i = 0; i < 5; i++) {

    for (let j = 0; j < 5; j++) {
        console.log("i= " + i + ", j= " + j);
    }
}

// Zadanie 7
for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} FizzBuzz`);
    } else if (i % 3 === 0) {
        console.log(`${i} Fizz`);
    } else if (i % 5 === 0) {
        console.log(`${i} Buzz`);
    } else {
        console.log(`${i}`);
    }
}

// Zadanie 8
// a)
let star = "*";
let result = '';

for (let i = 1; i <= 5; i++) {
    for (let j = 0; j < i; j++) {
        result += star;
    }
    console.log(result);
    result = "";
}

// b)
let star = "*";

for (let i = 0; i < 5; i++) {
    console.log(' '.repeat(4 - i) + (star + ' ').repeat(i) + star);
}

// c) 
let star = "*";

for (let i = 0; i < 5; i++) {
    console.log(' '.repeat(4 - i) + star.repeat(i * 2) + star);
}

// d)
let str = "*1234";
for (j = 0; j <= 11; j++) {
    if (j === 6) {
        console.log('------');
    } else if (j < 6) {
        console.log('*'.repeat(j) + str.slice(j));

    } else {
        console.log('*'.repeat(12 - j) + str.slice(12 - j));
    }
}

// e)
let count2 = 4;
for (let i = 1; i <= 6; i++) {
    if (i <= 5) {
        console.log(' '.repeat(count2) + '* '.repeat(i));
        count2--;
    } else {
        console.log('    *');
        console.log('    *');
        console.log('    *');
    }
}