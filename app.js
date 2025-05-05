const resultInput = document.querySelector("result");
const calcInput = document.querySelector(".calculation");
const removeBtn = document.querySelector(".backcolor_remove");
const operatorBtn = document.querySelectorAll(".backcolor_operator");
const numberBtn = document.querySelectorAll(".num_btn");
const equalBtn = document.querySelector(".equal_btn");
const display = document.getElementById("display");
const result = document.getElementById("result");

function appendToDisplay(value) {
  display.value += value;
}
operatorBtn.forEach((e) => {
  e.addEventListener("click", function () {
    calcInput.value = e;
  });
});
