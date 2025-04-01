const text = document.getElementById("text");
const styleButton = document.getElementById("styleButton");

styleButton.addEventListener("click", () => {
    text.classList.toggle("modified");
});