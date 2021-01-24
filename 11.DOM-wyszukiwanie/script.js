// Zadanie 1
const listElements = document.querySelectorAll(".list");
console.log(elements);

// Zadanie 2
function getElementsByTag(tag) {
    return document.querySelectorAll(tag);
}

const elements = getElementsByTag("li");
console.log(elements);

// Zadanie 3
const list = document.getElementById("list");
console.log(list);

// Zadanie 4
const showElements = (className, idName) => {
    const liElements = document.getElementsByTagName('li');
    const ulElements = document.getElementsByTagName('ul');
    const spanElements = document.getElementsByTagName('span');

    const spanInClass = document.querySelectorAll(`.${className} span`)
    const spanInId = document.querySelectorAll(`#${idName} span`)

    console.log(liElements)
    console.log(ulElements)
    console.log(spanElements)
    console.log(spanInClass)
    console.log(spanInId)
}

showElements("list", "spans")