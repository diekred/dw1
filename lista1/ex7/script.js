document.getElementById("triangleForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const cateto1 = document.getElementById("cateto1");
    const cateto2 = document.getElementById("cateto2");
    const errorCateto1 = document.getElementById("errorCateto1");
    const errorCateto2 = document.getElementById("errorCateto2");
    const resultado = document.getElementById("resultado");

    let isValid = true;

    // Resetando os estilos e mensagens de erro
    cateto1.classList.remove("error");
    cateto2.classList.remove("error");
    errorCateto1.textContent = "";
    errorCateto2.textContent = "";
    resultado.textContent = "";

    const valor1 = parseFloat(cateto1.value);
    const valor2 = parseFloat(cateto2.value);

    // Validações
    if (isNaN(valor1) || valor1 <= 0) {
        errorCateto1.textContent = "Informe um número válido!";
        cateto1.classList.add("error");
        isValid = false;
    }

    if (isNaN(valor2) || valor2 <= 0) {
        errorCateto2.textContent = "Informe um número válido!";
        cateto2.classList.add("error");
        isValid = false;
    }

    // Se válido, calcular a hipotenusa
    if (isValid) {
        const hipotenusa = Math.sqrt(valor1 ** 2 + valor2 ** 2).toFixed(2);
        resultado.textContent = `A hipotenusa é: ${hipotenusa}`;
    }
});