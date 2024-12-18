// Aktivieren der Navigation beim Scrollen
document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Smooth Scroll
const links = document.querySelectorAll('nav ul li a');
links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    // Wenn der Index außerhalb der Range liegt, zurück zum ersten oder letzten Slide
    if (index >= totalSlides) {
        currentIndex = 0; // Zurück zum ersten Slide
    } else if (index < 0) {
        currentIndex = totalSlides - 1; // Zurück zum letzten Slide
    } else {
        currentIndex = index;
    }

    // Offset ist 50% der Breite für 2 Seiten pro Slide
    const offset = -currentIndex * 50; // Verschiebt den Inhalt um jeweils 50% der Breite (2 Seiten)
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    // Zeigt den nächsten Slide
    showSlide(currentIndex + 1);
}

function prevSlide() {
    // Zeigt den vorherigen Slide
    showSlide(currentIndex - 1);
}
