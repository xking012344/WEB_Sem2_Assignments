let number1 = prompt("Enter a number: ");
let number2 = prompt("Enter another number: ");
number1 = +number1;
number2 = +number2
let sum = number1 + number2;
document.getElementById("sum").innerHTML = sum;
let dif = number1 - number2;
document.getElementById("dif").innerHTML = dif;
let prod = number1 * number2;
document.getElementById("prod").innerHTML = prod;
let quo = number1 / number2;
document.getElementById("quo").innerHTML = quo;
let mod = number1 % number2;
document.getElementById("mod").innerHTML = mod;