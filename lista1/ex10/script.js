document.getElementById("bhaskaraForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const a = document.getElementById("a");
    const b = document.getElementById("b");
    const c = document.getElementById("c");
    const errorA = document.getElementById("errorA");
    const errorB = document.getElementById("errorB");
    const errorC = document.getElementById("errorC");
    const resultado = document.getElementById("resultado");

    let isValid = true;

    // Resetando os estilos e mensagens de erro
    a.classList.remove("error");
    b.classList.remove("error");
    c.classList.remove("error");
    errorA.textContent = "";
    errorB.textContent = "";
    errorC.textContent = "";
    resultado.textContent = "";

    const coefA = parseFloat(a.value);
    const coefB = parseFloat(b.value);
    const coefC = parseFloat(c.value);

    // Validações
    if (isNaN(coefA) || coefA === 0) {
        errorA.textContent = "O valor de 'a' deve ser diferente de 0!";
        a.classList.add("error");
        isValid = false;
    }

    if (isNaN(coefB)) {
        errorB.textContent = "Digite um número válido!";
        b.classList.add("error");
        isValid = false;
    }

    if (isNaN(coefC)) {
        errorC.textContent = "Digite um número válido!";
        c.classList.add("error");
        isValid = false;
    }

    // Se válido, calcular Bhaskara
    if (isValid) {
        const delta = coefB ** 2 - 4 * coefA * coefC;

        if (delta < 0) {
            resultado.textContent = "Não existem raízes reais!";
        } else if (delta === 0) {
            const x = (-coefB / (2 * coefA)).toFixed(2);
            resultado.textContent = `Existe apenas uma raiz real: x = ${x}`;
        } else {
            const x1 = ((-coefB + Math.sqrt(delta)) / (2 * coefA)).toFixed(2);
            const x2 = ((-coefB - Math.sqrt(delta)) / (2 * coefA)).toFixed(2);
            resultado.textContent = `As raízes são: x1 = ${x1}, x2 = ${x2}`;
        }
    }
});