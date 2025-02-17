/*=================
    INICIO SLIDE  
  =================*/

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none'; // Exibe o slide atual e esconde os outros
    });
}

// Função para avançar automaticamente os slides
function autoSlide() {
    currentSlide = (currentSlide < totalSlides - 1) ? currentSlide + 1 : 0; // Avança para o próximo slide
    showSlide(currentSlide);
}

// Configura um intervalo para mudar o slide a cada 3 segundos (3000 milissegundos)
setInterval(autoSlide, 6000);

document.getElementById('prevBtn').addEventListener('click', () => {
    currentSlide = (currentSlide > 0) ? currentSlide - 1 : totalSlides - 1; // Volta para o slide anterior
    showSlide(currentSlide);
});

document.getElementById('nextBtn').addEventListener('click', () => {
    currentSlide = (currentSlide < totalSlides - 1) ? currentSlide + 1 : 0; // Avança para o próximo slide
    showSlide(currentSlide);
});

// Mostra o primeiro slide ao carregar
document.addEventListener('DOMContentLoaded', (event) => {
    showSlide(currentSlide);
});

/*=================
    FIM SLIDE  
  =================*/


/*============================================
    Função para rolagem suave personalizada 
  ============================================*/

function smoothScroll(target, duration) {
    const targetElement = document.querySelector(target);
    const navbarHeight = document.querySelector('.navbar').offsetHeight; // Altura da navbar
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight; // Ajusta a posição
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1); // Normaliza o progresso entre 0 e 1

        // Efeito de easing (opcional)
        const ease = progress * (2 - progress); // Easing quadrático

        window.scrollTo(0, startPosition + distance * ease);

        if (timeElapsed < duration) {
            requestAnimationFrame(animation); // Continua a animação
        }
    }

    requestAnimationFrame(animation); // Inicia a animação
}

document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Impede o comportamento padrão do link
        smoothScroll(this.getAttribute('href'), 1000); // Chama a função com duração de 1000ms (1 segundo)
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navbar = document.getElementById('navbar');

    // Adiciona um listener de evento ao botão
    menuToggle.addEventListener('click', function() {
        // Alterna a visibilidade do menu
        if (navbar.style.display === 'block') {
            navbar.style.display = 'none';
        } else {
            navbar.style.display = 'block';
        }
    });
});
