/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/shared/createEl.js
function createEl(tag, className, text) {
  const el = document.createElement(tag);
  if (className) {
    el.className = className;
  }
  if (text) {
    el.append(text);
  }
  return el;
}
;// CONCATENATED MODULE: ./src/widgets/about/assets/about-1.jpg
const about_1_namespaceObject = __webpack_require__.p + "e0da88b655cd0d4b4402.jpg";
;// CONCATENATED MODULE: ./src/widgets/about/assets/about-2.jpg
const about_2_namespaceObject = __webpack_require__.p + "94fda2b9790ab0dd8d75.jpg";
;// CONCATENATED MODULE: ./src/widgets/about/assets/about-3.jpg
const about_3_namespaceObject = __webpack_require__.p + "0e037f759994aaa4a53f.jpg";
;// CONCATENATED MODULE: ./src/widgets/about/assets/about-4.jpg
const about_4_namespaceObject = __webpack_require__.p + "38a2efac70b93c64179e.jpg";
;// CONCATENATED MODULE: ./src/widgets/about/create-about.js







function createAbout() {
  const section = createEl('section', 'about-section section');
  section.id = 'about'
  const heading = createEl('h2', 'about-heading heading');
  heading.append(
    'Resource is ',
    createEl('span', 'cursive', 'the perfect and cozy place'),
    ' where you can enjoy a variety of hot beverages, relax, catch up with friends, or get some work done.',
  );
  const imageContainer = createEl('div', 'image-container');
  let imgs = [about_1_namespaceObject, about_2_namespaceObject, about_3_namespaceObject, about_4_namespaceObject];
  imgs = imgs.map((src) => {
    const wrapper = createEl('div', 'img-wrapper');
    imageContainer.append(wrapper);
    const img = createEl('img', 'image');
    img.alt = 'photo in cozy cafe';
    img.src = src;
    wrapper.append(img);
    return wrapper;
  });

  section.append(heading, imageContainer);

  return section;
}

;// CONCATENATED MODULE: ./src/widgets/favorite/assets/coffee-slider-1.png
const coffee_slider_1_namespaceObject = __webpack_require__.p + "86082c1a0d70ec895684.png";
;// CONCATENATED MODULE: ./src/widgets/favorite/assets/coffee-slider-2.png
const coffee_slider_2_namespaceObject = __webpack_require__.p + "e2dd6009a666213de12a.png";
;// CONCATENATED MODULE: ./src/widgets/favorite/assets/coffee-slider-3.png
const coffee_slider_3_namespaceObject = __webpack_require__.p + "6fedcbb2a6902e44bf5c.png";
;// CONCATENATED MODULE: ./src/widgets/favorite/create-favorite.js






function createFavorite() {
  const favSection = createEl('section', 'favorite-section section');
  favSection.id = 'favorite-coffee';
  const favHeading = createEl('h2', 'favorite-heading heading');
  favHeading.append('Choose your ', createEl('span', 'cursive', 'favorite'), ' coffee');
  const sliderWrapper = createEl('div', 'slider-wrapper');
  const leftControl = createEl('button', 'slider-left-button slider-button', '🡠');
  const sliderContainer = createEl('div', 'slider-container');
  const rightControl = createEl('button', 'slider-right-button slider-button', '🡢');
  const sliderContent = createEl('div', 'slider-content');
  const sliderIndicatorWrapper = createEl('div', 'indicator-wrapper');
  let controls = new Array(3).fill(null);
  controls = controls.map(() => {
    const newControl = createEl('progress', 'control');
    newControl.max = '120';
    newControl.value = '0';
    sliderIndicatorWrapper.append(newControl);
    return newControl;
  });
  controls[0].classList.add('active');

  let drinks = [
    {
      alt: 'frappucino',
      name: 'S’mores Frappuccino',
      src: coffee_slider_1_namespaceObject,
      description:
        'This new drink takes an espresso and mixes it with brown sugar and cinnamon before being topped with oat milk.',
      price: '$5.50',
    },
    {
      alt: 'Caramel Macchiato',
      name: 'Caramel Macchiato',
      src: coffee_slider_2_namespaceObject,
      description:
        'Fragrant and unique classic espresso with rich caramel-peanut syrup, with cream under whipped thick foam.',
      price: '$5.00',
    },
    {
      alt: 'Ice coffee',
      name: 'Ice coffee',
      src: coffee_slider_3_namespaceObject,
      description: 'A popular summer drink that tones and invigorates. Prepared from coffee, milk and ice.',
      price: '$4.50',
    },
  ];

  function createDrinkCard(drink) {
    let { alt, src, name, description, price } = drink;
    const drinkCard = createEl('div', 'drink-card');
    const drinkCardImg = createEl('img', 'drink-card-img');
    drinkCardImg.alt = alt;
    drinkCardImg.src = src;
    drinkCardImg.height = '480';
    const drinkName = createEl('h3', 'drink-name', name);
    const drinkInfo = createEl('p', 'drink-info', description);
    const drinkPrice = createEl('span', 'drink-price', price);
    drinkCard.append(drinkCardImg, drinkName, drinkInfo, drinkPrice);
    sliderContent.append(drinkCard);
  }

  favSection.append(favHeading, sliderWrapper, sliderIndicatorWrapper);
  sliderWrapper.append(leftControl, sliderContainer, rightControl);
  sliderContainer.append(sliderContent);
  drinks.forEach((drink) => {
    createDrinkCard(drink);
  });

  //* functionality

  let current = 0;
  let timer;

  function startTimer() {
    timer = setInterval(() => {
      controls[current].value += 1;

      if (controls[current].value >= 120) {
        startNextDrink();
      }
    }, 45);
  }

  function startNextDrink() {
    clearInterval(timer);
    controls[current].value = '0';
    if (current < 2) {
      current += 1;
    } else {
      current = 0;
    }
    switchDrink();
    startTimer();
  }

  function startPrevDrink() {
    clearInterval(timer);
    controls[current].value = '0';
    if (current === 0) {
      current = 2;
    } else {
      current -= 1;
    }
    switchDrink();
    startTimer();
  }

  startTimer();

  function switchDrink() {
    sliderContent.style.right = `${current * 100}%`;
  }

  rightControl.addEventListener('click', startNextDrink);
  leftControl.addEventListener('click', startPrevDrink);

  sliderContent.addEventListener('mouseover', (e) => {
    clearInterval(timer);
  });

  sliderContent.addEventListener('mouseout', () => {
    startTimer();
  });

  let startTouchPoint;

  sliderContent.addEventListener('touchstart', (e) => {
    e.preventDefault();
    startTouchPoint = e.touches[0].clientX;
    clearInterval(timer);
  });

  sliderContent.addEventListener('touchend', (e) => {
    e.preventDefault();
    if (Math.abs(e.changedTouches[0].clientX - startTouchPoint) > 100) {
      if (e.changedTouches[0].clientX > startTouchPoint) {
        startPrevDrink();
      } else {
        startNextDrink();
      }
    } else {
      startTimer();
    }
  });

  return favSection;
}

