
function createFlower() {
    const flower = document.createElement('img');
    flower.src = 'flor.webp';
    flower.className = 'flower';
    flower.style.left = Math.random() * 100 + 'vw';
    flower.style.animationDuration = Math.random() * 3 + 2 + 's';
    flower.style.animationDelay = Math.random() * 3 + 's'; // Atraso aleatório
    document.querySelector('.falling-flowers').appendChild(flower);
    
    flower.addEventListener('animationend', () => {
        flower.remove();
    });
}
setInterval(createFlower, 300);


let slideIndex = 0;
const slides = document.getElementsByClassName('slides');
const totalSlides = slides.length;

function showSlides() {
    for (let i = 0; i < totalSlides; i++) {
        slides[i].classList.remove('active');
    }
    slideIndex++;
    if (slideIndex >= totalSlides) { slideIndex = 0; }
    slides[slideIndex].classList.add('active');
    setTimeout(showSlides, 2000);
}


showSlides();


