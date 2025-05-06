const resultInput = document.querySelector("result");
const calcInput = document.querySelector(".calculation");
const removeBtn = document.querySelector(".backcolor_remove");
const display = document.getElementById("display");
const result = document.getElementById("result");
// operators
const clearBtn = document.querySelector(".clear_btn");
const percentBtn = document.querySelector(".percent_btn");
const dividBtn = document.querySelector(".divid_btn");
const multipleBtn = document.querySelector(".multiple_btn");
const plusBtn = document.querySelector(".plus_btn");
const minusBtn = document.querySelector(".minus_btn");
const equalBtn = document.querySelector(".equal_btn");

function appendToDisplay(value) {
  display.value += value;
}

clearBtn.addEventListener("click", function () {
  calcInput.value = "";
});

percentBtn.addEventListener("click", function () {
  calcInput.value += "%";
});

dividBtn.addEventListener("click", function () {
  calcInput.value += "÷";
});

multipleBtn.addEventListener("click", function () {
  calcInput.value += "×";
});

plusBtn.addEventListener("click", function () {
  calcInput.value += "+";
});

minusBtn.addEventListener("click", function () {
  calcInput.value += "-";
});
// Calculation values
equalBtn.addEventListener("click", function () {
  if (calcInput.append("%")) {
    calcInput %= calcInput;
  }
  console.log(calcInput.value);
});
