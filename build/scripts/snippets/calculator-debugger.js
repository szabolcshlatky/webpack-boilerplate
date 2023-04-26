debugger;

function add(num1, num2) {
  return num1 + num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function substract(num1, num2) {
  return num1 - num2;
}

function calculator(num1, num2, operator) {
  return operator(num1, num2);
}

calculator(4,5,add);
calculator(3,4,multiply);
calculator(10,5,divide);
calculator(6,3,substract);