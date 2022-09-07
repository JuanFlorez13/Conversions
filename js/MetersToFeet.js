const numberFeetMeters = document.getElementById("number-feet-meters");
const messageFeetMeters = document.getElementById("message-feet-meters");
const btnFeetMeters = document.getElementById("btn-meters-feet");

btnFeetMeters.addEventListener("click", metersToFeet);

function metersToFeet() {
    let meters = numberFeetMeters.value;
    let feet = meters * 3.28084;
    messageFeetMeters.textContent = `${meters} Meters Is ${feet} Feet.`;
}