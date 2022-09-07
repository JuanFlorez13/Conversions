const number = document.getElementById('number-one');
const message = document.getElementById('message');
const btnCalculate = document.getElementById('btn-calculate');

btnCalculate.addEventListener('click', Calculate);
function Calculate() {
  const centimeters = number.value * 100;
  message.textContent = `${number.value} Meter Is ${centimeters} Centimeters`;
}