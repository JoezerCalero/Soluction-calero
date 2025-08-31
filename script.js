// Script para todos los carruseles
document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll(".carousel");

  carousels.forEach(carousel => {
    const track = carousel.querySelector(".carousel-track");
    const prevBtn = carousel.querySelector(".prev");
    const nextBtn = carousel.querySelector(".next");
    const images = carousel.querySelectorAll("img");

    let index = 0;
    const visibleSlides = 3; // cantidad de imágenes visibles aprox.
    const totalSlides = images.length;

    function updateCarousel() {
      const slideWidth = images[0].clientWidth + 20; // ancho + margen
      track.style.transform = `translateX(-${index * slideWidth}px)`;
    }

    nextBtn.addEventListener("click", () => {
      if (index < totalSlides - visibleSlides) {
        index++;
        updateCarousel();
      }
    });

    prevBtn.addEventListener("click", () => {
      if (index > 0) {
        index--;
        updateCarousel();
      }
    });

    // Ajustar al redimensionar la pantalla
    window.addEventListener("resize", updateCarousel);
  });
});
