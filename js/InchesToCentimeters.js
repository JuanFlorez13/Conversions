const numberInches = document.getElementById("number-inches");
const messageInches = document.getElementById("message-inches");
const bntInches = document.getElementById("btn-inches");


bntInches.addEventListener("click", CalculateInches);

function CalculateInches() {
    const inches = parseInt(numberInches.value);
    const centimeters = inches * 2.54;
    messageInches.textContent = `${inches} Inches Is ${centimeters} Centimeters`;
}