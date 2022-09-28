const numberLiter = document.getElementById("number-liter");
const messageLiter = document.getElementById("message-liter");
const btnLiter = document.getElementById("btn-liter");

btnLiter.addEventListener("click", literToCubicCentimeter);

function literToCubicCentimeter() {
    let liter = numberLiter.value;
    let cubicCentimeter = liter * 1000;
    messageLiter.textContent = `${liter} Liter Is ${cubicCentimeter} Cubic Centimeter.`;
}