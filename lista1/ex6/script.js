const image = document.getElementById("image");
const changeButton = document.getElementById("changeButton");

const images = ["imagens/download.jpeg", "imagens/download (1).jpeg", 'imagens/the.jpg', "imagens/unknown.png"]; // Substitua pelos nomes das suas imagens
let currentIndex = 0;

changeButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length; // Alterna entre 0 e 1
    image.src = images[currentIndex];
});