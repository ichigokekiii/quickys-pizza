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


document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menuButton');
    const menuDropdown = document.getElementById('menuDropdown');
    const closeButton = document.getElementById('closeButton');

    const openMenu = () => {
        menuDropdown.classList.remove('hidden');
        menuDropdown.classList.add('flex');

        // Animate borgir
        const lines = menuButton.querySelectorAll('span');
        lines[0].classList.add('transform', 'rotate-45', 'translate-y-2');
        lines[1].classList.add('opacity-0');
        lines[2].classList.add('transform', '-rotate-45', '-translate-y-2');
    };

    const closeMenu = () => {
        menuDropdown.classList.add('hidden');
        menuDropdown.classList.remove('flex');

        // borgir animation back 2 reality
        const lines = menuButton.querySelectorAll('span');
        lines[0].classList.remove('transform', 'rotate-45', 'translate-y-2');
        lines[1].classList.remove('opacity-0');
        lines[2].classList.remove('transform', '-rotate-45', '-translate-y-2');
    };

    // Borgir
    menuButton.addEventListener('click', () => {
        const isOpen = menuDropdown.classList.contains('hidden');
        if (isOpen) {
            openMenu();
        } else {
            closeMenu();
        }
    });
    closeButton.addEventListener('click', closeMenu);
});
