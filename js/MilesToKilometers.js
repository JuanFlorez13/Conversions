const numberMiles = document.getElementById("number-miles");
const messageMiles = document.getElementById("message-miles");
const btnMiles = document.getElementById("bnt-miles");

btnMiles.addEventListener("click", milesToKilometers);

function milesToKilometers() {
    let miles = Number(numberMiles.value);
    let kilometers = miles * 1.60934;
    messageMiles.textContent = `${miles} Miles is ${kilometers} Kilometers.`;
}

