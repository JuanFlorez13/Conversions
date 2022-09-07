const numberFeet = document.getElementById("number-feet");
const message = document.getElementById("message-feet");
const btnFeet = document.getElementById("btn-calculate-feet");

btnFeet.addEventListener("click", feetToCentimeters);

function feetToCentimeters() {
  const feet = Number(numberFeet.value);
  const result = feet * 30.48;
  message.textContent = `${feet} Feet Is Equal To ${result} Centimeters.`;
}