;// CONCATENATED MODULE: ./src/widgets/footer/assets/twitter.svg
const twitter_namespaceObject = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9InR3aXR0ZXIiPgo8cGF0aCBpZD0iVmVjdG9yIiBkPSJNMjMgMy4wMTAwNkMyMyAzLjAxMDA2IDIwLjk4MjEgNC4yMDIxNyAxOS44NiA0LjU0MDA2QzE5LjI1NzcgMy44NDc1NyAxOC40NTczIDMuMzU2NzUgMTcuNTY3IDMuMTMzOThDMTYuNjc2NyAyLjkxMTIyIDE1LjczOTUgMi45NjcyNSAxNC44ODIxIDMuMjk0NTFDMTQuMDI0NyAzLjYyMTc3IDEzLjI4ODQgNC4yMDQ0NiAxMi43NzMgNC45NjM3N0MxMi4yNTc1IDUuNzIzMDkgMTEuOTg3NyA2LjYyMjM5IDEyIDcuNTQwMDZWOC41NDAwNkMxMC4yNDI2IDguNTg1NjIgOC41MDEyNyA4LjE5NTg3IDYuOTMxMDEgNy40MDU1QzUuMzYwNzQgNi42MTUxMyA0LjAxMDMyIDUuNDQ4NjkgMyA0LjAxMDA2QzMgNC4wMTAwNiAtMSAxMy4wMTAxIDggMTcuMDEwMUM1Ljk0MDUzIDE4LjQwOCAzLjQ4NzE2IDE5LjEwOSAxIDE5LjAxMDFDMTAgMjQuMDEwMSAyMSAxOS4wMTAxIDIxIDcuNTEwMDZDMjAuOTk5MSA3LjIzMTUxIDIwLjk3MjMgNi45NTM2NSAyMC45MiA2LjY4MDA2QzIxLjk0MDYgNS42NzM1NSAyMyAzLjAxMDA2IDIzIDMuMDEwMDZaIiBzdHJva2U9IiNFMUQ0QzkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L2c+Cjwvc3ZnPgo=";
;// CONCATENATED MODULE: ./src/widgets/footer/assets/instagram.svg
const instagram_namespaceObject = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9Imluc3RhZ3JhbSI+CjxwYXRoIGlkPSJWZWN0b3IiIGQ9Ik0xMiAxNkMxNC4yMDkxIDE2IDE2IDE0LjIwOTEgMTYgMTJDMTYgOS43OTA4NiAxNC4yMDkxIDggMTIgOEM5Ljc5MDg2IDggOCA5Ljc5MDg2IDggMTJDOCAxNC4yMDkxIDkuNzkwODYgMTYgMTIgMTZaIiBzdHJva2U9IiNFMUQ0QzkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBpZD0iVmVjdG9yXzIiIGQ9Ik0zIDE2VjhDMyA1LjIzODU4IDUuMjM4NTggMyA4IDNIMTZDMTguNzYxNCAzIDIxIDUuMjM4NTggMjEgOFYxNkMyMSAxOC43NjE0IDE4Ljc2MTQgMjEgMTYgMjFIOEM1LjIzODU4IDIxIDMgMTguNzYxNCAzIDE2WiIgc3Ryb2tlPSIjRTFENEM5Ii8+CjxwYXRoIGlkPSJWZWN0b3JfMyIgZD0iTTE3LjUgNi41MUwxNy41MSA2LjQ5ODg5IiBzdHJva2U9IiNFMUQ0QzkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L2c+Cjwvc3ZnPgo=";
;// CONCATENATED MODULE: ./src/widgets/footer/assets/facebook.svg
const facebook_namespaceObject = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9ImZhY2Vib29rIj4KPHBhdGggaWQ9IlZlY3RvciIgZD0iTTE3IDJIMTRDMTIuNjczOSAyIDExLjQwMjEgMi41MjY3OCAxMC40NjQ1IDMuNDY0NDdDOS41MjY3OCA0LjQwMjE1IDkgNS42NzM5MiA5IDdWMTBINlYxNEg5VjIySDEzVjE0SDE2TDE3IDEwSDEzVjdDMTMgNi43MzQ3OCAxMy4xMDU0IDYuNDgwNDMgMTMuMjkyOSA2LjI5Mjg5QzEzLjQ4MDQgNi4xMDUzNiAxMy43MzQ4IDYgMTQgNkgxN1YyWiIgc3Ryb2tlPSIjRTFENEM5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9nPgo8L3N2Zz4K";
;// CONCATENATED MODULE: ./src/widgets/footer/assets/pin-alt.svg
const pin_alt_namespaceObject = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9InBpbi1hbHQiPgo8cGF0aCBpZD0iRWxsaXBzZSIgZD0iTTE2LjY2NjMgOC4zMzMyOUMxNi42NjYzIDEyLjAxNTIgOS45OTk2NyAxOC4zMzMzIDkuOTk5NjcgMTguMzMzM0M5Ljk5OTY3IDE4LjMzMzMgMy4zMzMwMSAxMi4wMTUyIDMuMzMzMDEgOC4zMzMyOUMzLjMzMzAxIDQuNjUxMzkgNi4zMTc3OCAxLjY2NjYzIDkuOTk5NjcgMS42NjY2M0MxMy42ODE2IDEuNjY2NjMgMTYuNjY2MyA0LjY1MTM5IDE2LjY2NjMgOC4zMzMyOVoiIHN0cm9rZT0iI0UxRDRDOSIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KPHBhdGggaWQ9IlZlY3RvciIgZD0iTTEwLjAwMDMgOS4xNjY2N0MxMC40NjA2IDkuMTY2NjcgMTAuODMzNyA4Ljc5MzU3IDEwLjgzMzcgOC4zMzMzM0MxMC44MzM3IDcuODczMSAxMC40NjA2IDcuNSAxMC4wMDAzIDcuNUM5LjU0MDA5IDcuNSA5LjE2Njk5IDcuODczMSA5LjE2Njk5IDguMzMzMzNDOS4xNjY5OSA4Ljc5MzU3IDkuNTQwMDkgOS4xNjY2NyAxMC4wMDAzIDkuMTY2NjdaIiBmaWxsPSIjRTFENEM5IiBzdHJva2U9IiNFMUQ0QzkiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9nPgo8L3N2Zz4K";
;// CONCATENATED MODULE: ./src/widgets/footer/assets/phone.svg
const phone_namespaceObject = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9InBob25lIj4KPHBhdGggaWQ9IlBhdGgiIGQ9Ik0xNS4wOTg0IDEyLjI1MTZMMTEuNjY2NSAxMi45MTY2QzkuMzQ4NDUgMTEuNzUzMSA3LjkxNjU0IDEwLjQxNjYgNy4wODMyMSA4LjMzMzI5TDcuNzI0ODMgNC44OTE1NEw2LjUxMTk3IDEuNjY2NjNMMy43Mjk0NiAxLjY2NjYzQzIuNjAxOTEgMS42NjY2MyAxLjcxNDY2IDIuNTk5NTggMS45MDEwOCAzLjcxMTYxQzIuMjk4ODggNi4wODQ1NCAzLjM3MjMxIDEwLjAzOTEgNi4yNDk4NyAxMi45MTY2QzkuMjczMzggMTUuOTQwMSAxMy41NjYxIDE3LjMzMTggMTYuMTM3OCAxNy45Mjg4QzE3LjI5OSAxOC4xOTgzIDE4LjMzMzIgMTcuMjkwOCAxOC4zMzMyIDE2LjA5ODhMMTguMzMzMiAxMy40ODQzTDE1LjA5ODQgMTIuMjUxNloiIHN0cm9rZT0iI0UxRDRDOSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L2c+Cjwvc3ZnPgo=";
;// CONCATENATED MODULE: ./src/widgets/footer/assets/clock.svg
const clock_namespaceObject = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9ImNsb2NrIiBjbGlwLXBhdGg9InVybCgjY2xpcDBfMjE3XzE3MzYpIj4KPHBhdGggaWQ9IlZlY3RvciIgZD0iTTEwIDVMMTAgMTBMMTUgMTAiIHN0cm9rZT0iI0UxRDRDOSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBpZD0iVmVjdG9yXzIiIGQ9Ik0xMC4wMDAzIDE4LjMzMzNDMTQuNjAyNyAxOC4zMzMzIDE4LjMzMzcgMTQuNjAyMyAxOC4zMzM3IDkuOTk5OTZDMTguMzMzNyA1LjM5NzU5IDE0LjYwMjcgMS42NjY2MyAxMC4wMDAzIDEuNjY2NjNDNS4zOTc5NSAxLjY2NjYzIDEuNjY2OTkgNS4zOTc1OSAxLjY2Njk5IDkuOTk5OTZDMS42NjY5OSAxNC42MDIzIDUuMzk3OTUgMTguMzMzMyAxMC4wMDAzIDE4LjMzMzNaIiBzdHJva2U9IiNFMUQ0QzkiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8yMTdfMTczNiI+CjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K";
;// CONCATENATED MODULE: ./src/widgets/footer/create-footer.js









function createFooter() {
  const footer = createEl('footer', 'footer');
  footer.id = 'contact-us';
  const social = createEl('div', 'social-container');
  const heading = createEl('h2', 'footer-heading');
  heading.append('Sip, Savor, Smile. ', createEl('span', 'cursive', 'It’s coffee time!'));
  const socialWrapper = createEl('div', 'social-wrapper');

  const twitterLink = createEl('a', 'social-link');
  twitterLink.href = 'https://twitter.com/?lang=en';
  const twitterIcon = createEl('img', 'social-icon');
  twitterIcon.alt = 'twitter icon';
  twitterIcon.src = twitter_namespaceObject;
  twitterLink.append(twitterIcon);

  const instaLink = createEl('a', 'social-link');
  instaLink.href = 'https://www.instagram.com/';
  const instaIcon = createEl('img', 'social-icon');
  instaIcon.alt = 'insta icon';
  instaIcon.src = instagram_namespaceObject;
  instaLink.append(instaIcon);

  const fbLink = createEl('a', 'social-link');
  fbLink.href = 'https://uk-ua.facebook.com/';
  const fbIcon = createEl('img', 'social-icon');
  fbIcon.alt = 'fb icon';
  fbIcon.src = facebook_namespaceObject;
  fbLink.append(fbIcon);

  socialWrapper.append(twitterLink, instaLink, fbLink);
  social.append(heading, socialWrapper);

  const contacts = createEl('div', 'contacts-wrapper');
  const contactsHeading = createEl('h3', 'contacts-heading', 'Contact us');
  const contactsList = createEl('ul', 'contacts-list');

  function createLI(icon, text, link) {
    const li = createEl('li', 'contact-item');
    const liIcon = createEl('img', 'contact-icon');
    liIcon.alt = 'marker';
    liIcon.src = icon;
    if (link) {
      const liLink = createEl('a', 'contact-link');
      liLink.href = link;
      liLink.target = 'blank';

      li.append(liLink);
      liLink.append(liIcon, text);
    } else {
      li.append(liIcon, text);
    }

    contactsList.append(li);
  }

  createLI(pin_alt_namespaceObject, '8558 Green Rd., LA', 'https://maps.app.goo.gl/22p2bNiNgS6XErLQ9');
  createLI(phone_namespaceObject, '+1 (603) 555-0123', 'tel:+1(603)555-0123');
  createLI(clock_namespaceObject, 'Mon-Sat: 9:00 AM – 23:00 PM');

  contacts.append(contactsHeading, contactsList);

  footer.append(social, contacts);
  return footer;
}

;// CONCATENATED MODULE: ./src/widgets/header/assets/logo.svg
const logo_namespaceObject = __webpack_require__.p + "43dc7a5d689e27eb1f95.svg";
;// CONCATENATED MODULE: ./src/widgets/header/assets/coffee-cup.svg
const coffee_cup_namespaceObject = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9ImNvZmZlZS1jdXAiPgo8cGF0aCBpZD0iVmVjdG9yIiBkPSJNMTQuMTY3IDkuNzY2NjdWMTEuNjY2N0MxNC4xNjcgMTQuODg4MyAxMS41NTUzIDE3LjUgOC4zMzM2NiAxNy41QzUuMTEyIDE3LjUgMi41MDAzMyAxNC44ODgzIDIuNTAwMzMgMTEuNjY2N1Y5Ljc2NjY3QzIuNTAwMzMgOS40MzUzIDIuNzY4OTYgOS4xNjY2NyAzLjEwMDMzIDkuMTY2NjdIMTMuNTY3QzEzLjg5ODQgOS4xNjY2NyAxNC4xNjcgOS40MzUzIDE0LjE2NyA5Ljc2NjY3WiIgc3Ryb2tlPSIjNDAzRjNEIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGlkPSJWZWN0b3IgMTMiIGQ9Ik0xMC4wMDAzIDcuNTAwMDhDMTAuMDAwMyA2LjY2Njc1IDEwLjU5NTYgNS44MzM0MSAxMS43ODYgNS44MzM0MVY1LjgzMzQxQzEzLjEwMSA1LjgzMzQxIDE0LjE2NyA0Ljc2NzQzIDE0LjE2NyAzLjQ1MjQ2VjIuOTE2NzUiIHN0cm9rZT0iIzQwM0YzRCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBpZD0iVmVjdG9yIDE0IiBkPSJNNi42NjYzNCA3LjVWNy4wODMzM0M2LjY2NjM0IDUuNzAyNjIgNy43ODU2MyA0LjU4MzMzIDkuMTY2MzQgNC41ODMzM1Y0LjU4MzMzQzEwLjA4NjggNC41ODMzMyAxMC44MzMgMy44MzcxNCAxMC44MzMgMi45MTY2N1YyLjUiIHN0cm9rZT0iIzQwM0YzRCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBpZD0iVmVjdG9yXzIiIGQ9Ik0xMy4zMzMgOS4xNjY3NUgxNS40MTYzQzE2LjU2NjkgOS4xNjY3NSAxNy40OTk3IDEwLjA5OTUgMTcuNDk5NyAxMS4yNTAxQzE3LjQ5OTcgMTIuNDAwNyAxNi41NjY5IDEzLjMzMzQgMTUuNDE2MyAxMy4zMzM0SDE0LjE2NjMiIHN0cm9rZT0iIzQwM0YzRCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L2c+Cjwvc3ZnPgo=";
;// CONCATENATED MODULE: ./src/widgets/header/create-header.js





