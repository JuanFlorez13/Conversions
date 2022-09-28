const numberPounds = document.getElementById('number-pounds');
const messagePounds = document.getElementById('message-pounds');
const btnPounds = document.getElementById('btn-pounds');

btnPounds.addEventListener('click', poundsToGrams);

function poundsToGrams() {
    const pounds = numberPounds.value;
    const grams = pounds * 453.592;
    messagePounds.textContent = `${pounds} Pounds Is Equal To ${grams} Grams`;
}