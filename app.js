const resultInput = document.querySelector(".result");
const calcInput = document.querySelector(".calculation");
const removeBtn = document.getElementById("remove");
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
  resultInput.value = "";
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
  try {
    let expression = calcInput.value
      .replace(/×/g, "*")
      .replace(/÷/g, "/")
      .replace(/%/g, "*0.01");

    const result = eval(expression);

    resultInput.value = result;

    calcInput.value = "";
  } catch (err) {
    resultInput.value = "Error";
  }
});
removeBtn.addEventListener("click", function () {
  calcInput.value = calcInput.value.slice(0, -1);
});
