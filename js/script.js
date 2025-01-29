let result = document.querySelector(".result");
let resultbutton = document.querySelector(".resultbtn");
let clearbutton = document.querySelector(".clear");
let backspacebutton = document.querySelector(".backspace");
let percentagebutton = document.querySelector(".percentage");
let buttons = document.querySelectorAll(".app-keypad button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (button.classList.contains("clear")) {
      result.value = "";
      canEnter = false;
    } else if (button.classList.contains("backspace")) {
      result.value = result.value.substring(0, result.value.length - 1);
    } else if (button.classList.contains("zero")) {
      result.value += "0";
      canEnter = true;
    } else if (button.classList.contains("one")) {
      result.value += "1";
      canEnter = true;
    } else if (button.classList.contains("two")) {
      result.value += "2";
      canEnter = true;
    } else if (button.classList.contains("three")) {
      result.value += "3";
      canEnter = true;
    } else if (button.classList.contains("four")) {
      result.value += "4";
      canEnter = true;
    } else if (button.classList.contains("five")) {
      result.value += "5";
      canEnter = true;
    } else if (button.classList.contains("six")) {
      result.value += "6";
      canEnter = true;
    } else if (button.classList.contains("seven")) {
      result.value += "7";
      canEnter = true;
    } else if (button.classList.contains("eight")) {
      result.value += "8";
      canEnter = true;
    } else if (button.classList.contains("nine")) {
      result.value += "9";
      canEnter = true;
    } else if (button.classList.contains("plus") && canEnter) {
      result.value += "+";
      canEnter = false;
    } else if (button.classList.contains("minus") && canEnter) {
      result.value += "-";
      canEnter = false;
    } else if (button.classList.contains("multipication") && canEnter) {
      result.value += "*";
      canEnter = false;
    } else if (button.classList.contains("divide") && canEnter) {
      result.value += "/";
      canEnter = false;
    } else if (button.classList.contains("percentage") && canEnter) {
      result.value = result.value / 100;
      canEnter = true;
    } else if (button.classList.contains("resultbtn")) {
      result.value = eval(String(result.value));
    } else if (button.classList.contains("dot") && canEnter) {
      result.value += ".";
    }
  });
});
