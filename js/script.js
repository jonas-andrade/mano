
const slideplay = ()=> {
    let currentSlide = 0;
    setInterval(() => {
        const slides = document.querySelectorAll('.slades');
        
        slides[currentSlide].classList.remove('active'); 
        currentSlide = (currentSlide + 1) % slides.length; 
        slides[currentSlide].classList.add('active');
    }, 2000); 
    
}

function openLetter(){
   
    document.querySelector('.subtitle').innerText = "Nosso amor é como uma canção que ecoa em nossos corações, cheia de momentos únicos que nos fazem vibrar.";
    const letter = document.querySelectorAll('.slades')[0];
    letter.style.display='none'
    letter.classList.remove('slades');
    slideplay();
    document.querySelector('audio').play();
    fallingFlowers();
    const title = document.querySelector('.title');
   
    setTimeout(() => {
        title.innerText = "Eu te Amo!";
        title.classList.add('fade-in');
        
    }, 5000); 
}

const fallingFlowers = ()=> {
    for (let i = 0;i<30; i++){
        const flower = document.createElement('div');
        flower.classList.add("flower");
        flower.style.left = `${Math.random() * 100}vw`;
        flower.style.animationDuration = `${3 + Math.random() * 5}s`;
        document.body.appendChild(flower);

    }
}