function createHeader() {
  const header = createEl('header', 'header');
  const container = createEl('div', 'header-container');
  const logo = createEl('a', 'header-logo');
  logo.href = '../index.html';
  const logoImg = createEl('img');
  logo.append(logoImg);
  logoImg.alt = 'coffee house logo';
  logoImg.src = logo_namespaceObject;
  const nav = createEl('nav', 'nav');
  const navUl = createEl('ul', 'nav-ul');
  let navItems = ['Favorite coffee', 'About', 'Mobile app', 'Contact us'];
  navItems = navItems.map((item) => {
    const newItem = createEl('li', 'nav-item');
    navUl.append(newItem);
    const newItemLink = createEl('a', 'nav-item-link', item);
    newItem.append(newItemLink);
    newItemLink.href = `#${item.replaceAll(' ', '-').toLowerCase()}`;
    return newItemLink;
  });
  const menuLink = createEl('a', 'menu-link');
  menuLink.href = './menu/index.html';
  const menuLinkText = createEl('span', 'menu-link-text', 'Menu');
  const menuLinkImage = createEl('img', 'menu-link-image');
  menuLinkImage.alt = 'cup icon';
  menuLinkImage.src = coffee_cup_namespaceObject;

  const burgerButton = createEl('button', 'burger-button');
  burgerButton.append(createEl('span'), createEl('span'));

  header.append(container);
  container.append(logo, nav, menuLink, burgerButton);
  nav.append(navUl);
  menuLink.append(menuLinkText, menuLinkImage);

  const linksEl = [logo, ...navItems, menuLink];

  //* functionality

  let openBurgerMenu = false;
  let sideBurgerMenu = false;

  if (window.innerWidth <= 768) {
    moveNavAside(nav, menuLink);
  }

  function closeNav(button, navMenu) {
    button.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.classList.remove('no-scroll');
    openBurgerMenu = false;
  }

  function openNav(button, navMenu) {
    button.classList.add('active');
    navMenu.classList.add('active');
    document.body.classList.add('no-scroll');
    openBurgerMenu = true;
  }

  function moveNavAside(nav, menuLink) {
    nav.append(menuLink);
    nav.classList.add('aside');
    sideBurgerMenu = true;
  }

  window.addEventListener('resize', (e) => {
    if (window.innerWidth > 768) {
      if (openBurgerMenu) {
        closeNav(burgerButton, nav);
      }
      if (sideBurgerMenu) {
        container.append(logo, nav, menuLink, burgerButton);
        nav.classList.remove('aside');
        sideBurgerMenu = false;
      }
    } else {
      if (!sideBurgerMenu) {
        moveNavAside(nav, menuLink);
      }
    }
  });

  burgerButton.addEventListener('click', () => {
    openBurgerMenu ? closeNav(burgerButton, nav) : openNav(burgerButton, nav);
  });

  nav.addEventListener('click', (e) => {
    if (e.target !== nav) {
      closeNav(burgerButton, nav);
    }
  });

  linksEl.forEach((link) => {
    link.addEventListener('click', (e) => {
      closeNav(burgerButton, nav);
    });
  });

  return [header, linksEl];
}

;// CONCATENATED MODULE: ./src/widgets/hero/create-hero.js




function createHero() {
  const heroSection = createEl('section', 'hero-section section');
  const heroHeading = createEl('h1', 'hero-heading');
  heroHeading.append(
    createEl('span', 'cursive', 'Enjoy'),
    createEl('span', null, ' premium coffee at our charming cafe'),
  );
  const info = createEl(
    'p',
    'hero-info',
    'With its inviting atmosphere and delicious coffee options, the Coffee House Resource is a popular destination for coffee lovers and those seeking a warm and inviting space to enjoy their favorite beverage.',
  );
  const menuButton = createEl('a', 'menu-button', 'Menu');
  const cupImg = createEl('img', 'coffee-img');
  cupImg.src = coffee_cup_namespaceObject;
  cupImg.alt = 'coffee cup';
  menuButton.append(cupImg);
  menuButton.href = './menu/index.html';
  heroSection.append(heroHeading, info, menuButton);
  return heroSection;
}

;// CONCATENATED MODULE: ./src/widgets/mobile-app/assets/mobile-screens.png
const mobile_screens_namespaceObject = __webpack_require__.p + "22541077c31293a8cdc0.png";
;// CONCATENATED MODULE: ./src/widgets/mobile-app/assets/play-market-icon.svg
const play_market_icon_namespaceObject = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9Imljb24iPgo8ZyBpZD0iSWNvbiI+CjxwYXRoIGlkPSJWZWN0b3IiIGQ9Ik0zLjc1NTggMy4yMDI5N0MzLjM5MzM1IDMuNTcyODkgMy4xODM1OSA0LjE0ODg0IDMuMTgzNTkgNC44OTQ3MVYzMS40OTk0QzMuMTgzNTkgMzIuMjQ1MyAzLjM5MzM1IDMyLjgyMTIgMy43NTU4IDMzLjE5MTFMMy44NDUyNSAzMy4yNzIzTDE5LjEzNTkgMTguMzdWMTguMDE4MUwzLjg0NTI1IDMuMTE1NzVMMy43NTU4IDMuMjAyOTdaIiBmaWxsPSIjNDAzRjNEIi8+CjxwYXRoIGlkPSJWZWN0b3JfMiIgZD0iTTI2LjA3NzYgMjMuMzRMMjAuOTg2MyAxOC4zN1YxOC4wMTgxTDI2LjA4MzcgMTMuMDQ4MkwyNi4xOTc5IDEzLjExMjhMMzIuMjM0NSAxNi40NjE3QzMzLjk1NzMgMTcuNDEyMSAzMy45NTczIDE4Ljk3NiAzMi4yMzQ1IDE5LjkzMjRMMjYuMTk3OSAyMy4yNzUzTDI2LjA3NzYgMjMuMzRaIiBmaWxsPSIjNDAzRjNEIi8+CjxwYXRoIGlkPSJWZWN0b3JfMyIgZD0iTTI1LjI3MzMgMjQuMjAwN0wyMC4wNjE3IDE5LjExOTVMNC42ODE2NCAzNC4xMTY2QzUuMjUzODQgMzQuNzAzMSA2LjE4Njk1IDM0Ljc3MzcgNy4yNDgwNyAzNC4xODczTDI1LjI3MzMgMjQuMjAwN1oiIGZpbGw9IiM0MDNGM0QiLz4KPHBhdGggaWQ9IlZlY3Rvcl80IiBkPSJNMjUuMjczMyAxMi4xODc2TDcuMjQ4MDcgMi4yMDEwM0M2LjE4Njk1IDEuNjIwNTggNS4yNTM4NCAxLjY5MTI1IDQuNjgxNjQgMi4yNzc3MkwyMC4wNjE3IDE3LjI2ODhMMjUuMjczMyAxMi4xODc2WiIgZmlsbD0iIzQwM0YzRCIvPgo8L2c+CjwvZz4KPC9zdmc+Cg==";
;// CONCATENATED MODULE: ./src/widgets/mobile-app/assets/app-store-icon.svg
const app_store_icon_namespaceObject = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9Imljb24iPgo8ZyBpZD0iSWNvbiI+CjxnIGlkPSJWZWN0b3IiPgo8cGF0aCBkPSJNMjYuNzA3MyAxOC42MzA3QzI2LjY3MDQgMTQuNjMyNCAzMC4wNjUgMTIuNjg3MiAzMC4yMjAzIDEyLjU5NjZDMjguMjk3NyA5Ljg2MzY2IDI1LjMxNzggOS40OTAyNiAyNC4yNzA3IDkuNDYwNDhDMjEuNzY3OSA5LjIwMzY5IDE5LjM0MDMgMTAuOTIwNiAxOC4wNjU0IDEwLjkyMDZDMTYuNzY1IDEwLjkyMDYgMTQuODAxNyA5LjQ4NTI5IDEyLjY4NTggOS41Mjc0N0M5Ljk2MjkzIDkuNTY4NDEgNy40MTU2NiAxMS4xMDU1IDYuMDE4NiAxMy40OTIzQzMuMTM1NDIgMTguMzU5IDUuMjg1NzIgMjUuNTEwOCA4LjA0ODAyIDI5LjQ0NDZDOS40Mjk4MSAzMS4zNzEyIDExLjA0NDQgMzMuNTIyMyAxMy4xNTc4IDMzLjQ0NjZDMTUuMjI1NCAzMy4zNjM1IDE1Ljk5NzggMzIuMTYxNCAxOC40OTI5IDMyLjE2MTRDMjAuOTY1MSAzMi4xNjE0IDIxLjY5MDMgMzMuNDQ2NiAyMy44NDU3IDMzLjM5ODNDMjYuMDY0NyAzMy4zNjM1IDI3LjQ2MTggMzEuNDYzIDI4Ljc5NTIgMjkuNTE5QzMwLjM5MiAyNy4zMTA4IDMxLjAzMzMgMjUuMTM2MiAzMS4wNTg4IDI1LjAyNDVDMzEuMDA2NiAyNS4wMDcxIDI2Ljc0OTMgMjMuNDIyOSAyNi43MDczIDE4LjYzMDdaIiBmaWxsPSIjNDAzRjNEIi8+CjxwYXRoIGQ9Ik0yMi42MzU3IDYuODcyNjhDMjMuNzQ3NyA1LjUxNjc1IDI0LjUwODYgMy42NzIwNSAyNC4yOTc0IDEuODAwMDVDMjIuNjg3OSAxLjg2OTUyIDIwLjY3NSAyLjg4NTU0IDE5LjUxNTkgNC4yMTE2OUMxOC40OTAzIDUuMzgwMjkgMTcuNTc0MiA3LjI5NTcxIDE3LjgxMDkgOS4wOTdDMTkuNjE4OSA5LjIyODUgMjEuNDc1MyA4LjIwNzUyIDIyLjYzNTcgNi44NzI2OFoiIGZpbGw9IiM0MDNGM0QiLz4KPC9nPgo8L2c+CjwvZz4KPC9zdmc+Cg==";
;// CONCATENATED MODULE: ./src/widgets/mobile-app/create-mobile.js






