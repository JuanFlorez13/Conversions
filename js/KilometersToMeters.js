const numberKilometers = document.getElementById("kilometers-number");
const messageKilometers = document.getElementById("message-kilometers");
const btnKilometers = document.getElementById("btn-kilometers");

btnKilometers.addEventListener("click", kilometersToMeters)

function kilometersToMeters() {
  const kilometers = numberKilometers.value;
  const meters = kilometers * 1000;
  messageKilometers.textContent = `${kilometers} Kilometers = ${meters} Meters`;
}