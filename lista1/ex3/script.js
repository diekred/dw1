const toggleButton = document.getElementById("toggleButton");
const text = document.getElementById("text");

toggleButton.addEventListener("click", () => {
    if (text.classList.contains("hidden")) {
        text.classList.remove("hidden");
        toggleButton.textContent = "Esconder Parágrafo";
    } else {
        text.classList.add("hidden");
        toggleButton.textContent = "Mostrar Parágrafo";
    }
});