function createMobile() {
  const section = createEl('section', 'mobile-section section');
  section.id = 'mobile-app'
  const infoContainer = createEl('div', 'info-container');
  const heading = createEl('h2', 'mobile-heading heading');
  heading.append(createEl('span', 'cursive', 'Download'), ' our apps to start ordering');
  const mobileInfo = createEl(
    'p',
    'mobile-info',
    'Download the Resource app today and experience the comfort of ordering your favorite coffee from wherever you are',
  );
  const buttonsWrapper = createEl('div', 'button-wrapper');
  const buttonAppStore = createEl('a', 'button-app');
  buttonAppStore.href = '#'
  const appStoreIcon = createEl('img', 'app-icon');
  appStoreIcon.alt = 'app store icon';
  appStoreIcon.src = app_store_icon_namespaceObject;
  const buttonPlayMarket = createEl('a', 'button-app');
  buttonPlayMarket.href = '#'
  const playMarketIcon = createEl('img', 'app-icon');
  playMarketIcon.alt = 'play market icon';
  playMarketIcon.src = play_market_icon_namespaceObject;
  const playMarketSpan = createEl('div', 'button-info');
  playMarketSpan.append(createEl('p', 'available', 'Available on'), createEl('p', 'app-name', 'Google Play'));
  const appStoreSpan = createEl('div', 'button-info');
  appStoreSpan.append(createEl('p', 'available', 'Available on the'), createEl('p', 'app-name', 'App Store'));

  buttonAppStore.append(appStoreIcon, appStoreSpan);
  buttonPlayMarket.append(playMarketIcon, playMarketSpan);
  buttonsWrapper.append(buttonAppStore, buttonPlayMarket);
  infoContainer.append(heading, mobileInfo, buttonsWrapper);
  const imgWrapper = createEl('div', 'img-wrapper');
  const phoneImage = createEl('img', 'phone-img');
  phoneImage.alt = 'photo of the phone';
  phoneImage.src = mobile_screens_namespaceObject;

  imgWrapper.append(phoneImage);
  section.append(infoContainer, imgWrapper);
  return section;
}

;// CONCATENATED MODULE: ./src/pages/main.js









const container = createEl('div', 'page-container');
const main = createEl('main', 'main');
const [header, links] = createHeader();
document.body.append(container);
main.append(createHero(), createFavorite(), createAbout(), createMobile());
container.append(header, main, createFooter());

