const numberInches = document.getElementById("number-feet-inches");
const messageInches = document.getElementById("message-feet-inches");
const btnInches = document.getElementById("btn-feet-inches");

btnInches.addEventListener("click", feetToInches);

function feetToInches() {
    const feet = numberInches.value;
    const inches = feet * 12;
    messageInches.textContent = `${feet} Feet Is ${inches} Inches.`;
}