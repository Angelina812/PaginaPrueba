const dropdown = document.getElementById("dropdown-menu");

let menuOpen = false;

function toggleMenu() {
    menuOpen = !menuOpen;
    dropdown.classList.toggle("hidden", !menuOpen);
}

function closeMenu () {
    menuOpen = false;
    dropdown.classList.add("hidden");
}

    document.addEventListener("click",function (e) {
        const menu = document.getElementById("menu-container");
        if (!menu.contains(e.target)) {
            dropdown.classList.add("hidden");
            menuOpen = false;
        }
    });

    const carousel = document.getElementById('carousel');
let cardWidth = carousel.querySelector('div').offsetWidth;
let currentIndex = 0;
const totalCards = 6;
const visibleCards = 3;

function updateCarousel() {
  cardWidth = carousel.querySelector('div').offsetWidth; // Actualiza el ancho en caso de resize
  const offset = cardWidth * currentIndex;
  carousel.style.transform = `translateX(-${offset}px)`;
}

function nextSlide() {
  if (currentIndex < totalCards - visibleCards) {
    currentIndex++;
  } else {
    currentIndex = 0; // Reinicia al principio
  }
  updateCarousel();
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
  }
  updateCarousel();
}

window.addEventListener('resize', updateCarousel);

// === Auto-slide cada 3 segundos ===
let autoSlide = setInterval(nextSlide, 3000);

// === Pausar al pasar el mouse por encima del carrusel ===
carousel.addEventListener('mouseenter', () => {
  clearInterval(autoSlide);
});

carousel.addEventListener('mouseleave', () => {
  autoSlide = setInterval(nextSlide, 3000);
});
