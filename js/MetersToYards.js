const numberYards = document.getElementById("number-yards");
const messageYards = document.getElementById("message-yards");
const btnYards = document.getElementById("btn-yards");

btnYards.addEventListener("click", metersToYards);

function metersToYards() {
    const meters = numberYards.value;
    const yards = meters * 1.09361;
    messageYards.textContent = `${meters} Meters Is Equal To ${yards} Yards.`;
}