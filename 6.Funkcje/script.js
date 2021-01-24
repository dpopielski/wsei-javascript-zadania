// Zadanie 1
let randomName = () => {
    console.log("Udało się!");
}
randomName();

// Zadanie 2
let random = (x) => {
    console.log(x);
}
random(2);

// Zadanie 3
let func1 = (arr) => {

    return arr;
}

console.log(func1([1, 2]));

// Zadanie 4
const func2 = (str) => {
    let c = 0;
    let time = setInterval(() => {
        console.log(str);
        if (++c >= 5) {
            clearInterval(time);
            console.log('Koniec');
        }
    }, 3000)
}

func2('string');