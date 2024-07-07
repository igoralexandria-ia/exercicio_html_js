const form = document.getElementById('form-validation');
const firstNumber = document.getElementById('numberA');
const secondNumber = document.getElementById('numberB');
const messageSuccess = document.querySelector('.success-message');
const messageError = document.querySelector('.error-message');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const valueNumberA = Number(firstNumber.value);
    const valueNumberB = Number(secondNumber.value);

    const msgSuccess = `<b>Formulário Validado com sucesso</b>, o número B = ${valueNumberB} é maior que o número A = ${valueNumberA}. Excelente!`;
    const msgError = `<b>Formulário Inválido</b>, pois o número A = ${valueNumberA} é maior ou igual que o número B = ${valueNumberB}, por favor, repita a validação`;

    if (valueNumberA >= valueNumberB) {
        messageError.innerHTML = msgError;
        messageError.style.display = 'block';
        messageSuccess.style.display = 'none';
    } else {
        messageSuccess.innerHTML = msgSuccess;
        messageSuccess.style.display = 'block';
        messageError.style.display = 'none';
    }
})