links[0].classList.add('disabled');
links[0].href = '#';

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN4SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN4RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3pHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWlkZWxpMzctanNmZTIwMjNxNC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9taWRlbGkzNy1qc2ZlMjAyM3E0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbWlkZWxpMzctanNmZTIwMjNxNC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9taWRlbGkzNy1qc2ZlMjAyM3E0Ly4vc3JjL3NoYXJlZC9jcmVhdGVFbC5qcyIsIndlYnBhY2s6Ly9taWRlbGkzNy1qc2ZlMjAyM3E0Ly4vc3JjL3dpZGdldHMvYWJvdXQvY3JlYXRlLWFib3V0LmpzIiwid2VicGFjazovL21pZGVsaTM3LWpzZmUyMDIzcTQvLi9zcmMvd2lkZ2V0cy9mYXZvcml0ZS9jcmVhdGUtZmF2b3JpdGUuanMiLCJ3ZWJwYWNrOi8vbWlkZWxpMzctanNmZTIwMjNxNC8uL3NyYy93aWRnZXRzL2Zvb3Rlci9jcmVhdGUtZm9vdGVyLmpzIiwid2VicGFjazovL21pZGVsaTM3LWpzZmUyMDIzcTQvLi9zcmMvd2lkZ2V0cy9oZWFkZXIvY3JlYXRlLWhlYWRlci5qcyIsIndlYnBhY2s6Ly9taWRlbGkzNy1qc2ZlMjAyM3E0Ly4vc3JjL3dpZGdldHMvaGVyby9jcmVhdGUtaGVyby5qcyIsIndlYnBhY2s6Ly9taWRlbGkzNy1qc2ZlMjAyM3E0Ly4vc3JjL3dpZGdldHMvbW9iaWxlLWFwcC9jcmVhdGUtbW9iaWxlLmpzIiwid2VicGFjazovL21pZGVsaTM3LWpzZmUyMDIzcTQvLi9zcmMvcGFnZXMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlRWwodGFnLCBjbGFzc05hbWUsIHRleHQpIHtcclxuICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcclxuICBpZiAoY2xhc3NOYW1lKSB7XHJcbiAgICBlbC5jbGFzc05hbWUgPSBjbGFzc05hbWU7XHJcbiAgfVxyXG4gIGlmICh0ZXh0KSB7XHJcbiAgICBlbC5hcHBlbmQodGV4dCk7XHJcbiAgfVxyXG4gIHJldHVybiBlbDtcclxufSIsImltcG9ydCB7IGNyZWF0ZUVsIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2NyZWF0ZUVsJztcclxuaW1wb3J0ICcuL2Fib3V0LmNzcyc7XHJcbmltcG9ydCBhYjEgZnJvbSAnLi9hc3NldHMvYWJvdXQtMS5qcGcnO1xyXG5pbXBvcnQgYWIyIGZyb20gJy4vYXNzZXRzL2Fib3V0LTIuanBnJztcclxuaW1wb3J0IGFiMyBmcm9tICcuL2Fzc2V0cy9hYm91dC0zLmpwZyc7XHJcbmltcG9ydCBhYjQgZnJvbSAnLi9hc3NldHMvYWJvdXQtNC5qcGcnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFib3V0KCkge1xyXG4gIGNvbnN0IHNlY3Rpb24gPSBjcmVhdGVFbCgnc2VjdGlvbicsICdhYm91dC1zZWN0aW9uIHNlY3Rpb24nKTtcclxuICBzZWN0aW9uLmlkID0gJ2Fib3V0J1xyXG4gIGNvbnN0IGhlYWRpbmcgPSBjcmVhdGVFbCgnaDInLCAnYWJvdXQtaGVhZGluZyBoZWFkaW5nJyk7XHJcbiAgaGVhZGluZy5hcHBlbmQoXHJcbiAgICAnUmVzb3VyY2UgaXMgJyxcclxuICAgIGNyZWF0ZUVsKCdzcGFuJywgJ2N1cnNpdmUnLCAndGhlIHBlcmZlY3QgYW5kIGNvenkgcGxhY2UnKSxcclxuICAgICcgd2hlcmUgeW91IGNhbiBlbmpveSBhIHZhcmlldHkgb2YgaG90IGJldmVyYWdlcywgcmVsYXgsIGNhdGNoIHVwIHdpdGggZnJpZW5kcywgb3IgZ2V0IHNvbWUgd29yayBkb25lLicsXHJcbiAgKTtcclxuICBjb25zdCBpbWFnZUNvbnRhaW5lciA9IGNyZWF0ZUVsKCdkaXYnLCAnaW1hZ2UtY29udGFpbmVyJyk7XHJcbiAgbGV0IGltZ3MgPSBbYWIxLCBhYjIsIGFiMywgYWI0XTtcclxuICBpbWdzID0gaW1ncy5tYXAoKHNyYykgPT4ge1xyXG4gICAgY29uc3Qgd3JhcHBlciA9IGNyZWF0ZUVsKCdkaXYnLCAnaW1nLXdyYXBwZXInKTtcclxuICAgIGltYWdlQ29udGFpbmVyLmFwcGVuZCh3cmFwcGVyKTtcclxuICAgIGNvbnN0IGltZyA9IGNyZWF0ZUVsKCdpbWcnLCAnaW1hZ2UnKTtcclxuICAgIGltZy5hbHQgPSAncGhvdG8gaW4gY296eSBjYWZlJztcclxuICAgIGltZy5zcmMgPSBzcmM7XHJcbiAgICB3cmFwcGVyLmFwcGVuZChpbWcpO1xyXG4gICAgcmV0dXJuIHdyYXBwZXI7XHJcbiAgfSk7XHJcblxyXG4gIHNlY3Rpb24uYXBwZW5kKGhlYWRpbmcsIGltYWdlQ29udGFpbmVyKTtcclxuXHJcbiAgcmV0dXJuIHNlY3Rpb247XHJcbn1cclxuIiwiaW1wb3J0ICcuL2Zhdm9yaXRlLmNzcyc7XHJcbmltcG9ydCB7IGNyZWF0ZUVsIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2NyZWF0ZUVsJztcclxuaW1wb3J0IGZyYXBwdWNpbm9JbWFnZSBmcm9tICcuL2Fzc2V0cy9jb2ZmZWUtc2xpZGVyLTEucG5nJztcclxuaW1wb3J0IG1hY2NoaWF0b0ltYWdlIGZyb20gJy4vYXNzZXRzL2NvZmZlZS1zbGlkZXItMi5wbmcnO1xyXG5pbXBvcnQgaWNlSW1hZ2UgZnJvbSAnLi9hc3NldHMvY29mZmVlLXNsaWRlci0zLnBuZyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRmF2b3JpdGUoKSB7XHJcbiAgY29uc3QgZmF2U2VjdGlvbiA9IGNyZWF0ZUVsKCdzZWN0aW9uJywgJ2Zhdm9yaXRlLXNlY3Rpb24gc2VjdGlvbicpO1xyXG4gIGZhdlNlY3Rpb24uaWQgPSAnZmF2b3JpdGUtY29mZmVlJztcclxuICBjb25zdCBmYXZIZWFkaW5nID0gY3JlYXRlRWwoJ2gyJywgJ2Zhdm9yaXRlLWhlYWRpbmcgaGVhZGluZycpO1xyXG4gIGZhdkhlYWRpbmcuYXBwZW5kKCdDaG9vc2UgeW91ciAnLCBjcmVhdGVFbCgnc3BhbicsICdjdXJzaXZlJywgJ2Zhdm9yaXRlJyksICcgY29mZmVlJyk7XHJcbiAgY29uc3Qgc2xpZGVyV3JhcHBlciA9IGNyZWF0ZUVsKCdkaXYnLCAnc2xpZGVyLXdyYXBwZXInKTtcclxuICBjb25zdCBsZWZ0Q29udHJvbCA9IGNyZWF0ZUVsKCdidXR0b24nLCAnc2xpZGVyLWxlZnQtYnV0dG9uIHNsaWRlci1idXR0b24nLCAn8J+hoCcpO1xyXG4gIGNvbnN0IHNsaWRlckNvbnRhaW5lciA9IGNyZWF0ZUVsKCdkaXYnLCAnc2xpZGVyLWNvbnRhaW5lcicpO1xyXG4gIGNvbnN0IHJpZ2h0Q29udHJvbCA9IGNyZWF0ZUVsKCdidXR0b24nLCAnc2xpZGVyLXJpZ2h0LWJ1dHRvbiBzbGlkZXItYnV0dG9uJywgJ/CfoaInKTtcclxuICBjb25zdCBzbGlkZXJDb250ZW50ID0gY3JlYXRlRWwoJ2RpdicsICdzbGlkZXItY29udGVudCcpO1xyXG4gIGNvbnN0IHNsaWRlckluZGljYXRvcldyYXBwZXIgPSBjcmVhdGVFbCgnZGl2JywgJ2luZGljYXRvci13cmFwcGVyJyk7XHJcbiAgbGV0IGNvbnRyb2xzID0gbmV3IEFycmF5KDMpLmZpbGwobnVsbCk7XHJcbiAgY29udHJvbHMgPSBjb250cm9scy5tYXAoKCkgPT4ge1xyXG4gICAgY29uc3QgbmV3Q29udHJvbCA9IGNyZWF0ZUVsKCdwcm9ncmVzcycsICdjb250cm9sJyk7XHJcbiAgICBuZXdDb250cm9sLm1heCA9ICcxMjAnO1xyXG4gICAgbmV3Q29udHJvbC52YWx1ZSA9ICcwJztcclxuICAgIHNsaWRlckluZGljYXRvcldyYXBwZXIuYXBwZW5kKG5ld0NvbnRyb2wpO1xyXG4gICAgcmV0dXJuIG5ld0NvbnRyb2w7XHJcbiAgfSk7XHJcbiAgY29udHJvbHNbMF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblxyXG4gIGxldCBkcmlua3MgPSBbXHJcbiAgICB7XHJcbiAgICAgIGFsdDogJ2ZyYXBwdWNpbm8nLFxyXG4gICAgICBuYW1lOiAnU+KAmW1vcmVzIEZyYXBwdWNjaW5vJyxcclxuICAgICAgc3JjOiBmcmFwcHVjaW5vSW1hZ2UsXHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICdUaGlzIG5ldyBkcmluayB0YWtlcyBhbiBlc3ByZXNzbyBhbmQgbWl4ZXMgaXQgd2l0aCBicm93biBzdWdhciBhbmQgY2lubmFtb24gYmVmb3JlIGJlaW5nIHRvcHBlZCB3aXRoIG9hdCBtaWxrLicsXHJcbiAgICAgIHByaWNlOiAnJDUuNTAnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgYWx0OiAnQ2FyYW1lbCBNYWNjaGlhdG8nLFxyXG4gICAgICBuYW1lOiAnQ2FyYW1lbCBNYWNjaGlhdG8nLFxyXG4gICAgICBzcmM6IG1hY2NoaWF0b0ltYWdlLFxyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAnRnJhZ3JhbnQgYW5kIHVuaXF1ZSBjbGFzc2ljIGVzcHJlc3NvIHdpdGggcmljaCBjYXJhbWVsLXBlYW51dCBzeXJ1cCwgd2l0aCBjcmVhbSB1bmRlciB3aGlwcGVkIHRoaWNrIGZvYW0uJyxcclxuICAgICAgcHJpY2U6ICckNS4wMCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBhbHQ6ICdJY2UgY29mZmVlJyxcclxuICAgICAgbmFtZTogJ0ljZSBjb2ZmZWUnLFxyXG4gICAgICBzcmM6IGljZUltYWdlLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ0EgcG9wdWxhciBzdW1tZXIgZHJpbmsgdGhhdCB0b25lcyBhbmQgaW52aWdvcmF0ZXMuIFByZXBhcmVkIGZyb20gY29mZmVlLCBtaWxrIGFuZCBpY2UuJyxcclxuICAgICAgcHJpY2U6ICckNC41MCcsXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gIGZ1bmN0aW9uIGNyZWF0ZURyaW5rQ2FyZChkcmluaykge1xyXG4gICAgbGV0IHsgYWx0LCBzcmMsIG5hbWUsIGRlc2NyaXB0aW9uLCBwcmljZSB9ID0gZHJpbms7XHJcbiAgICBjb25zdCBkcmlua0NhcmQgPSBjcmVhdGVFbCgnZGl2JywgJ2RyaW5rLWNhcmQnKTtcclxuICAgIGNvbnN0IGRyaW5rQ2FyZEltZyA9IGNyZWF0ZUVsKCdpbWcnLCAnZHJpbmstY2FyZC1pbWcnKTtcclxuICAgIGRyaW5rQ2FyZEltZy5hbHQgPSBhbHQ7XHJcbiAgICBkcmlua0NhcmRJbWcuc3JjID0gc3JjO1xyXG4gICAgZHJpbmtDYXJkSW1nLmhlaWdodCA9ICc0ODAnO1xyXG4gICAgY29uc3QgZHJpbmtOYW1lID0gY3JlYXRlRWwoJ2gzJywgJ2RyaW5rLW5hbWUnLCBuYW1lKTtcclxuICAgIGNvbnN0IGRyaW5rSW5mbyA9IGNyZWF0ZUVsKCdwJywgJ2RyaW5rLWluZm8nLCBkZXNjcmlwdGlvbik7XHJcbiAgICBjb25zdCBkcmlua1ByaWNlID0gY3JlYXRlRWwoJ3NwYW4nLCAnZHJpbmstcHJpY2UnLCBwcmljZSk7XHJcbiAgICBkcmlua0NhcmQuYXBwZW5kKGRyaW5rQ2FyZEltZywgZHJpbmtOYW1lLCBkcmlua0luZm8sIGRyaW5rUHJpY2UpO1xyXG4gICAgc2xpZGVyQ29udGVudC5hcHBlbmQoZHJpbmtDYXJkKTtcclxuICB9XHJcblxyXG4gIGZhdlNlY3Rpb24uYXBwZW5kKGZhdkhlYWRpbmcsIHNsaWRlcldyYXBwZXIsIHNsaWRlckluZGljYXRvcldyYXBwZXIpO1xyXG4gIHNsaWRlcldyYXBwZXIuYXBwZW5kKGxlZnRDb250cm9sLCBzbGlkZXJDb250YWluZXIsIHJpZ2h0Q29udHJvbCk7XHJcbiAgc2xpZGVyQ29udGFpbmVyLmFwcGVuZChzbGlkZXJDb250ZW50KTtcclxuICBkcmlua3MuZm9yRWFjaCgoZHJpbmspID0+IHtcclxuICAgIGNyZWF0ZURyaW5rQ2FyZChkcmluayk7XHJcbiAgfSk7XHJcblxyXG4gIC8vKiBmdW5jdGlvbmFsaXR5XHJcblxyXG4gIGxldCBjdXJyZW50ID0gMDtcclxuICBsZXQgdGltZXI7XHJcblxyXG4gIGZ1bmN0aW9uIHN0YXJ0VGltZXIoKSB7XHJcbiAgICB0aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgY29udHJvbHNbY3VycmVudF0udmFsdWUgKz0gMTtcclxuXHJcbiAgICAgIGlmIChjb250cm9sc1tjdXJyZW50XS52YWx1ZSA+PSAxMjApIHtcclxuICAgICAgICBzdGFydE5leHREcmluaygpO1xyXG4gICAgICB9XHJcbiAgICB9LCA0NSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzdGFydE5leHREcmluaygpIHtcclxuICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xyXG4gICAgY29udHJvbHNbY3VycmVudF0udmFsdWUgPSAnMCc7XHJcbiAgICBpZiAoY3VycmVudCA8IDIpIHtcclxuICAgICAgY3VycmVudCArPSAxO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY3VycmVudCA9IDA7XHJcbiAgICB9XHJcbiAgICBzd2l0Y2hEcmluaygpO1xyXG4gICAgc3RhcnRUaW1lcigpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc3RhcnRQcmV2RHJpbmsoKSB7XHJcbiAgICBjbGVhckludGVydmFsKHRpbWVyKTtcclxuICAgIGNvbnRyb2xzW2N1cnJlbnRdLnZhbHVlID0gJzAnO1xyXG4gICAgaWYgKGN1cnJlbnQgPT09IDApIHtcclxuICAgICAgY3VycmVudCA9IDI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjdXJyZW50IC09IDE7XHJcbiAgICB9XHJcbiAgICBzd2l0Y2hEcmluaygpO1xyXG4gICAgc3RhcnRUaW1lcigpO1xyXG4gIH1cclxuXHJcbiAgc3RhcnRUaW1lcigpO1xyXG5cclxuICBmdW5jdGlvbiBzd2l0Y2hEcmluaygpIHtcclxuICAgIHNsaWRlckNvbnRlbnQuc3R5bGUucmlnaHQgPSBgJHtjdXJyZW50ICogMTAwfSVgO1xyXG4gIH1cclxuXHJcbiAgcmlnaHRDb250cm9sLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RhcnROZXh0RHJpbmspO1xyXG4gIGxlZnRDb250cm9sLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RhcnRQcmV2RHJpbmspO1xyXG5cclxuICBzbGlkZXJDb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIChlKSA9PiB7XHJcbiAgICBjbGVhckludGVydmFsKHRpbWVyKTtcclxuICB9KTtcclxuXHJcbiAgc2xpZGVyQ29udGVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpID0+IHtcclxuICAgIHN0YXJ0VGltZXIoKTtcclxuICB9KTtcclxuXHJcbiAgbGV0IHN0YXJ0VG91Y2hQb2ludDtcclxuXHJcbiAgc2xpZGVyQ29udGVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHN0YXJ0VG91Y2hQb2ludCA9IGUudG91Y2hlc1swXS5jbGllbnRYO1xyXG4gICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XHJcbiAgfSk7XHJcblxyXG4gIHNsaWRlckNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKE1hdGguYWJzKGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCAtIHN0YXJ0VG91Y2hQb2ludCkgPiAxMDApIHtcclxuICAgICAgaWYgKGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCA+IHN0YXJ0VG91Y2hQb2ludCkge1xyXG4gICAgICAgIHN0YXJ0UHJldkRyaW5rKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3RhcnROZXh0RHJpbmsoKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc3RhcnRUaW1lcigpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gZmF2U2VjdGlvbjtcclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVFbCB9IGZyb20gJy4uLy4uL3NoYXJlZC9jcmVhdGVFbCc7XHJcbmltcG9ydCB0d2l0U3JjIGZyb20gJy4vYXNzZXRzL3R3aXR0ZXIuc3ZnJztcclxuaW1wb3J0IGluc3RhU3JjIGZyb20gJy4vYXNzZXRzL2luc3RhZ3JhbS5zdmcnO1xyXG5pbXBvcnQgZmJTcmMgZnJvbSAnLi9hc3NldHMvZmFjZWJvb2suc3ZnJztcclxuaW1wb3J0IHBpbiBmcm9tICcuL2Fzc2V0cy9waW4tYWx0LnN2Zyc7XHJcbmltcG9ydCBwaG9uZSBmcm9tICcuL2Fzc2V0cy9waG9uZS5zdmcnO1xyXG5pbXBvcnQgY2xvY2sgZnJvbSAnLi9hc3NldHMvY2xvY2suc3ZnJztcclxuaW1wb3J0ICcuL2Zvb3Rlci5jc3MnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcclxuICBjb25zdCBmb290ZXIgPSBjcmVhdGVFbCgnZm9vdGVyJywgJ2Zvb3RlcicpO1xyXG4gIGZvb3Rlci5pZCA9ICdjb250YWN0LXVzJztcclxuICBjb25zdCBzb2NpYWwgPSBjcmVhdGVFbCgnZGl2JywgJ3NvY2lhbC1jb250YWluZXInKTtcclxuICBjb25zdCBoZWFkaW5nID0gY3JlYXRlRWwoJ2gyJywgJ2Zvb3Rlci1oZWFkaW5nJyk7XHJcbiAgaGVhZGluZy5hcHBlbmQoJ1NpcCwgU2F2b3IsIFNtaWxlLiAnLCBjcmVhdGVFbCgnc3BhbicsICdjdXJzaXZlJywgJ0l04oCZcyBjb2ZmZWUgdGltZSEnKSk7XHJcbiAgY29uc3Qgc29jaWFsV3JhcHBlciA9IGNyZWF0ZUVsKCdkaXYnLCAnc29jaWFsLXdyYXBwZXInKTtcclxuXHJcbiAgY29uc3QgdHdpdHRlckxpbmsgPSBjcmVhdGVFbCgnYScsICdzb2NpYWwtbGluaycpO1xyXG4gIHR3aXR0ZXJMaW5rLmhyZWYgPSAnaHR0cHM6Ly90d2l0dGVyLmNvbS8/bGFuZz1lbic7XHJcbiAgY29uc3QgdHdpdHRlckljb24gPSBjcmVhdGVFbCgnaW1nJywgJ3NvY2lhbC1pY29uJyk7XHJcbiAgdHdpdHRlckljb24uYWx0ID0gJ3R3aXR0ZXIgaWNvbic7XHJcbiAgdHdpdHRlckljb24uc3JjID0gdHdpdFNyYztcclxuICB0d2l0dGVyTGluay5hcHBlbmQodHdpdHRlckljb24pO1xyXG5cclxuICBjb25zdCBpbnN0YUxpbmsgPSBjcmVhdGVFbCgnYScsICdzb2NpYWwtbGluaycpO1xyXG4gIGluc3RhTGluay5ocmVmID0gJ2h0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vJztcclxuICBjb25zdCBpbnN0YUljb24gPSBjcmVhdGVFbCgnaW1nJywgJ3NvY2lhbC1pY29uJyk7XHJcbiAgaW5zdGFJY29uLmFsdCA9ICdpbnN0YSBpY29uJztcclxuICBpbnN0YUljb24uc3JjID0gaW5zdGFTcmM7XHJcbiAgaW5zdGFMaW5rLmFwcGVuZChpbnN0YUljb24pO1xyXG5cclxuICBjb25zdCBmYkxpbmsgPSBjcmVhdGVFbCgnYScsICdzb2NpYWwtbGluaycpO1xyXG4gIGZiTGluay5ocmVmID0gJ2h0dHBzOi8vdWstdWEuZmFjZWJvb2suY29tLyc7XHJcbiAgY29uc3QgZmJJY29uID0gY3JlYXRlRWwoJ2ltZycsICdzb2NpYWwtaWNvbicpO1xyXG4gIGZiSWNvbi5hbHQgPSAnZmIgaWNvbic7XHJcbiAgZmJJY29uLnNyYyA9IGZiU3JjO1xyXG4gIGZiTGluay5hcHBlbmQoZmJJY29uKTtcclxuXHJcbiAgc29jaWFsV3JhcHBlci5hcHBlbmQodHdpdHRlckxpbmssIGluc3RhTGluaywgZmJMaW5rKTtcclxuICBzb2NpYWwuYXBwZW5kKGhlYWRpbmcsIHNvY2lhbFdyYXBwZXIpO1xyXG5cclxuICBjb25zdCBjb250YWN0cyA9IGNyZWF0ZUVsKCdkaXYnLCAnY29udGFjdHMtd3JhcHBlcicpO1xyXG4gIGNvbnN0IGNvbnRhY3RzSGVhZGluZyA9IGNyZWF0ZUVsKCdoMycsICdjb250YWN0cy1oZWFkaW5nJywgJ0NvbnRhY3QgdXMnKTtcclxuICBjb25zdCBjb250YWN0c0xpc3QgPSBjcmVhdGVFbCgndWwnLCAnY29udGFjdHMtbGlzdCcpO1xyXG5cclxuICBmdW5jdGlvbiBjcmVhdGVMSShpY29uLCB0ZXh0LCBsaW5rKSB7XHJcbiAgICBjb25zdCBsaSA9IGNyZWF0ZUVsKCdsaScsICdjb250YWN0LWl0ZW0nKTtcclxuICAgIGNvbnN0IGxpSWNvbiA9IGNyZWF0ZUVsKCdpbWcnLCAnY29udGFjdC1pY29uJyk7XHJcbiAgICBsaUljb24uYWx0ID0gJ21hcmtlcic7XHJcbiAgICBsaUljb24uc3JjID0gaWNvbjtcclxuICAgIGlmIChsaW5rKSB7XHJcbiAgICAgIGNvbnN0IGxpTGluayA9IGNyZWF0ZUVsKCdhJywgJ2NvbnRhY3QtbGluaycpO1xyXG4gICAgICBsaUxpbmsuaHJlZiA9IGxpbms7XHJcbiAgICAgIGxpTGluay50YXJnZXQgPSAnYmxhbmsnO1xyXG5cclxuICAgICAgbGkuYXBwZW5kKGxpTGluayk7XHJcbiAgICAgIGxpTGluay5hcHBlbmQobGlJY29uLCB0ZXh0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxpLmFwcGVuZChsaUljb24sIHRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnRhY3RzTGlzdC5hcHBlbmQobGkpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlTEkocGluLCAnODU1OCBHcmVlbiBSZC4sIExBJywgJ2h0dHBzOi8vbWFwcy5hcHAuZ29vLmdsLzIycDJiTmlOZ1M2WEVyTFE5Jyk7XHJcbiAgY3JlYXRlTEkocGhvbmUsICcrMSAoNjAzKSA1NTUtMDEyMycsICd0ZWw6KzEoNjAzKTU1NS0wMTIzJyk7XHJcbiAgY3JlYXRlTEkoY2xvY2ssICdNb24tU2F0OiA5OjAwIEFNIOKAkyAyMzowMCBQTScpO1xyXG5cclxuICBjb250YWN0cy5hcHBlbmQoY29udGFjdHNIZWFkaW5nLCBjb250YWN0c0xpc3QpO1xyXG5cclxuICBmb290ZXIuYXBwZW5kKHNvY2lhbCwgY29udGFjdHMpO1xyXG4gIHJldHVybiBmb290ZXI7XHJcbn1cclxuIiwiaW1wb3J0IHsgY3JlYXRlRWwgfSBmcm9tICcuLi8uLi9zaGFyZWQvY3JlYXRlRWwnO1xyXG5pbXBvcnQgbG9nb0ltYWdlIGZyb20gJy4vYXNzZXRzL2xvZ28uc3ZnJztcclxuaW1wb3J0IGN1cEltYWdlIGZyb20gJy4vYXNzZXRzL2NvZmZlZS1jdXAuc3ZnJztcclxuaW1wb3J0ICcuL2hlYWRlci5jc3MnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcclxuICBjb25zdCBoZWFkZXIgPSBjcmVhdGVFbCgnaGVhZGVyJywgJ2hlYWRlcicpO1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUVsKCdkaXYnLCAnaGVhZGVyLWNvbnRhaW5lcicpO1xyXG4gIGNvbnN0IGxvZ28gPSBjcmVhdGVFbCgnYScsICdoZWFkZXItbG9nbycpO1xyXG4gIGxvZ28uaHJlZiA9ICcuLi9pbmRleC5odG1sJztcclxuICBjb25zdCBsb2dvSW1nID0gY3JlYXRlRWwoJ2ltZycpO1xyXG4gIGxvZ28uYXBwZW5kKGxvZ29JbWcpO1xyXG4gIGxvZ29JbWcuYWx0ID0gJ2NvZmZlZSBob3VzZSBsb2dvJztcclxuICBsb2dvSW1nLnNyYyA9IGxvZ29JbWFnZTtcclxuICBjb25zdCBuYXYgPSBjcmVhdGVFbCgnbmF2JywgJ25hdicpO1xyXG4gIGNvbnN0IG5hdlVsID0gY3JlYXRlRWwoJ3VsJywgJ25hdi11bCcpO1xyXG4gIGxldCBuYXZJdGVtcyA9IFsnRmF2b3JpdGUgY29mZmVlJywgJ0Fib3V0JywgJ01vYmlsZSBhcHAnLCAnQ29udGFjdCB1cyddO1xyXG4gIG5hdkl0ZW1zID0gbmF2SXRlbXMubWFwKChpdGVtKSA9PiB7XHJcbiAgICBjb25zdCBuZXdJdGVtID0gY3JlYXRlRWwoJ2xpJywgJ25hdi1pdGVtJyk7XHJcbiAgICBuYXZVbC5hcHBlbmQobmV3SXRlbSk7XHJcbiAgICBjb25zdCBuZXdJdGVtTGluayA9IGNyZWF0ZUVsKCdhJywgJ25hdi1pdGVtLWxpbmsnLCBpdGVtKTtcclxuICAgIG5ld0l0ZW0uYXBwZW5kKG5ld0l0ZW1MaW5rKTtcclxuICAgIG5ld0l0ZW1MaW5rLmhyZWYgPSBgIyR7aXRlbS5yZXBsYWNlQWxsKCcgJywgJy0nKS50b0xvd2VyQ2FzZSgpfWA7XHJcbiAgICByZXR1cm4gbmV3SXRlbUxpbms7XHJcbiAgfSk7XHJcbiAgY29uc3QgbWVudUxpbmsgPSBjcmVhdGVFbCgnYScsICdtZW51LWxpbmsnKTtcclxuICBtZW51TGluay5ocmVmID0gJy4vbWVudS9pbmRleC5odG1sJztcclxuICBjb25zdCBtZW51TGlua1RleHQgPSBjcmVhdGVFbCgnc3BhbicsICdtZW51LWxpbmstdGV4dCcsICdNZW51Jyk7XHJcbiAgY29uc3QgbWVudUxpbmtJbWFnZSA9IGNyZWF0ZUVsKCdpbWcnLCAnbWVudS1saW5rLWltYWdlJyk7XHJcbiAgbWVudUxpbmtJbWFnZS5hbHQgPSAnY3VwIGljb24nO1xyXG4gIG1lbnVMaW5rSW1hZ2Uuc3JjID0gY3VwSW1hZ2U7XHJcblxyXG4gIGNvbnN0IGJ1cmdlckJ1dHRvbiA9IGNyZWF0ZUVsKCdidXR0b24nLCAnYnVyZ2VyLWJ1dHRvbicpO1xyXG4gIGJ1cmdlckJ1dHRvbi5hcHBlbmQoY3JlYXRlRWwoJ3NwYW4nKSwgY3JlYXRlRWwoJ3NwYW4nKSk7XHJcblxyXG4gIGhlYWRlci5hcHBlbmQoY29udGFpbmVyKTtcclxuICBjb250YWluZXIuYXBwZW5kKGxvZ28sIG5hdiwgbWVudUxpbmssIGJ1cmdlckJ1dHRvbik7XHJcbiAgbmF2LmFwcGVuZChuYXZVbCk7XHJcbiAgbWVudUxpbmsuYXBwZW5kKG1lbnVMaW5rVGV4dCwgbWVudUxpbmtJbWFnZSk7XHJcblxyXG4gIGNvbnN0IGxpbmtzRWwgPSBbbG9nbywgLi4ubmF2SXRlbXMsIG1lbnVMaW5rXTtcclxuXHJcbiAgLy8qIGZ1bmN0aW9uYWxpdHlcclxuXHJcbiAgbGV0IG9wZW5CdXJnZXJNZW51ID0gZmFsc2U7XHJcbiAgbGV0IHNpZGVCdXJnZXJNZW51ID0gZmFsc2U7XHJcblxyXG4gIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8PSA3NjgpIHtcclxuICAgIG1vdmVOYXZBc2lkZShuYXYsIG1lbnVMaW5rKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNsb3NlTmF2KGJ1dHRvbiwgbmF2TWVudSkge1xyXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgbmF2TWVudS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbm8tc2Nyb2xsJyk7XHJcbiAgICBvcGVuQnVyZ2VyTWVudSA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gb3Blbk5hdihidXR0b24sIG5hdk1lbnUpIHtcclxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIG5hdk1lbnUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ25vLXNjcm9sbCcpO1xyXG4gICAgb3BlbkJ1cmdlck1lbnUgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbW92ZU5hdkFzaWRlKG5hdiwgbWVudUxpbmspIHtcclxuICAgIG5hdi5hcHBlbmQobWVudUxpbmspO1xyXG4gICAgbmF2LmNsYXNzTGlzdC5hZGQoJ2FzaWRlJyk7XHJcbiAgICBzaWRlQnVyZ2VyTWVudSA9IHRydWU7XHJcbiAgfVxyXG5cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKGUpID0+IHtcclxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDc2OCkge1xyXG4gICAgICBpZiAob3BlbkJ1cmdlck1lbnUpIHtcclxuICAgICAgICBjbG9zZU5hdihidXJnZXJCdXR0b24sIG5hdik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHNpZGVCdXJnZXJNZW51KSB7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChsb2dvLCBuYXYsIG1lbnVMaW5rLCBidXJnZXJCdXR0b24pO1xyXG4gICAgICAgIG5hdi5jbGFzc0xpc3QucmVtb3ZlKCdhc2lkZScpO1xyXG4gICAgICAgIHNpZGVCdXJnZXJNZW51ID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICghc2lkZUJ1cmdlck1lbnUpIHtcclxuICAgICAgICBtb3ZlTmF2QXNpZGUobmF2LCBtZW51TGluayk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgYnVyZ2VyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgb3BlbkJ1cmdlck1lbnUgPyBjbG9zZU5hdihidXJnZXJCdXR0b24sIG5hdikgOiBvcGVuTmF2KGJ1cmdlckJ1dHRvbiwgbmF2KTtcclxuICB9KTtcclxuXHJcbiAgbmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGlmIChlLnRhcmdldCAhPT0gbmF2KSB7XHJcbiAgICAgIGNsb3NlTmF2KGJ1cmdlckJ1dHRvbiwgbmF2KTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgbGlua3NFbC5mb3JFYWNoKChsaW5rKSA9PiB7XHJcbiAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgY2xvc2VOYXYoYnVyZ2VyQnV0dG9uLCBuYXYpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBbaGVhZGVyLCBsaW5rc0VsXTtcclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVFbCB9IGZyb20gJy4uLy4uL3NoYXJlZC9jcmVhdGVFbCc7XHJcbmltcG9ydCAnLi9oZXJvLmNzcyc7XHJcbmltcG9ydCBjb2ZmZWVJbWcgZnJvbSAnLi4vaGVhZGVyL2Fzc2V0cy9jb2ZmZWUtY3VwLnN2Zyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSGVybygpIHtcclxuICBjb25zdCBoZXJvU2VjdGlvbiA9IGNyZWF0ZUVsKCdzZWN0aW9uJywgJ2hlcm8tc2VjdGlvbiBzZWN0aW9uJyk7XHJcbiAgY29uc3QgaGVyb0hlYWRpbmcgPSBjcmVhdGVFbCgnaDEnLCAnaGVyby1oZWFkaW5nJyk7XHJcbiAgaGVyb0hlYWRpbmcuYXBwZW5kKFxyXG4gICAgY3JlYXRlRWwoJ3NwYW4nLCAnY3Vyc2l2ZScsICdFbmpveScpLFxyXG4gICAgY3JlYXRlRWwoJ3NwYW4nLCBudWxsLCAnIHByZW1pdW0gY29mZmVlIGF0IG91ciBjaGFybWluZyBjYWZlJyksXHJcbiAgKTtcclxuICBjb25zdCBpbmZvID0gY3JlYXRlRWwoXHJcbiAgICAncCcsXHJcbiAgICAnaGVyby1pbmZvJyxcclxuICAgICdXaXRoIGl0cyBpbnZpdGluZyBhdG1vc3BoZXJlIGFuZCBkZWxpY2lvdXMgY29mZmVlIG9wdGlvbnMsIHRoZSBDb2ZmZWUgSG91c2UgUmVzb3VyY2UgaXMgYSBwb3B1bGFyIGRlc3RpbmF0aW9uIGZvciBjb2ZmZWUgbG92ZXJzIGFuZCB0aG9zZSBzZWVraW5nIGEgd2FybSBhbmQgaW52aXRpbmcgc3BhY2UgdG8gZW5qb3kgdGhlaXIgZmF2b3JpdGUgYmV2ZXJhZ2UuJyxcclxuICApO1xyXG4gIGNvbnN0IG1lbnVCdXR0b24gPSBjcmVhdGVFbCgnYScsICdtZW51LWJ1dHRvbicsICdNZW51Jyk7XHJcbiAgY29uc3QgY3VwSW1nID0gY3JlYXRlRWwoJ2ltZycsICdjb2ZmZWUtaW1nJyk7XHJcbiAgY3VwSW1nLnNyYyA9IGNvZmZlZUltZztcclxuICBjdXBJbWcuYWx0ID0gJ2NvZmZlZSBjdXAnO1xyXG4gIG1lbnVCdXR0b24uYXBwZW5kKGN1cEltZyk7XHJcbiAgbWVudUJ1dHRvbi5ocmVmID0gJy4vbWVudS9pbmRleC5odG1sJztcclxuICBoZXJvU2VjdGlvbi5hcHBlbmQoaGVyb0hlYWRpbmcsIGluZm8sIG1lbnVCdXR0b24pO1xyXG4gIHJldHVybiBoZXJvU2VjdGlvbjtcclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVFbCB9IGZyb20gJy4uLy4uL3NoYXJlZC9jcmVhdGVFbCc7XHJcbmltcG9ydCBwaG9uZUltYWdlU3JjIGZyb20gJy4vYXNzZXRzL21vYmlsZS1zY3JlZW5zLnBuZyc7XHJcbmltcG9ydCBwbGF5TUltYWdlIGZyb20gJy4vYXNzZXRzL3BsYXktbWFya2V0LWljb24uc3ZnJztcclxuaW1wb3J0IGFwcFN0b3JlSW1hZ2VTcmMgZnJvbSAnLi9hc3NldHMvYXBwLXN0b3JlLWljb24uc3ZnJztcclxuaW1wb3J0ICcuL21vYmlsZS5jc3MnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1vYmlsZSgpIHtcclxuICBjb25zdCBzZWN0aW9uID0gY3JlYXRlRWwoJ3NlY3Rpb24nLCAnbW9iaWxlLXNlY3Rpb24gc2VjdGlvbicpO1xyXG4gIHNlY3Rpb24uaWQgPSAnbW9iaWxlLWFwcCdcclxuICBjb25zdCBpbmZvQ29udGFpbmVyID0gY3JlYXRlRWwoJ2RpdicsICdpbmZvLWNvbnRhaW5lcicpO1xyXG4gIGNvbnN0IGhlYWRpbmcgPSBjcmVhdGVFbCgnaDInLCAnbW9iaWxlLWhlYWRpbmcgaGVhZGluZycpO1xyXG4gIGhlYWRpbmcuYXBwZW5kKGNyZWF0ZUVsKCdzcGFuJywgJ2N1cnNpdmUnLCAnRG93bmxvYWQnKSwgJyBvdXIgYXBwcyB0byBzdGFydCBvcmRlcmluZycpO1xyXG4gIGNvbnN0IG1vYmlsZUluZm8gPSBjcmVhdGVFbChcclxuICAgICdwJyxcclxuICAgICdtb2JpbGUtaW5mbycsXHJcbiAgICAnRG93bmxvYWQgdGhlIFJlc291cmNlIGFwcCB0b2RheSBhbmQgZXhwZXJpZW5jZSB0aGUgY29tZm9ydCBvZiBvcmRlcmluZyB5b3VyIGZhdm9yaXRlIGNvZmZlZSBmcm9tIHdoZXJldmVyIHlvdSBhcmUnLFxyXG4gICk7XHJcbiAgY29uc3QgYnV0dG9uc1dyYXBwZXIgPSBjcmVhdGVFbCgnZGl2JywgJ2J1dHRvbi13cmFwcGVyJyk7XHJcbiAgY29uc3QgYnV0dG9uQXBwU3RvcmUgPSBjcmVhdGVFbCgnYScsICdidXR0b24tYXBwJyk7XHJcbiAgYnV0dG9uQXBwU3RvcmUuaHJlZiA9ICcjJ1xyXG4gIGNvbnN0IGFwcFN0b3JlSWNvbiA9IGNyZWF0ZUVsKCdpbWcnLCAnYXBwLWljb24nKTtcclxuICBhcHBTdG9yZUljb24uYWx0ID0gJ2FwcCBzdG9yZSBpY29uJztcclxuICBhcHBTdG9yZUljb24uc3JjID0gYXBwU3RvcmVJbWFnZVNyYztcclxuICBjb25zdCBidXR0b25QbGF5TWFya2V0ID0gY3JlYXRlRWwoJ2EnLCAnYnV0dG9uLWFwcCcpO1xyXG4gIGJ1dHRvblBsYXlNYXJrZXQuaHJlZiA9ICcjJ1xyXG4gIGNvbnN0IHBsYXlNYXJrZXRJY29uID0gY3JlYXRlRWwoJ2ltZycsICdhcHAtaWNvbicpO1xyXG4gIHBsYXlNYXJrZXRJY29uLmFsdCA9ICdwbGF5IG1hcmtldCBpY29uJztcclxuICBwbGF5TWFya2V0SWNvbi5zcmMgPSBwbGF5TUltYWdlO1xyXG4gIGNvbnN0IHBsYXlNYXJrZXRTcGFuID0gY3JlYXRlRWwoJ2RpdicsICdidXR0b24taW5mbycpO1xyXG4gIHBsYXlNYXJrZXRTcGFuLmFwcGVuZChjcmVhdGVFbCgncCcsICdhdmFpbGFibGUnLCAnQXZhaWxhYmxlIG9uJyksIGNyZWF0ZUVsKCdwJywgJ2FwcC1uYW1lJywgJ0dvb2dsZSBQbGF5JykpO1xyXG4gIGNvbnN0IGFwcFN0b3JlU3BhbiA9IGNyZWF0ZUVsKCdkaXYnLCAnYnV0dG9uLWluZm8nKTtcclxuICBhcHBTdG9yZVNwYW4uYXBwZW5kKGNyZWF0ZUVsKCdwJywgJ2F2YWlsYWJsZScsICdBdmFpbGFibGUgb24gdGhlJyksIGNyZWF0ZUVsKCdwJywgJ2FwcC1uYW1lJywgJ0FwcCBTdG9yZScpKTtcclxuXHJcbiAgYnV0dG9uQXBwU3RvcmUuYXBwZW5kKGFwcFN0b3JlSWNvbiwgYXBwU3RvcmVTcGFuKTtcclxuICBidXR0b25QbGF5TWFya2V0LmFwcGVuZChwbGF5TWFya2V0SWNvbiwgcGxheU1hcmtldFNwYW4pO1xyXG4gIGJ1dHRvbnNXcmFwcGVyLmFwcGVuZChidXR0b25BcHBTdG9yZSwgYnV0dG9uUGxheU1hcmtldCk7XHJcbiAgaW5mb0NvbnRhaW5lci5hcHBlbmQoaGVhZGluZywgbW9iaWxlSW5mbywgYnV0dG9uc1dyYXBwZXIpO1xyXG4gIGNvbnN0IGltZ1dyYXBwZXIgPSBjcmVhdGVFbCgnZGl2JywgJ2ltZy13cmFwcGVyJyk7XHJcbiAgY29uc3QgcGhvbmVJbWFnZSA9IGNyZWF0ZUVsKCdpbWcnLCAncGhvbmUtaW1nJyk7XHJcbiAgcGhvbmVJbWFnZS5hbHQgPSAncGhvdG8gb2YgdGhlIHBob25lJztcclxuICBwaG9uZUltYWdlLnNyYyA9IHBob25lSW1hZ2VTcmM7XHJcblxyXG4gIGltZ1dyYXBwZXIuYXBwZW5kKHBob25lSW1hZ2UpO1xyXG4gIHNlY3Rpb24uYXBwZW5kKGluZm9Db250YWluZXIsIGltZ1dyYXBwZXIpO1xyXG4gIHJldHVybiBzZWN0aW9uO1xyXG59XHJcbiIsImltcG9ydCB7IGNyZWF0ZUVsIH0gZnJvbSAnLi4vc2hhcmVkL2NyZWF0ZUVsJztcclxuaW1wb3J0IHsgY3JlYXRlQWJvdXQgfSBmcm9tICcuLi93aWRnZXRzL2Fib3V0L2NyZWF0ZS1hYm91dCc7XHJcbmltcG9ydCB7IGNyZWF0ZUZhdm9yaXRlIH0gZnJvbSAnLi4vd2lkZ2V0cy9mYXZvcml0ZS9jcmVhdGUtZmF2b3JpdGUnO1xyXG5pbXBvcnQgeyBjcmVhdGVGb290ZXIgfSBmcm9tICcuLi93aWRnZXRzL2Zvb3Rlci9jcmVhdGUtZm9vdGVyJztcclxuaW1wb3J0IHsgY3JlYXRlSGVhZGVyIH0gZnJvbSAnLi4vd2lkZ2V0cy9oZWFkZXIvY3JlYXRlLWhlYWRlcic7XHJcbmltcG9ydCB7IGNyZWF0ZUhlcm8gfSBmcm9tICcuLi93aWRnZXRzL2hlcm8vY3JlYXRlLWhlcm8nO1xyXG5pbXBvcnQgeyBjcmVhdGVNb2JpbGUgfSBmcm9tICcuLi93aWRnZXRzL21vYmlsZS1hcHAvY3JlYXRlLW1vYmlsZSc7XHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuY29uc3QgY29udGFpbmVyID0gY3JlYXRlRWwoJ2RpdicsICdwYWdlLWNvbnRhaW5lcicpO1xyXG5jb25zdCBtYWluID0gY3JlYXRlRWwoJ21haW4nLCAnbWFpbicpO1xyXG5jb25zdCBbaGVhZGVyLCBsaW5rc10gPSBjcmVhdGVIZWFkZXIoKTtcclxuZG9jdW1lbnQuYm9keS5hcHBlbmQoY29udGFpbmVyKTtcclxubWFpbi5hcHBlbmQoY3JlYXRlSGVybygpLCBjcmVhdGVGYXZvcml0ZSgpLCBjcmVhdGVBYm91dCgpLCBjcmVhdGVNb2JpbGUoKSk7XHJcbmNvbnRhaW5lci5hcHBlbmQoaGVhZGVyLCBtYWluLCBjcmVhdGVGb290ZXIoKSk7XHJcblxyXG5saW5rc1swXS5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpO1xyXG5saW5rc1swXS5ocmVmID0gJyMnO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=