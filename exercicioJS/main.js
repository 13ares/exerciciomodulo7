const form = document.getElementById('two-numbers');
const menor = document.getElementById('numero-menor');
const maior = document.getElementById('numero-maior');
const successMessage = document.querySelector('.success-message');
const errorMessage = document.querySelector('.error-message')

form.addEventListener('submit', function(event){
    event.preventDefault();

    const menorValue = parseFloat(menor.value);
    const maiorValue = parseFloat(maior.value);

    if (menorValue < maiorValue) {
        errorMessage.style.display = 'none';
        successMessage.style.display = 'block';
    } else {
        successMessage.style.display = 'none';
        errorMessage.style.display = 'block';
    }

});
