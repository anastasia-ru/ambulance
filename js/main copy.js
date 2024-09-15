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

    // При выходе курсора за пределы списка возвращаем отображение card1
    // document
    //   .querySelector('.services-list__list')
    //   .addEventListener('mouseleave', function () {
        // Скрываем все карточки и показываем card1
      //   cards.forEach((card) => (card.style.display = 'none'));
      //   document.querySelector('.card1').style.display = 'block';
      // });
  }
});



// Слайдер для блока facts__slider
document.addEventListener('DOMContentLoaded', function () {
  // Получаем все изображения слайдера
  var factsSlides = document.querySelectorAll('.sertificates__slider .facts__banner-thumb');
  var currentSlideFacts = 0;

  // Функция для показа слайда
  function showFactsSlide(index) {
    // Скрываем все слайды
    for (var i = 0; i < factsSlides.length; i++) {
      factsSlides[i].style.display = 'none';
    }
    // Показываем текущий слайд
    factsSlides[index].style.display = 'block';
  }

  // Показываем первый слайд
  showFactsSlide(currentSlideFacts);

  // Навешиваем события на стрелки
  var prevFacts = document.querySelector('.facts__previouse-link');
  var nextFacts = document.querySelector('.facts__next-link');

  prevFacts.addEventListener('click', function () {
    currentSlideFacts--;
    if (currentSlideFacts < 0) {
      currentSlideFacts = factsSlides.length - 1;
    }
    showFactsSlide(currentSlideFacts);
  });

  nextFacts.addEventListener('click', function () {
    currentSlideFacts++;
    if (currentSlideFacts >= factsSlides.length) {
      currentSlideFacts = 0;
    }
    showFactsSlide(currentSlideFacts);
  });
});





// carparck slider with jQuery
$(document).ready(function () {
	$('.owl-carousel').owlCarousel({
		loop:true,
    margin:30,
		nav: true,
		navText: [
			'<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="21" cy="21" r="21" fill="#107A71" /><path d="M25.0109 13.7645L18.3162 20.9992L25.0109 28.2338C25.1307 28.3631 25.1978 28.5366 25.1978 28.7173C25.1978 28.898 25.1307 29.0715 25.0109 29.2008C24.9527 29.2633 24.8832 29.3131 24.8065 29.347C24.7298 29.381 24.6475 29.3984 24.5643 29.3984C24.4811 29.3984 24.3988 29.381 24.3221 29.347C24.2454 29.3131 24.1759 29.2633 24.1177 29.2008L16.9943 21.5044C16.8692 21.3692 16.7992 21.1879 16.7992 20.9992C16.7992 20.8104 16.8692 20.6292 16.9943 20.494L24.1163 12.7976C24.1746 12.7346 24.2443 12.6845 24.3212 12.6503C24.3981 12.6161 24.4808 12.5984 24.5643 12.5984C24.6478 12.5984 24.7305 12.6161 24.8074 12.6503C24.8844 12.6845 24.954 12.7346 25.0123 12.7976C25.1321 12.9269 25.1992 13.1004 25.1992 13.2811C25.1992 13.4618 25.1321 13.6353 25.0123 13.7645H25.0109Z" fill="white" /></svg>',
			'<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="21" cy="21" r="21" transform="matrix(-1 0 0 1 42 0)"fill="#107A71" /><path d="M16.9891 13.7645L23.6838 20.9992L16.9891 28.2338C16.8693 28.3631 16.8022 28.5366 16.8022 28.7173C16.8022 28.898 16.8693 29.0715 16.9891 29.2008C17.0473 29.2633 17.1168 29.3131 17.1935 29.347C17.2702 29.381 17.3525 29.3984 17.4357 29.3984C17.5189 29.3984 17.6012 29.381 17.6779 29.347C17.7546 29.3131 17.8241 29.2633 17.8823 29.2008L25.0057 21.5044C25.1308 21.3692 25.2008 21.1879 25.2008 20.9992C25.2008 20.8104 25.1308 20.6292 25.0057 20.494L17.8837 12.7976C17.8254 12.7346 17.7557 12.6845 17.6788 12.6503C17.6019 12.6161 17.5192 12.5984 17.4357 12.5984C17.3522 12.5984 17.2695 12.6161 17.1926 12.6503C17.1156 12.6845 17.046 12.7346 16.9877 12.7976C16.8679 12.9269 16.8008 13.1004 16.8008 13.2811C16.8008 13.4618 16.8679 13.6353 16.9877 13.7645H16.9891Z" fill="white" /></svg>'
		],
    responsive:{
        0:{
            items:1,
						dots: false,
						nav:false,
						navText: [
							'<svg width="32" height="32" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="21" cy="21" r="21" fill="#107A71" /><path d="M25.0109 13.7645L18.3162 20.9992L25.0109 28.2338C25.1307 28.3631 25.1978 28.5366 25.1978 28.7173C25.1978 28.898 25.1307 29.0715 25.0109 29.2008C24.9527 29.2633 24.8832 29.3131 24.8065 29.347C24.7298 29.381 24.6475 29.3984 24.5643 29.3984C24.4811 29.3984 24.3988 29.381 24.3221 29.347C24.2454 29.3131 24.1759 29.2633 24.1177 29.2008L16.9943 21.5044C16.8692 21.3692 16.7992 21.1879 16.7992 20.9992C16.7992 20.8104 16.8692 20.6292 16.9943 20.494L24.1163 12.7976C24.1746 12.7346 24.2443 12.6845 24.3212 12.6503C24.3981 12.6161 24.4808 12.5984 24.5643 12.5984C24.6478 12.5984 24.7305 12.6161 24.8074 12.6503C24.8844 12.6845 24.954 12.7346 25.0123 12.7976C25.1321 12.9269 25.1992 13.1004 25.1992 13.2811C25.1992 13.4618 25.1321 13.6353 25.0123 13.7645H25.0109Z" fill="white" /></svg>',
							'<svg width="32" height="32" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="21" cy="21" r="21" transform="matrix(-1 0 0 1 42 0)"fill="#107A71" /><path d="M16.9891 13.7645L23.6838 20.9992L16.9891 28.2338C16.8693 28.3631 16.8022 28.5366 16.8022 28.7173C16.8022 28.898 16.8693 29.0715 16.9891 29.2008C17.0473 29.2633 17.1168 29.3131 17.1935 29.347C17.2702 29.381 17.3525 29.3984 17.4357 29.3984C17.5189 29.3984 17.6012 29.381 17.6779 29.347C17.7546 29.3131 17.8241 29.2633 17.8823 29.2008L25.0057 21.5044C25.1308 21.3692 25.2008 21.1879 25.2008 20.9992C25.2008 20.8104 25.1308 20.6292 25.0057 20.494L17.8837 12.7976C17.8254 12.7346 17.7557 12.6845 17.6788 12.6503C17.6019 12.6161 17.5192 12.5984 17.4357 12.5984C17.3522 12.5984 17.2695 12.6161 17.1926 12.6503C17.1156 12.6845 17.046 12.7346 16.9877 12.7976C16.8679 12.9269 16.8008 13.1004 16.8008 13.2811C16.8008 13.4618 16.8679 13.6353 16.9877 13.7645H16.9891Z" fill="white" /></svg>'
						],
        },
        768:{
            items:2,
						dots: false,
        },
        1000:{
            items:4,
						dots: false,
        }
    }
})
});


