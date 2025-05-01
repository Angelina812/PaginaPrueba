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

    document.addEventListener("DOMContentLoaded", () => {
        const carousel     = document.getElementById("carouselContainer");
        const nextBtn      = document.getElementById("nextBtn");
        const prevBtn      = document.getElementById("prevBtn");
        const visibleCards = 3;    // siempre 3 a la vista
        const stepCards    = 2;    // avanzamos/restamos 2
        const totalCards   = carousel.children.length;
      
        // Medimos ancho de tarjeta + espacio (space-x-6 → 24px)
        const firstCard = carousel.children[0];
        const styles    = getComputedStyle(carousel);
        const gap       = parseInt(styles.gap) || 24;
        const cardWidth = firstCard.offsetWidth + gap;
      
        let currentIndex = 0;
      
        function goTo(index) {
          currentIndex = index;
          carousel.style.transform = `translateX(${-currentIndex * cardWidth}px)`;
        }
      
        nextBtn.addEventListener("click", () => {
          let next = currentIndex + stepCards;
          if (next > totalCards - visibleCards) next = 0;
          goTo(next);
        });
      
        prevBtn.addEventListener("click", () => {
          let prev = currentIndex - stepCards;
          if (prev < 0) prev = totalCards - visibleCards;
          goTo(prev);
        });
      
        // === AUTO-SLIDE ===
        let autoSlide = setInterval(() => nextBtn.click(), 3000);
      
        // Opcional: si quieres pausar al pasar el ratón:
        const wrapper = carousel.closest(".relative");
        wrapper.addEventListener("mouseenter", () => clearInterval(autoSlide));
        wrapper.addEventListener("mouseleave", () => {
          autoSlide = setInterval(() => nextBtn.click(), 3000);
        });
      });
      