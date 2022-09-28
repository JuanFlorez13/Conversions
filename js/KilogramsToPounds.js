const numberKilograms = document.getElementById('number-kilograms');
const messageKilograms = document.getElementById('message-kilograms');
const btnKilograms = document.getElementById('btn-kilograms');

btnKilograms.addEventListener('click', kilogramsToPounds);

function kilogramsToPounds() {
    const kilograms = numberKilograms.value;
    const pounds = kilograms * 2.20462;
    messageKilograms.textContent = `${kilograms} Kilograms Is Equal To ${pounds} Pounds`;
}