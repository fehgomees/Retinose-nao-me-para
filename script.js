document.addEventListener("DOMContentLoaded", function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".carrossel-inner .slide");
    const totalSlides = slides.length;
    const nextButton = document.querySelector(".next");
    const prevButton = document.querySelector(".prev");

    function showSlide(index) {
        const offset = -index * 100;
        document.querySelector(".carrossel-inner").style.transform = `translateX(${offset}%)`;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    }

    nextButton.addEventListener("click", nextSlide);
    prevButton.addEventListener("click", prevSlide);

    showSlide(currentSlide); // MOSTRA A IMAGEM

    // MUDANÇA A CADA 3 SEGUNDOS
    setInterval(nextSlide, 3000);
});

