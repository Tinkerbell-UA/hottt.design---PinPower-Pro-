const parallaxCards = document.querySelectorAll('.part-card');
const carouselTrack = document.querySelector('.carousel-track');
const carouselDots = document.querySelectorAll('.carousel-dots button');
const form = document.getElementById('contact-form');
const formStatus = document.querySelector('.form-status');
const tickerTrack = document.querySelector('.ticker-track');

let currentSlide = 0;
let carouselInterval;

function setParallax(event) {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const moveX = (event.clientX - centerX) / centerX;
  const moveY = (event.clientY - centerY) / centerY;

  parallaxCards.forEach((card) => {
    const depth = Number(card.dataset.depth || 0.1);
    const translateX = -moveX * depth * 20;
    const translateY = -moveY * depth * 20;
    card.style.transform = `translate(${translateX}px, ${translateY}px)`;
  });
}

document.addEventListener('mousemove', setParallax);

if (tickerTrack) {
  tickerTrack.innerHTML += tickerTrack.innerHTML;
}

function goToSlide(index) {
  currentSlide = index;
  const offset = index * (carouselTrack.children[0].getBoundingClientRect().width + 16);
  carouselTrack.style.transform = `translateX(-${offset}px)`;
  carouselDots.forEach((dot, i) => dot.classList.toggle('active', i === index));
}

function nextSlide() {
  const total = carouselTrack.children.length;
  currentSlide = (currentSlide + 1) % total;
  goToSlide(currentSlide);
}

function startCarousel() {
  carouselInterval = setInterval(nextSlide, 4000);
}

function pauseCarousel() {
  clearInterval(carouselInterval);
}

carouselDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    goToSlide(index);
    pauseCarousel();
    startCarousel();
  });
});

if (carouselTrack) {
  goToSlide(0);
  startCarousel();
  carouselTrack.addEventListener('mouseenter', pauseCarousel);
  carouselTrack.addEventListener('mouseleave', startCarousel);
}

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = data.get('name');
    const phone = data.get('phone');
    const message = data.get('message');

    formStatus.textContent = `Hvala, ${name}! Javimo se na ${phone} s detaljima za: ${message}.`;
    form.reset();
    setTimeout(() => (formStatus.textContent = ''), 5000);
  });
}