//burger menu 
(function () {
	const burgerItem = document.querySelector('.burger');
	const menuBurger = document.querySelector('.header__nav');
	const closeItem = document.querySelector('.header__nav-close');
	burgerItem.addEventListener('click', () => {
		menuBurger.classList.add('active');
	});
	closeItem.addEventListener('click', () => {
		menuBurger.classList.remove('active');
	});
}())

// Аккардеон в header

var submenus = Array.from(document.querySelectorAll('.header__item'));

if (window.innerWidth < 768) {
  for (let submenu of submenus) {
    submenu.addEventListener('click', (event) => {
      var childSubmenu = submenu.querySelector('.header__submenu');

      // Если есть подменю, переключаем его видимость
      if (childSubmenu) {
        childSubmenu.classList.toggle('hidden');
      }

      // Находим родительский элемент с классом .header__link-sub
      var headerLinkSub = submenu.querySelector('.header__link-sub');
      if (headerLinkSub) {
        // Переключаем класс 'header__link-sub--close' для элемента с классом .header__link-sub
        headerLinkSub.classList.toggle('header__link-sub--close');
      }
    });
  }
}

// Аккардеон в footer

var footerMenu = document.querySelector('.footer__menu-title');

function toggleMobileMenuOnLoad() {
	var footerSubMenus = Array.from(document.querySelectorAll('.mobile-sub-menu'));
	if (window.innerWidth < 768) {
		footerSubMenus.forEach(menu => {
			menu.classList.add('hidden'); // Добавляем класс .hidden при загрузке страницы
		});
	} else {
		footerSubMenus.forEach(menu => {
			menu.classList.remove('hidden'); // Убираем класс .hidden, если ширина больше 768px
		});
	}
}

// Выполняем проверку при загрузке страницы
document.addEventListener('DOMContentLoaded', toggleMobileMenuOnLoad);

// Проверка при изменении размера окна
window.addEventListener('resize', toggleMobileMenuOnLoad);

if (window.innerWidth < 768) {
	footerMenu.addEventListener('click', () => {
		var footerSubMenus = Array.from(document.querySelectorAll('.mobile-sub-menu'));
		for (let footerSubMenu of footerSubMenus) {
			footerSubMenu.classList.toggle('hidden'); // Переключаем видимость подменю при клике
		};
		footerMenu.classList.toggle('footer__menu-title--close');
	});
}

// services-prices mobile accardeon

// var servicesPriceTitles = Array.from(document.querySelectorAll('.services-prices__service'));

// if (window.innerWidth < 768) {
//   for (let servicesPriceTitle of servicesPriceTitles) {
// 		servicesPriceTitle.nextElementSibling.classList.add('hidden');
// 		let servicesPriceAmount = servicesPriceTitle.querySelector('.services-prices__card-price');
//     servicesPriceTitle.addEventListener('click', (event) => {
//       servicesPriceTitle.nextElementSibling.classList.toggle('hidden');
// 			servicesPriceTitle.classList.toggle('open');
// 			servicesPriceAmount.classList.toggle('open');
// 			servicesPriceTitle.nextElementSibling.classList.toggle('hidden');
//     });
//   }
// }


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
