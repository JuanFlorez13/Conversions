const numberGallons = document.getElementById("number-gallons");
const messageGallons = document.getElementById("message-gallons");
const btnGallons = document.getElementById("btn-gallons");

btnGallons.addEventListener("click", gallonsToLiters);

function gallonsToLiters() {
    let gallons = numberGallons.value;
    let liters = gallons * 3.78541;
    messageGallons.textContent = `${gallons} Gallons Is ${liters} Liters.`;
}