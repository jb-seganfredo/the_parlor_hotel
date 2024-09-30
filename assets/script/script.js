/* Responsive Menu */

document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector('.menuIcon');
    const mobileMenu = document.querySelector('.mobileMenu');
    const closeMenuButton = document.querySelector('.closeMenu');

    menuIcon.addEventListener('click', function() {
        mobileMenu.style.display = 'flex';
    });

    closeMenuButton.addEventListener('click', function() {
        mobileMenu.style.display = 'none';
    });
});

/* fade-in animations */

document.addEventListener("DOMContentLoaded", function() {
    const faders = document.querySelectorAll('.fade-in');

    const options = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.1 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    faders.forEach(fader => {
        observer.observe(fader);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); 
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach(el => observer.observe(el));
});


/* Carousel */

let currentIndex = 0;
const carouselItems = document.querySelectorAll('.carouselItem');
const totalItems = carouselItems.length;

document.querySelector('.next').addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
});

document.querySelector('.prev').addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
});

function updateCarousel() {
    const carouselInner = document.querySelector('.carouselInner');
    const offset = -currentIndex * 100; // 100% para cada item
    carouselInner.style.transform = `translateX(${offset}%)`;
}
