// Zadanie 1
const listFunc = (elements) => [...elements].map((e) => e.tagName);
listFunc(document.querySelectorAll(".more-divs"));

// Zadanie 2
const showInConsole = (elements) => {
  console.log(elements.innerHTML);
  console.log(elements.outerHTML);
  console.log(String(elements.classList));
  console.log([...elements.classList]);
  console.log(elements.dataset);
};
showInConsole(document.querySelector(".short-list"));

// Zadanie 3
const resultFunc = (element) => {
  const nums = Object.values(element.dataset).filter((e) => Number(e));

  let sum1 = nums.reduce((a, b) => a + b);
  let sum2 = nums.reduce((a, b) => a - b);

  console.log(`add: ${sum1}\nsubstract: ${sum2}`);
};

resultFunc(document.getElementById("datasetCheck"));

// Zadanie 4
const spanText = document.querySelector("#spanText");

console.log((spanText.innerText = "tekst"));

// Zadanie 5
console.log((spanText.className = "klasa"));

// Zadanie 6
const funcClasses = (elements) => {
  elements.forEach((e) => console.log(e));
  const x = [...elements].join("+");
  console.log(x);
  document.getElementsByClassName(elements.value)[0].classList = [];
  console.log("Usunięto wszystkie klasy");
};
funcClasses(document.getElementById("classes").classList);

// Zadanie 7
const funcAttributes = (elements) => {
  const filtered = [...elements].filter((e) => !el.getAttribute("data-text"));
  filtered.forEach((e) => {
    el.setAttribute("data-text", "text");
  });
};
funcAttributes(document.getElementById("longList").getElementsByTagName("li"));

// Zadanie 8
function strToObj(str) {
  const obj = {
    newClass: str,
  };

  return obj;
}

const addNewClass = (obj) => {
  const newClass = obj.newClass;
  document.getElementById("myDiv").classList.add(newClass);
};
addNewClass(strToObj("string_z_parametru"));

// Zadanie 9
const addFunc = (num) => {
  const newClass = num % 2 === 0 ? "even" : "odd";
  console.log(num, newClass);
  document.getElementById("numbers").classList.add(newClass);
};
addFunc(Math.floor(Math.random() * 11));

// Zadanie 10
const getValues = (elem) => [...elem.children].map((e) => e.innerText);
console.log(getValues(document.getElementById("longList")));

// Zadanie 11
const changeValues = (elem) => {
  [...elem.children].forEach((e) => {
    e.setAttribute("old-value", e.innerText);
    e.innerText = Math.floor(Math.random() * 11);
  });
};
changeValues(document.getElementById("longList"));
