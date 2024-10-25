 
 
 function openGift() {
    document.getElementById("gift-box").style.display = "none";//remove o gift

    const audio = document.getElementById("bg-music");//tocar musica
    audio.play();

    document.getElementById("slideshow").style.display = "block";
    startSlideshow();

    // Adicionar efeito de flores caindo
    startFallingFlowers();
}

// Função para alternar slides
let currentSlide = 0;
function startSlideshow() {
    const slides = document.querySelectorAll(".slide");
    setInterval(() => {
        slides[currentSlide].style.opacity = 0;
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].style.opacity = 1;
    }, 3000); // Troca de imagem a cada 3 segundos
}

// Função para adicionar flores caindo
function startFallingFlowers() {
    for (let i = 0; i < 30; i++) { // 30 flores
        const flower = document.createElement("div");
        flower.classList.add("flower");
        flower.style.left = `${Math.random() * 100}vw`;
        flower.style.animationDuration = `${3 + Math.random() * 5}s`;
        document.body.appendChild(flower);
    }
}