const numberCentimeters = document.getElementById("centimeters-number");
const messageCentimeters = document.getElementById("message-centimeters");
const btnCentimeters = document.getElementById("btn-centimeters");

btnCentimeters.addEventListener("click", centimetersToMillimeters);

function centimetersToMillimeters() {
    const centimeters = Number(numberCentimeters.value);
    const millimeters = centimeters * 10;
    messageCentimeters.textContent = `${centimeters} Centimeters = ${millimeters} Millimeters`;
}