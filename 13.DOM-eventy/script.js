//Zadanie 1
function startEvents() {
  //1
  const testEventButton = document.getElementById("test-event");

  testEventButton.addEventListener("click", function (event) {
    console.log(event);
  });

  //2
  window.addEventListener("mousemove", function (event) {
    console.log(event);
  });

  //3
  testEventButton.addEventListener("mousemove", function (event) {
    console.log(event);
  });

  //4
  window.addEventListener("keydown", function (event) {
    console.log(event);
  });

  //5
  window.addEventListener("scroll", function (event) {
    console.log(event);
  });

  //6
  const input = document.getElementById("input-test");
  input.addEventListener("change", function (event) {
    console.log(event);
  });
}

//Zadanie 2
function onClickButtonEx2() {
  const button = document.getElementById("ex2");
  button.addEventListener("click", function (event) {
    const data = button.getAttribute("data-text");
    const span = document.getElementById("span-ex2");
    span.textContent = data;
  });
}

//Zadanie 3
function changeSquareBackgroundColor() {
  const square = document.getElementById("ex3");

  square.addEventListener("mouseover", function () {
    square.style.backgroundColor = "blue";
  });

  square.addEventListener("mouseout", function () {
    square.style.backgroundColor = "red";
  });
}
changeSquareBackgroundColor();

//Zadanie 4
function validateInput() {
  const regexp = /\d+/g;
  const input = document.getElementById("input-test");
  const span = document.getElementById("ex3-err");
  input.addEventListener("change", function (event) {
    if (regexp.test(input.value)) {
      span.textContent = "You can not input numbers!";
    } else {
      span.textContent = "";
    }
  });
}
validateInput();

// Zadanie 5
function countClicks() {
  let counter = 0;
  const span = document.getElementById("span-ex2");
  const button = document.getElementById("ex2");

  let handler = function () {
    counter++;
    span.textContent = counter;
    if (counter === 11) {
      span.textContent = "";
      this.removeEventListener("click", handler);
    }
  };
  button.addEventListener("click", handler);
}
countClicks();

// Zadanie 6
function controlScroll() {
  window.addEventListener("scroll", function () {
    let scrollValue = this.scrollY;
    if (scrollValue > 200) {
      window.document.getElementsByTagName("body")[0].style.backgroundColor =
        "white";
    } else {
      window.document.getElementsByTagName("body")[0].style.backgroundColor =
        "red";
    }
  });
}
controlScroll();

// Zadanie 7
const calcButtons = document.querySelectorAll("#calculator button");
const calcOutput = document.querySelector("#calculator input");
const numericButtons = [];
const funcButtons = [];
let currentCalc = [];
let calcFinish = false;

calcButtons.forEach((el) => {
  if (parseInt(el.innerText) || el.innerText === "0") {
    numericButtons.push(parseInt(el.innerText));
  } else {
    funcButtons.push(el.innerText);
  }

  el.addEventListener("click", () => {
    if (calcFinish) {
      calcOutput.value = "";
      calcFinish = false;
    }
    if (funcButtons.includes(el.innerText)) {
      currentCalc.push(calcOutput.value, el.innerText);
      console.log(currentCalc);
      calcOutput.value = calcOutput.value + el.innerText;

      return;
    }
    if (currentCalc.length > 1) {
      doCalc([...currentCalc, el.innerText]);
      return;
    }
    calcOutput.value = calcOutput.value + el.innerText;
  });
});

function doCalc(x) {
  currentCalc = [];
  calcFinish = true;
  let result;
  numbers = [Number(x[0]), Number(x[2])];
  switch (x[1]) {
    case "+":
      result = numbers[0] + numbers[1];
      break;
    case "-":
      result = numbers[0] - numbers[1];
      break;
    case "/":
      result = numbers[0] / numbers[1];
      break;
    case "*":
      result = numbers[0] * numbers[1];
      break;
  }
  calcOutput.value = result;
}
