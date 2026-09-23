let num1 = 20
let num2 = 5

function add(x,y) {
    return x + y;
}
document.getElementById("add").innerHTML = "addition: " + add(num1,num2);

function add(x,y) {
    return x + y;
}
document.getElementById("add").innerHTML = "addition: " + add(num1,num2);

function sub(x,y) {
    return x - y;
}
document.getElementById("subtract").innerHTML = "subtraction: " + sub(num1,num2);

function multiply (x,y) {
    return x*y;
}
document.getElementById("multiply").innerHTML = "multiplication: " + multiply(num1,num2);

function divide (x,y) {
    return x/y;
}
document.getElementById("divide").innerHTML = "division: " + divide(num1,num2);

function remainder (x,y) {
    return x%y;
}   
document.getElementById("remainder").innerHTML = "remainder: " + remainder(num1,num2);