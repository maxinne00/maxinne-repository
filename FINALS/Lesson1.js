function submitForm() {
    var firstNumber = document.getElementById("firstNumber").value;
    var secondNumber = document.getElementById("secondNumber").value;

        document.getElementById("calculation").innerHTML = "<b>" + "result: " + (parseFloat(firstNumber) + parseFloat(secondNumber)) + "</b>";
    console.log(firstNumber, secondNumber);
}