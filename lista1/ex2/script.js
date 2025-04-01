let counter = 0;
const counterDisplay = document.getElementById("counter");
const resetButton = document.getElementById("reset");

document.body.addEventListener("click", () => {
    counter++;
    counterDisplay.textContent = counter;
});

resetButton.addEventListener("click", (event) => {
    counter = 0;
    counterDisplay.textContent = counter;
    event.stopPropagation(); // Evita que o clique no botão incremente o contador
});