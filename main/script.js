document.addEventListener('DOMContentLoaded', () => {
    let carousel = document.getElementById('carousel');
    if (!carousel) {
        console.error('Carousel element not found!');
        return;
    }

    const slides = carousel.querySelectorAll('[data-carousel-item]');
    const nextButton = carousel.querySelector('[data-carousel-next]');
    const prevButton = carousel.querySelector('[data-carousel-prev]');
    const indicators = carousel.querySelectorAll('[data-carousel-indicator]');

    if (slides.length === 0) {
        console.error('No slides found!');
        return;
    }

    if (!nextButton || !prevButton) {
        console.error('Next/Prev buttons not found!');
        return;
    }

    if (indicators.length !== slides.length) {
        console.warn('The number of indicators does not match the number of slides.');
    }

    let currentIndex = 0;
    const totalSlides = slides.length;

    function updateActiveSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.add('hidden');
            slide.style.transform = `translateX(${(i - index) * 100}%)`;
        });
        slides[index].classList.remove('hidden');

        indicators.forEach((indicator, i) => {
            indicator.classList.remove('bg-orange-500');
            indicator.classList.add('bg-gray-300');
            if (i === index) {
                indicator.classList.add('bg-orange-500');
            }
        });

        currentIndex = index;
    }

    function nextSlide() {
        const nextIndex = (currentIndex + 1) % totalSlides;
        updateActiveSlide(nextIndex);
    }

    function prevSlide() {
        const prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateActiveSlide(prevIndex);
    }

    nextButton.addEventListener('click', () => {
        nextSlide();
    });

    prevButton.addEventListener('click', () => {
        prevSlide();
    });

    indicators.forEach((indicator, i) => {
        indicator.addEventListener('click', () => {
            updateActiveSlide(i);
        });
    });

    updateActiveSlide(currentIndex);
});
