// Мэйн слайдер

const arrowLeft = document.querySelector(".prev");
const arrowRight = document.querySelector(".next");
const slides = document.querySelectorAll(".services__container");

let currentSlideIndex = 0;

function addActiveClass() {
    slides[currentSlideIndex].classList.add("active");
}

function removeActiveClass() {
    slides.forEach(slide => slide.classList.remove("active"));
}

function changeSlide(slideIndex) {
    removeActiveClass();
    currentSlideIndex = slideIndex;
    addActiveClass();
}

function nextSlide() {
    let newSlideIndex = currentSlideIndex + 1;
    if (newSlideIndex > slides.length - 1) {
        newSlideIndex = 0;
    }
    changeSlide(newSlideIndex);
}

function previousSlide() {
    let newSlideIndex = currentSlideIndex - 1;
    if (newSlideIndex < 0) {
        newSlideIndex = slides.length - 1;
    }
    changeSlide(newSlideIndex);
}


// Устанавливаем первый слайд активным при загрузке страницы
addActiveClass();

arrowLeft.addEventListener("click", previousSlide);
arrowRight.addEventListener("click", nextSlide);



// Смена блоков при наведении на пункты меню "наши услуги"
document.addEventListener('DOMContentLoaded', function () {
  // Проверяем ширину экрана и добавляем обработчики только если ширина >= 395px
  if (window.innerWidth >= 395) {
    const items = document.querySelectorAll('.services-list__item');
    const cards = document.querySelectorAll('.services-list__card');

    items.forEach((item, index) => {
      item.addEventListener('mouseenter', function () {
        // Скрываем все карточки
        cards.forEach((card) => (card.style.display = 'none'));

        // Показываем соответствующую карточку по индексу
        if (cards[index]) {
          cards[index].style.display = 'grid';
        }
      });
    });
  }
});

var servicesCards = Array.from(document.querySelectorAll('.services-prices__card'));

if (window.innerWidth < 768) {
  for (let servicesCard of servicesCards) {
		let servicesPriceTitle = servicesCard.querySelector('.services-prices__service');
		let servicesPriceAppointment = servicesCard.querySelector('.services-prices__appointment');
		let servicesPriceArrow = servicesPriceTitle.querySelector('.slider__next');
		servicesPriceTitle.nextElementSibling.classList.add('hidden');
    servicesPriceTitle.addEventListener('click', (event) => {
      servicesPriceTitle.nextElementSibling.classList.toggle('hidden');
			servicesPriceTitle.classList.toggle('open');
			servicesPriceArrow.classList.toggle('open');
			servicesPriceAppointment.classList.toggle('close');
    });
  }
}
