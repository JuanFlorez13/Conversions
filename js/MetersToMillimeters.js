const millimeters = document.getElementById('number-meters');
const message = document.getElementById('message-millimeters');
const btnMillimeters = document.getElementById('btn-meters-millimeters');


btnMillimeters.addEventListener('click', metersToMillimeters);

function metersToMillimeters() {
  const meters = Number(millimeters.value);
  const result = meters * 1000;
  message.textContent = `${meters} Meters Is Equal To ${result} Millimeters.`;
}