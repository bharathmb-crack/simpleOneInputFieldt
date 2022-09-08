var firstChar = document.getElementById("first");
var secondChar = document.getElementById("second");
var thirdChar = document.getElementById("third");
var errorMessage = document.getElementById("error-msg");
let mainValue = 0;
let secondValue = 0;
let thirdValue = 0;

function onlyNumbers(evt) {
  var ASCIICode = evt.which ? evt.which : evt.keyCode;
  if (
    ASCIICode > 31 &&
    (ASCIICode < 44 || ASCIICode > 46) &&
    (ASCIICode < 48 || ASCIICode > 57)
  )
    return false;
  return true;
}

function showOtherNumbers() {
  var inputNumber = document.getElementById("ipt");
  if (inputNumber.length == 0) {
    firstChar.innerText = "";
    secondChar.innerText = "";
    thirdChar.innerText = "";
    errorMessage.innerText = "";
    return false;
  }
  if (inputNumber.length == "") {
    firstChar.innerText = "";
    secondChar.innerText = "";
    thirdChar.innerText = "";
    errorMessage.innerText = "";
    return false;
  }
  if (inputNumber.value < 0) {
    firstChar.innerText = "";
    secondChar.innerText = "";
    thirdChar.innerText = "";
    errorMessage.innerHTML = "Enter only postive Integer";
    return false;
  }
  if (inputNumber.length !== 0) {
    mainValue = Number(inputNumber.value) + 2;
    secondValue = mainValue + 2;
    thirdValue = secondValue + 2;
    firstChar.innerHTML = mainValue;
    secondChar.innerHTML = secondValue;
    thirdChar.innerHTML = thirdValue;
    errorMessage.innerText = "";
    return false;
  }
  secondChar.innerText = "";
  thirdChar.innerText = "";
  errorMessage.innerText = "";
  return true;
}
