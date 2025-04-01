const toggleButton = document.getElementById("toggleButton");

let toggleState = true;

toggleButton.addEventListener("click", () => {
    if (toggleState) {
        toggleButton.textContent = "Clique de novo!";
    } else {
        toggleButton.textContent = "Clique aqui";
    }
    toggleState = !toggleState;
});