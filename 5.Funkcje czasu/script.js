// Zadanie 1
let i = 0;

const time = setInterval(() => {
    i++;
    console.log("Cześć po raz " + i);

    if (i >= 15) {
        clearInterval(time);
    }

}, 3000);

// Zadanie 2
const randomArr = ['q', 'w', 'e', 't', 'y'];

const setTime = setTimeout(() => {
    for (const item of randomArr) {
        console.log(item);
    }
}, 2000)

let j = 0;

const setTime2 = setInterval(() => {
    console.log(randomArr[j]);
    j++;

    if (j >= randomArr.length) {
        clearInterval(setTime2);
    }

}, 3000);