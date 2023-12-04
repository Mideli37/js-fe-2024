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
;// CONCATENATED MODULE: ./src/widgets/favorite/create-favorite.js




function createFavorite() {
  const favSection = createEl('section', 'favorite-section section');
  favSection.id = 'favorite-coffee'
  const favHeading = createEl('h2', 'favorite-heading heading');
  favHeading.append('Choose your ', createEl('span', 'cursive', 'favorite'), ' coffee');
  const sliderWrapper = createEl('div', 'slider-wrapper');
  const leftControll = createEl('button', 'slider-left-button slider-button', '🡠');
  const sliderContainer = createEl('div', 'slider-container');
  const rightControll = createEl('button', 'slider-right-button slider-button', '🡢');
  const sliderContent = createEl('div', 'slider-content');
  const sliderIndicatorWrapper = createEl('div', 'indicator-wrapper');
  let controls = new Array(3).fill(null);
  controls = controls.map(() => {
    const newControl = createEl('div', 'control');
    sliderIndicatorWrapper.append(newControl);
    return newControl;
  });
  controls[0].classList.add('active');

  const drinkCard = createEl('div', 'drink-card');
  const drinkCardImg = createEl('img', 'drink-card-img');
  drinkCardImg.alt = 'frappucino';
  drinkCardImg.src = coffee_slider_1_namespaceObject;
  drinkCardImg.height = '480';
  const drinkName = createEl('h3', 'drink-name', 'S’mores Frappuccino');
  const drinkInfo = createEl(
    'p',
    'drink-info',
    'This new drink takes an espresso and mixes it with brown sugar and cinnamon before being topped with oat milk.',
  );
  const drinkPrice = createEl('span', 'drink-price', '$5.50');
  drinkCard.append(drinkCardImg, drinkName, drinkInfo, drinkPrice);

  favSection.append(favHeading, sliderWrapper, sliderIndicatorWrapper);
  sliderWrapper.append(leftControll, sliderContainer, rightControll);
  sliderContainer.append(sliderContent);
  sliderContent.append(drinkCard);
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
const [header, links] = createHeader()
document.body.append(container);
main.append(createHero(), createFavorite(), createAbout(), createMobile());
container.append(header, main, createFooter());

links[0].classList.add('disabled')

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDeEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taWRlbGkzNy1qc2ZlMjAyM3E0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21pZGVsaTM3LWpzZmUyMDIzcTQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9taWRlbGkzNy1qc2ZlMjAyM3E0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL21pZGVsaTM3LWpzZmUyMDIzcTQvLi9zcmMvc2hhcmVkL2NyZWF0ZUVsLmpzIiwid2VicGFjazovL21pZGVsaTM3LWpzZmUyMDIzcTQvLi9zcmMvd2lkZ2V0cy9hYm91dC9jcmVhdGUtYWJvdXQuanMiLCJ3ZWJwYWNrOi8vbWlkZWxpMzctanNmZTIwMjNxNC8uL3NyYy93aWRnZXRzL2Zhdm9yaXRlL2NyZWF0ZS1mYXZvcml0ZS5qcyIsIndlYnBhY2s6Ly9taWRlbGkzNy1qc2ZlMjAyM3E0Ly4vc3JjL3dpZGdldHMvZm9vdGVyL2NyZWF0ZS1mb290ZXIuanMiLCJ3ZWJwYWNrOi8vbWlkZWxpMzctanNmZTIwMjNxNC8uL3NyYy93aWRnZXRzL2hlYWRlci9jcmVhdGUtaGVhZGVyLmpzIiwid2VicGFjazovL21pZGVsaTM3LWpzZmUyMDIzcTQvLi9zcmMvd2lkZ2V0cy9oZXJvL2NyZWF0ZS1oZXJvLmpzIiwid2VicGFjazovL21pZGVsaTM3LWpzZmUyMDIzcTQvLi9zcmMvd2lkZ2V0cy9tb2JpbGUtYXBwL2NyZWF0ZS1tb2JpbGUuanMiLCJ3ZWJwYWNrOi8vbWlkZWxpMzctanNmZTIwMjNxNC8uL3NyYy9wYWdlcy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbCh0YWcsIGNsYXNzTmFtZSwgdGV4dCkge1xyXG4gIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xyXG4gIGlmIChjbGFzc05hbWUpIHtcclxuICAgIGVsLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcclxuICB9XHJcbiAgaWYgKHRleHQpIHtcclxuICAgIGVsLmFwcGVuZCh0ZXh0KTtcclxuICB9XHJcbiAgcmV0dXJuIGVsO1xyXG59IiwiaW1wb3J0IHsgY3JlYXRlRWwgfSBmcm9tICcuLi8uLi9zaGFyZWQvY3JlYXRlRWwnO1xyXG5pbXBvcnQgJy4vYWJvdXQuY3NzJztcclxuaW1wb3J0IGFiMSBmcm9tICcuL2Fzc2V0cy9hYm91dC0xLmpwZyc7XHJcbmltcG9ydCBhYjIgZnJvbSAnLi9hc3NldHMvYWJvdXQtMi5qcGcnO1xyXG5pbXBvcnQgYWIzIGZyb20gJy4vYXNzZXRzL2Fib3V0LTMuanBnJztcclxuaW1wb3J0IGFiNCBmcm9tICcuL2Fzc2V0cy9hYm91dC00LmpwZyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQWJvdXQoKSB7XHJcbiAgY29uc3Qgc2VjdGlvbiA9IGNyZWF0ZUVsKCdzZWN0aW9uJywgJ2Fib3V0LXNlY3Rpb24gc2VjdGlvbicpO1xyXG4gIHNlY3Rpb24uaWQgPSAnYWJvdXQnXHJcbiAgY29uc3QgaGVhZGluZyA9IGNyZWF0ZUVsKCdoMicsICdhYm91dC1oZWFkaW5nIGhlYWRpbmcnKTtcclxuICBoZWFkaW5nLmFwcGVuZChcclxuICAgICdSZXNvdXJjZSBpcyAnLFxyXG4gICAgY3JlYXRlRWwoJ3NwYW4nLCAnY3Vyc2l2ZScsICd0aGUgcGVyZmVjdCBhbmQgY296eSBwbGFjZScpLFxyXG4gICAgJyB3aGVyZSB5b3UgY2FuIGVuam95IGEgdmFyaWV0eSBvZiBob3QgYmV2ZXJhZ2VzLCByZWxheCwgY2F0Y2ggdXAgd2l0aCBmcmllbmRzLCBvciBnZXQgc29tZSB3b3JrIGRvbmUuJyxcclxuICApO1xyXG4gIGNvbnN0IGltYWdlQ29udGFpbmVyID0gY3JlYXRlRWwoJ2RpdicsICdpbWFnZS1jb250YWluZXInKTtcclxuICBsZXQgaW1ncyA9IFthYjEsIGFiMiwgYWIzLCBhYjRdO1xyXG4gIGltZ3MgPSBpbWdzLm1hcCgoc3JjKSA9PiB7XHJcbiAgICBjb25zdCB3cmFwcGVyID0gY3JlYXRlRWwoJ2RpdicsICdpbWctd3JhcHBlcicpO1xyXG4gICAgaW1hZ2VDb250YWluZXIuYXBwZW5kKHdyYXBwZXIpO1xyXG4gICAgY29uc3QgaW1nID0gY3JlYXRlRWwoJ2ltZycsICdpbWFnZScpO1xyXG4gICAgaW1nLmFsdCA9ICdwaG90byBpbiBjb3p5IGNhZmUnO1xyXG4gICAgaW1nLnNyYyA9IHNyYztcclxuICAgIHdyYXBwZXIuYXBwZW5kKGltZyk7XHJcbiAgICByZXR1cm4gd3JhcHBlcjtcclxuICB9KTtcclxuXHJcbiAgc2VjdGlvbi5hcHBlbmQoaGVhZGluZywgaW1hZ2VDb250YWluZXIpO1xyXG5cclxuICByZXR1cm4gc2VjdGlvbjtcclxufVxyXG4iLCJpbXBvcnQgJy4vZmF2b3JpdGUuY3NzJztcclxuaW1wb3J0IHsgY3JlYXRlRWwgfSBmcm9tICcuLi8uLi9zaGFyZWQvY3JlYXRlRWwnO1xyXG5pbXBvcnQgZnJhcHB1Y2lub0ltYWdlIGZyb20gJy4vYXNzZXRzL2NvZmZlZS1zbGlkZXItMS5wbmcnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZhdm9yaXRlKCkge1xyXG4gIGNvbnN0IGZhdlNlY3Rpb24gPSBjcmVhdGVFbCgnc2VjdGlvbicsICdmYXZvcml0ZS1zZWN0aW9uIHNlY3Rpb24nKTtcclxuICBmYXZTZWN0aW9uLmlkID0gJ2Zhdm9yaXRlLWNvZmZlZSdcclxuICBjb25zdCBmYXZIZWFkaW5nID0gY3JlYXRlRWwoJ2gyJywgJ2Zhdm9yaXRlLWhlYWRpbmcgaGVhZGluZycpO1xyXG4gIGZhdkhlYWRpbmcuYXBwZW5kKCdDaG9vc2UgeW91ciAnLCBjcmVhdGVFbCgnc3BhbicsICdjdXJzaXZlJywgJ2Zhdm9yaXRlJyksICcgY29mZmVlJyk7XHJcbiAgY29uc3Qgc2xpZGVyV3JhcHBlciA9IGNyZWF0ZUVsKCdkaXYnLCAnc2xpZGVyLXdyYXBwZXInKTtcclxuICBjb25zdCBsZWZ0Q29udHJvbGwgPSBjcmVhdGVFbCgnYnV0dG9uJywgJ3NsaWRlci1sZWZ0LWJ1dHRvbiBzbGlkZXItYnV0dG9uJywgJ/CfoaAnKTtcclxuICBjb25zdCBzbGlkZXJDb250YWluZXIgPSBjcmVhdGVFbCgnZGl2JywgJ3NsaWRlci1jb250YWluZXInKTtcclxuICBjb25zdCByaWdodENvbnRyb2xsID0gY3JlYXRlRWwoJ2J1dHRvbicsICdzbGlkZXItcmlnaHQtYnV0dG9uIHNsaWRlci1idXR0b24nLCAn8J+hoicpO1xyXG4gIGNvbnN0IHNsaWRlckNvbnRlbnQgPSBjcmVhdGVFbCgnZGl2JywgJ3NsaWRlci1jb250ZW50Jyk7XHJcbiAgY29uc3Qgc2xpZGVySW5kaWNhdG9yV3JhcHBlciA9IGNyZWF0ZUVsKCdkaXYnLCAnaW5kaWNhdG9yLXdyYXBwZXInKTtcclxuICBsZXQgY29udHJvbHMgPSBuZXcgQXJyYXkoMykuZmlsbChudWxsKTtcclxuICBjb250cm9scyA9IGNvbnRyb2xzLm1hcCgoKSA9PiB7XHJcbiAgICBjb25zdCBuZXdDb250cm9sID0gY3JlYXRlRWwoJ2RpdicsICdjb250cm9sJyk7XHJcbiAgICBzbGlkZXJJbmRpY2F0b3JXcmFwcGVyLmFwcGVuZChuZXdDb250cm9sKTtcclxuICAgIHJldHVybiBuZXdDb250cm9sO1xyXG4gIH0pO1xyXG4gIGNvbnRyb2xzWzBdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cclxuICBjb25zdCBkcmlua0NhcmQgPSBjcmVhdGVFbCgnZGl2JywgJ2RyaW5rLWNhcmQnKTtcclxuICBjb25zdCBkcmlua0NhcmRJbWcgPSBjcmVhdGVFbCgnaW1nJywgJ2RyaW5rLWNhcmQtaW1nJyk7XHJcbiAgZHJpbmtDYXJkSW1nLmFsdCA9ICdmcmFwcHVjaW5vJztcclxuICBkcmlua0NhcmRJbWcuc3JjID0gZnJhcHB1Y2lub0ltYWdlO1xyXG4gIGRyaW5rQ2FyZEltZy5oZWlnaHQgPSAnNDgwJztcclxuICBjb25zdCBkcmlua05hbWUgPSBjcmVhdGVFbCgnaDMnLCAnZHJpbmstbmFtZScsICdT4oCZbW9yZXMgRnJhcHB1Y2Npbm8nKTtcclxuICBjb25zdCBkcmlua0luZm8gPSBjcmVhdGVFbChcclxuICAgICdwJyxcclxuICAgICdkcmluay1pbmZvJyxcclxuICAgICdUaGlzIG5ldyBkcmluayB0YWtlcyBhbiBlc3ByZXNzbyBhbmQgbWl4ZXMgaXQgd2l0aCBicm93biBzdWdhciBhbmQgY2lubmFtb24gYmVmb3JlIGJlaW5nIHRvcHBlZCB3aXRoIG9hdCBtaWxrLicsXHJcbiAgKTtcclxuICBjb25zdCBkcmlua1ByaWNlID0gY3JlYXRlRWwoJ3NwYW4nLCAnZHJpbmstcHJpY2UnLCAnJDUuNTAnKTtcclxuICBkcmlua0NhcmQuYXBwZW5kKGRyaW5rQ2FyZEltZywgZHJpbmtOYW1lLCBkcmlua0luZm8sIGRyaW5rUHJpY2UpO1xyXG5cclxuICBmYXZTZWN0aW9uLmFwcGVuZChmYXZIZWFkaW5nLCBzbGlkZXJXcmFwcGVyLCBzbGlkZXJJbmRpY2F0b3JXcmFwcGVyKTtcclxuICBzbGlkZXJXcmFwcGVyLmFwcGVuZChsZWZ0Q29udHJvbGwsIHNsaWRlckNvbnRhaW5lciwgcmlnaHRDb250cm9sbCk7XHJcbiAgc2xpZGVyQ29udGFpbmVyLmFwcGVuZChzbGlkZXJDb250ZW50KTtcclxuICBzbGlkZXJDb250ZW50LmFwcGVuZChkcmlua0NhcmQpO1xyXG4gIHJldHVybiBmYXZTZWN0aW9uO1xyXG59XHJcbiIsImltcG9ydCB7IGNyZWF0ZUVsIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2NyZWF0ZUVsJztcclxuaW1wb3J0IHR3aXRTcmMgZnJvbSAnLi9hc3NldHMvdHdpdHRlci5zdmcnO1xyXG5pbXBvcnQgaW5zdGFTcmMgZnJvbSAnLi9hc3NldHMvaW5zdGFncmFtLnN2Zyc7XHJcbmltcG9ydCBmYlNyYyBmcm9tICcuL2Fzc2V0cy9mYWNlYm9vay5zdmcnO1xyXG5pbXBvcnQgcGluIGZyb20gJy4vYXNzZXRzL3Bpbi1hbHQuc3ZnJztcclxuaW1wb3J0IHBob25lIGZyb20gJy4vYXNzZXRzL3Bob25lLnN2Zyc7XHJcbmltcG9ydCBjbG9jayBmcm9tICcuL2Fzc2V0cy9jbG9jay5zdmcnO1xyXG5pbXBvcnQgJy4vZm9vdGVyLmNzcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xyXG4gIGNvbnN0IGZvb3RlciA9IGNyZWF0ZUVsKCdmb290ZXInLCAnZm9vdGVyJyk7XHJcbiAgZm9vdGVyLmlkID0gJ2NvbnRhY3QtdXMnO1xyXG4gIGNvbnN0IHNvY2lhbCA9IGNyZWF0ZUVsKCdkaXYnLCAnc29jaWFsLWNvbnRhaW5lcicpO1xyXG4gIGNvbnN0IGhlYWRpbmcgPSBjcmVhdGVFbCgnaDInLCAnZm9vdGVyLWhlYWRpbmcnKTtcclxuICBoZWFkaW5nLmFwcGVuZCgnU2lwLCBTYXZvciwgU21pbGUuICcsIGNyZWF0ZUVsKCdzcGFuJywgJ2N1cnNpdmUnLCAnSXTigJlzIGNvZmZlZSB0aW1lIScpKTtcclxuICBjb25zdCBzb2NpYWxXcmFwcGVyID0gY3JlYXRlRWwoJ2RpdicsICdzb2NpYWwtd3JhcHBlcicpO1xyXG5cclxuICBjb25zdCB0d2l0dGVyTGluayA9IGNyZWF0ZUVsKCdhJywgJ3NvY2lhbC1saW5rJyk7XHJcbiAgdHdpdHRlckxpbmsuaHJlZiA9ICdodHRwczovL3R3aXR0ZXIuY29tLz9sYW5nPWVuJztcclxuICBjb25zdCB0d2l0dGVySWNvbiA9IGNyZWF0ZUVsKCdpbWcnLCAnc29jaWFsLWljb24nKTtcclxuICB0d2l0dGVySWNvbi5hbHQgPSAndHdpdHRlciBpY29uJztcclxuICB0d2l0dGVySWNvbi5zcmMgPSB0d2l0U3JjO1xyXG4gIHR3aXR0ZXJMaW5rLmFwcGVuZCh0d2l0dGVySWNvbik7XHJcblxyXG4gIGNvbnN0IGluc3RhTGluayA9IGNyZWF0ZUVsKCdhJywgJ3NvY2lhbC1saW5rJyk7XHJcbiAgaW5zdGFMaW5rLmhyZWYgPSAnaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS8nO1xyXG4gIGNvbnN0IGluc3RhSWNvbiA9IGNyZWF0ZUVsKCdpbWcnLCAnc29jaWFsLWljb24nKTtcclxuICBpbnN0YUljb24uYWx0ID0gJ2luc3RhIGljb24nO1xyXG4gIGluc3RhSWNvbi5zcmMgPSBpbnN0YVNyYztcclxuICBpbnN0YUxpbmsuYXBwZW5kKGluc3RhSWNvbik7XHJcblxyXG4gIGNvbnN0IGZiTGluayA9IGNyZWF0ZUVsKCdhJywgJ3NvY2lhbC1saW5rJyk7XHJcbiAgZmJMaW5rLmhyZWYgPSAnaHR0cHM6Ly91ay11YS5mYWNlYm9vay5jb20vJztcclxuICBjb25zdCBmYkljb24gPSBjcmVhdGVFbCgnaW1nJywgJ3NvY2lhbC1pY29uJyk7XHJcbiAgZmJJY29uLmFsdCA9ICdmYiBpY29uJztcclxuICBmYkljb24uc3JjID0gZmJTcmM7XHJcbiAgZmJMaW5rLmFwcGVuZChmYkljb24pO1xyXG5cclxuICBzb2NpYWxXcmFwcGVyLmFwcGVuZCh0d2l0dGVyTGluaywgaW5zdGFMaW5rLCBmYkxpbmspO1xyXG4gIHNvY2lhbC5hcHBlbmQoaGVhZGluZywgc29jaWFsV3JhcHBlcik7XHJcblxyXG4gIGNvbnN0IGNvbnRhY3RzID0gY3JlYXRlRWwoJ2RpdicsICdjb250YWN0cy13cmFwcGVyJyk7XHJcbiAgY29uc3QgY29udGFjdHNIZWFkaW5nID0gY3JlYXRlRWwoJ2gzJywgJ2NvbnRhY3RzLWhlYWRpbmcnLCAnQ29udGFjdCB1cycpO1xyXG4gIGNvbnN0IGNvbnRhY3RzTGlzdCA9IGNyZWF0ZUVsKCd1bCcsICdjb250YWN0cy1saXN0Jyk7XHJcblxyXG4gIGZ1bmN0aW9uIGNyZWF0ZUxJKGljb24sIHRleHQsIGxpbmspIHtcclxuICAgIGNvbnN0IGxpID0gY3JlYXRlRWwoJ2xpJywgJ2NvbnRhY3QtaXRlbScpO1xyXG4gICAgY29uc3QgbGlJY29uID0gY3JlYXRlRWwoJ2ltZycsICdjb250YWN0LWljb24nKTtcclxuICAgIGxpSWNvbi5hbHQgPSAnbWFya2VyJztcclxuICAgIGxpSWNvbi5zcmMgPSBpY29uO1xyXG4gICAgaWYgKGxpbmspIHtcclxuICAgICAgY29uc3QgbGlMaW5rID0gY3JlYXRlRWwoJ2EnLCAnY29udGFjdC1saW5rJyk7XHJcbiAgICAgIGxpTGluay5ocmVmID0gbGluaztcclxuICAgICAgbGlMaW5rLnRhcmdldCA9ICdibGFuayc7XHJcblxyXG4gICAgICBsaS5hcHBlbmQobGlMaW5rKTtcclxuICAgICAgbGlMaW5rLmFwcGVuZChsaUljb24sIHRleHQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGkuYXBwZW5kKGxpSWNvbiwgdGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29udGFjdHNMaXN0LmFwcGVuZChsaSk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVMSShwaW4sICc4NTU4IEdyZWVuIFJkLiwgTEEnLCAnaHR0cHM6Ly9tYXBzLmFwcC5nb28uZ2wvMjJwMmJOaU5nUzZYRXJMUTknKTtcclxuICBjcmVhdGVMSShwaG9uZSwgJysxICg2MDMpIDU1NS0wMTIzJywgJ3RlbDorMSg2MDMpNTU1LTAxMjMnKTtcclxuICBjcmVhdGVMSShjbG9jaywgJ01vbi1TYXQ6IDk6MDAgQU0g4oCTIDIzOjAwIFBNJyk7XHJcblxyXG4gIGNvbnRhY3RzLmFwcGVuZChjb250YWN0c0hlYWRpbmcsIGNvbnRhY3RzTGlzdCk7XHJcblxyXG4gIGZvb3Rlci5hcHBlbmQoc29jaWFsLCBjb250YWN0cyk7XHJcbiAgcmV0dXJuIGZvb3RlcjtcclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVFbCB9IGZyb20gJy4uLy4uL3NoYXJlZC9jcmVhdGVFbCc7XHJcbmltcG9ydCBsb2dvSW1hZ2UgZnJvbSAnLi9hc3NldHMvbG9nby5zdmcnO1xyXG5pbXBvcnQgY3VwSW1hZ2UgZnJvbSAnLi9hc3NldHMvY29mZmVlLWN1cC5zdmcnO1xyXG5pbXBvcnQgJy4vaGVhZGVyLmNzcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xyXG4gIGNvbnN0IGhlYWRlciA9IGNyZWF0ZUVsKCdoZWFkZXInLCAnaGVhZGVyJyk7XHJcbiAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRWwoJ2RpdicsICdoZWFkZXItY29udGFpbmVyJyk7XHJcbiAgY29uc3QgbG9nbyA9IGNyZWF0ZUVsKCdhJywgJ2hlYWRlci1sb2dvJyk7XHJcbiAgbG9nby5ocmVmID0gJy4uL2luZGV4Lmh0bWwnO1xyXG4gIGNvbnN0IGxvZ29JbWcgPSBjcmVhdGVFbCgnaW1nJyk7XHJcbiAgbG9nby5hcHBlbmQobG9nb0ltZyk7XHJcbiAgbG9nb0ltZy5hbHQgPSAnY29mZmVlIGhvdXNlIGxvZ28nO1xyXG4gIGxvZ29JbWcuc3JjID0gbG9nb0ltYWdlO1xyXG4gIGNvbnN0IG5hdiA9IGNyZWF0ZUVsKCduYXYnLCAnbmF2Jyk7XHJcbiAgY29uc3QgbmF2VWwgPSBjcmVhdGVFbCgndWwnLCAnbmF2LXVsJyk7XHJcbiAgbGV0IG5hdkl0ZW1zID0gWydGYXZvcml0ZSBjb2ZmZWUnLCAnQWJvdXQnLCAnTW9iaWxlIGFwcCcsICdDb250YWN0IHVzJ107XHJcbiAgbmF2SXRlbXMgPSBuYXZJdGVtcy5tYXAoKGl0ZW0pID0+IHtcclxuICAgIGNvbnN0IG5ld0l0ZW0gPSBjcmVhdGVFbCgnbGknLCAnbmF2LWl0ZW0nKTtcclxuICAgIG5hdlVsLmFwcGVuZChuZXdJdGVtKTtcclxuICAgIGNvbnN0IG5ld0l0ZW1MaW5rID0gY3JlYXRlRWwoJ2EnLCAnbmF2LWl0ZW0tbGluaycsIGl0ZW0pO1xyXG4gICAgbmV3SXRlbS5hcHBlbmQobmV3SXRlbUxpbmspO1xyXG4gICAgbmV3SXRlbUxpbmsuaHJlZiA9IGAjJHtpdGVtLnJlcGxhY2VBbGwoJyAnLCAnLScpLnRvTG93ZXJDYXNlKCl9YDtcclxuICAgIHJldHVybiBuZXdJdGVtTGluaztcclxuICB9KTtcclxuICBjb25zdCBtZW51TGluayA9IGNyZWF0ZUVsKCdhJywgJ21lbnUtbGluaycpO1xyXG4gIG1lbnVMaW5rLmhyZWYgPSAnLi9tZW51L2luZGV4Lmh0bWwnO1xyXG4gIGNvbnN0IG1lbnVMaW5rVGV4dCA9IGNyZWF0ZUVsKCdzcGFuJywgJ21lbnUtbGluay10ZXh0JywgJ01lbnUnKTtcclxuICBjb25zdCBtZW51TGlua0ltYWdlID0gY3JlYXRlRWwoJ2ltZycsICdtZW51LWxpbmstaW1hZ2UnKTtcclxuICBtZW51TGlua0ltYWdlLmFsdCA9ICdjdXAgaWNvbic7XHJcbiAgbWVudUxpbmtJbWFnZS5zcmMgPSBjdXBJbWFnZTtcclxuXHJcbiAgY29uc3QgYnVyZ2VyQnV0dG9uID0gY3JlYXRlRWwoJ2J1dHRvbicsICdidXJnZXItYnV0dG9uJyk7XHJcbiAgYnVyZ2VyQnV0dG9uLmFwcGVuZChjcmVhdGVFbCgnc3BhbicpLCBjcmVhdGVFbCgnc3BhbicpKTtcclxuXHJcbiAgaGVhZGVyLmFwcGVuZChjb250YWluZXIpO1xyXG4gIGNvbnRhaW5lci5hcHBlbmQobG9nbywgbmF2LCBtZW51TGluaywgYnVyZ2VyQnV0dG9uKTtcclxuICBuYXYuYXBwZW5kKG5hdlVsKTtcclxuICBtZW51TGluay5hcHBlbmQobWVudUxpbmtUZXh0LCBtZW51TGlua0ltYWdlKTtcclxuXHJcbiAgY29uc3QgbGlua3NFbCA9IFtsb2dvLCAuLi5uYXZJdGVtcywgbWVudUxpbmtdO1xyXG4gIHJldHVybiBbaGVhZGVyLCBsaW5rc0VsXTtcclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVFbCB9IGZyb20gJy4uLy4uL3NoYXJlZC9jcmVhdGVFbCc7XHJcbmltcG9ydCAnLi9oZXJvLmNzcyc7XHJcbmltcG9ydCBjb2ZmZWVJbWcgZnJvbSAnLi4vaGVhZGVyL2Fzc2V0cy9jb2ZmZWUtY3VwLnN2Zyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSGVybygpIHtcclxuICBjb25zdCBoZXJvU2VjdGlvbiA9IGNyZWF0ZUVsKCdzZWN0aW9uJywgJ2hlcm8tc2VjdGlvbiBzZWN0aW9uJyk7XHJcbiAgY29uc3QgaGVyb0hlYWRpbmcgPSBjcmVhdGVFbCgnaDEnLCAnaGVyby1oZWFkaW5nJyk7XHJcbiAgaGVyb0hlYWRpbmcuYXBwZW5kKFxyXG4gICAgY3JlYXRlRWwoJ3NwYW4nLCAnY3Vyc2l2ZScsICdFbmpveScpLFxyXG4gICAgY3JlYXRlRWwoJ3NwYW4nLCBudWxsLCAnIHByZW1pdW0gY29mZmVlIGF0IG91ciBjaGFybWluZyBjYWZlJyksXHJcbiAgKTtcclxuICBjb25zdCBpbmZvID0gY3JlYXRlRWwoXHJcbiAgICAncCcsXHJcbiAgICAnaGVyby1pbmZvJyxcclxuICAgICdXaXRoIGl0cyBpbnZpdGluZyBhdG1vc3BoZXJlIGFuZCBkZWxpY2lvdXMgY29mZmVlIG9wdGlvbnMsIHRoZSBDb2ZmZWUgSG91c2UgUmVzb3VyY2UgaXMgYSBwb3B1bGFyIGRlc3RpbmF0aW9uIGZvciBjb2ZmZWUgbG92ZXJzIGFuZCB0aG9zZSBzZWVraW5nIGEgd2FybSBhbmQgaW52aXRpbmcgc3BhY2UgdG8gZW5qb3kgdGhlaXIgZmF2b3JpdGUgYmV2ZXJhZ2UuJyxcclxuICApO1xyXG4gIGNvbnN0IG1lbnVCdXR0b24gPSBjcmVhdGVFbCgnYScsICdtZW51LWJ1dHRvbicsICdNZW51Jyk7XHJcbiAgY29uc3QgY3VwSW1nID0gY3JlYXRlRWwoJ2ltZycsICdjb2ZmZWUtaW1nJyk7XHJcbiAgY3VwSW1nLnNyYyA9IGNvZmZlZUltZztcclxuICBjdXBJbWcuYWx0ID0gJ2NvZmZlZSBjdXAnO1xyXG4gIG1lbnVCdXR0b24uYXBwZW5kKGN1cEltZyk7XHJcbiAgbWVudUJ1dHRvbi5ocmVmID0gJy4vbWVudS9pbmRleC5odG1sJztcclxuICBoZXJvU2VjdGlvbi5hcHBlbmQoaGVyb0hlYWRpbmcsIGluZm8sIG1lbnVCdXR0b24pO1xyXG4gIHJldHVybiBoZXJvU2VjdGlvbjtcclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVFbCB9IGZyb20gJy4uLy4uL3NoYXJlZC9jcmVhdGVFbCc7XHJcbmltcG9ydCBwaG9uZUltYWdlU3JjIGZyb20gJy4vYXNzZXRzL21vYmlsZS1zY3JlZW5zLnBuZyc7XHJcbmltcG9ydCBwbGF5TUltYWdlIGZyb20gJy4vYXNzZXRzL3BsYXktbWFya2V0LWljb24uc3ZnJztcclxuaW1wb3J0IGFwcFN0b3JlSW1hZ2VTcmMgZnJvbSAnLi9hc3NldHMvYXBwLXN0b3JlLWljb24uc3ZnJztcclxuaW1wb3J0ICcuL21vYmlsZS5jc3MnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1vYmlsZSgpIHtcclxuICBjb25zdCBzZWN0aW9uID0gY3JlYXRlRWwoJ3NlY3Rpb24nLCAnbW9iaWxlLXNlY3Rpb24gc2VjdGlvbicpO1xyXG4gIHNlY3Rpb24uaWQgPSAnbW9iaWxlLWFwcCdcclxuICBjb25zdCBpbmZvQ29udGFpbmVyID0gY3JlYXRlRWwoJ2RpdicsICdpbmZvLWNvbnRhaW5lcicpO1xyXG4gIGNvbnN0IGhlYWRpbmcgPSBjcmVhdGVFbCgnaDInLCAnbW9iaWxlLWhlYWRpbmcgaGVhZGluZycpO1xyXG4gIGhlYWRpbmcuYXBwZW5kKGNyZWF0ZUVsKCdzcGFuJywgJ2N1cnNpdmUnLCAnRG93bmxvYWQnKSwgJyBvdXIgYXBwcyB0byBzdGFydCBvcmRlcmluZycpO1xyXG4gIGNvbnN0IG1vYmlsZUluZm8gPSBjcmVhdGVFbChcclxuICAgICdwJyxcclxuICAgICdtb2JpbGUtaW5mbycsXHJcbiAgICAnRG93bmxvYWQgdGhlIFJlc291cmNlIGFwcCB0b2RheSBhbmQgZXhwZXJpZW5jZSB0aGUgY29tZm9ydCBvZiBvcmRlcmluZyB5b3VyIGZhdm9yaXRlIGNvZmZlZSBmcm9tIHdoZXJldmVyIHlvdSBhcmUnLFxyXG4gICk7XHJcbiAgY29uc3QgYnV0dG9uc1dyYXBwZXIgPSBjcmVhdGVFbCgnZGl2JywgJ2J1dHRvbi13cmFwcGVyJyk7XHJcbiAgY29uc3QgYnV0dG9uQXBwU3RvcmUgPSBjcmVhdGVFbCgnYScsICdidXR0b24tYXBwJyk7XHJcbiAgYnV0dG9uQXBwU3RvcmUuaHJlZiA9ICcjJ1xyXG4gIGNvbnN0IGFwcFN0b3JlSWNvbiA9IGNyZWF0ZUVsKCdpbWcnLCAnYXBwLWljb24nKTtcclxuICBhcHBTdG9yZUljb24uYWx0ID0gJ2FwcCBzdG9yZSBpY29uJztcclxuICBhcHBTdG9yZUljb24uc3JjID0gYXBwU3RvcmVJbWFnZVNyYztcclxuICBjb25zdCBidXR0b25QbGF5TWFya2V0ID0gY3JlYXRlRWwoJ2EnLCAnYnV0dG9uLWFwcCcpO1xyXG4gIGJ1dHRvblBsYXlNYXJrZXQuaHJlZiA9ICcjJ1xyXG4gIGNvbnN0IHBsYXlNYXJrZXRJY29uID0gY3JlYXRlRWwoJ2ltZycsICdhcHAtaWNvbicpO1xyXG4gIHBsYXlNYXJrZXRJY29uLmFsdCA9ICdwbGF5IG1hcmtldCBpY29uJztcclxuICBwbGF5TWFya2V0SWNvbi5zcmMgPSBwbGF5TUltYWdlO1xyXG4gIGNvbnN0IHBsYXlNYXJrZXRTcGFuID0gY3JlYXRlRWwoJ2RpdicsICdidXR0b24taW5mbycpO1xyXG4gIHBsYXlNYXJrZXRTcGFuLmFwcGVuZChjcmVhdGVFbCgncCcsICdhdmFpbGFibGUnLCAnQXZhaWxhYmxlIG9uJyksIGNyZWF0ZUVsKCdwJywgJ2FwcC1uYW1lJywgJ0dvb2dsZSBQbGF5JykpO1xyXG4gIGNvbnN0IGFwcFN0b3JlU3BhbiA9IGNyZWF0ZUVsKCdkaXYnLCAnYnV0dG9uLWluZm8nKTtcclxuICBhcHBTdG9yZVNwYW4uYXBwZW5kKGNyZWF0ZUVsKCdwJywgJ2F2YWlsYWJsZScsICdBdmFpbGFibGUgb24gdGhlJyksIGNyZWF0ZUVsKCdwJywgJ2FwcC1uYW1lJywgJ0FwcCBTdG9yZScpKTtcclxuXHJcbiAgYnV0dG9uQXBwU3RvcmUuYXBwZW5kKGFwcFN0b3JlSWNvbiwgYXBwU3RvcmVTcGFuKTtcclxuICBidXR0b25QbGF5TWFya2V0LmFwcGVuZChwbGF5TWFya2V0SWNvbiwgcGxheU1hcmtldFNwYW4pO1xyXG4gIGJ1dHRvbnNXcmFwcGVyLmFwcGVuZChidXR0b25BcHBTdG9yZSwgYnV0dG9uUGxheU1hcmtldCk7XHJcbiAgaW5mb0NvbnRhaW5lci5hcHBlbmQoaGVhZGluZywgbW9iaWxlSW5mbywgYnV0dG9uc1dyYXBwZXIpO1xyXG4gIGNvbnN0IGltZ1dyYXBwZXIgPSBjcmVhdGVFbCgnZGl2JywgJ2ltZy13cmFwcGVyJyk7XHJcbiAgY29uc3QgcGhvbmVJbWFnZSA9IGNyZWF0ZUVsKCdpbWcnLCAncGhvbmUtaW1nJyk7XHJcbiAgcGhvbmVJbWFnZS5hbHQgPSAncGhvdG8gb2YgdGhlIHBob25lJztcclxuICBwaG9uZUltYWdlLnNyYyA9IHBob25lSW1hZ2VTcmM7XHJcblxyXG4gIGltZ1dyYXBwZXIuYXBwZW5kKHBob25lSW1hZ2UpO1xyXG4gIHNlY3Rpb24uYXBwZW5kKGluZm9Db250YWluZXIsIGltZ1dyYXBwZXIpO1xyXG4gIHJldHVybiBzZWN0aW9uO1xyXG59XHJcbiIsImltcG9ydCB7IGNyZWF0ZUVsIH0gZnJvbSAnLi4vc2hhcmVkL2NyZWF0ZUVsJztcclxuaW1wb3J0IHsgY3JlYXRlQWJvdXQgfSBmcm9tICcuLi93aWRnZXRzL2Fib3V0L2NyZWF0ZS1hYm91dCc7XHJcbmltcG9ydCB7IGNyZWF0ZUZhdm9yaXRlIH0gZnJvbSAnLi4vd2lkZ2V0cy9mYXZvcml0ZS9jcmVhdGUtZmF2b3JpdGUnO1xyXG5pbXBvcnQgeyBjcmVhdGVGb290ZXIgfSBmcm9tICcuLi93aWRnZXRzL2Zvb3Rlci9jcmVhdGUtZm9vdGVyJztcclxuaW1wb3J0IHsgY3JlYXRlSGVhZGVyIH0gZnJvbSAnLi4vd2lkZ2V0cy9oZWFkZXIvY3JlYXRlLWhlYWRlcic7XHJcbmltcG9ydCB7IGNyZWF0ZUhlcm8gfSBmcm9tICcuLi93aWRnZXRzL2hlcm8vY3JlYXRlLWhlcm8nO1xyXG5pbXBvcnQgeyBjcmVhdGVNb2JpbGUgfSBmcm9tICcuLi93aWRnZXRzL21vYmlsZS1hcHAvY3JlYXRlLW1vYmlsZSc7XHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuY29uc3QgY29udGFpbmVyID0gY3JlYXRlRWwoJ2RpdicsICdwYWdlLWNvbnRhaW5lcicpO1xyXG5jb25zdCBtYWluID0gY3JlYXRlRWwoJ21haW4nLCAnbWFpbicpO1xyXG5jb25zdCBbaGVhZGVyLCBsaW5rc10gPSBjcmVhdGVIZWFkZXIoKVxyXG5kb2N1bWVudC5ib2R5LmFwcGVuZChjb250YWluZXIpO1xyXG5tYWluLmFwcGVuZChjcmVhdGVIZXJvKCksIGNyZWF0ZUZhdm9yaXRlKCksIGNyZWF0ZUFib3V0KCksIGNyZWF0ZU1vYmlsZSgpKTtcclxuY29udGFpbmVyLmFwcGVuZChoZWFkZXIsIG1haW4sIGNyZWF0ZUZvb3RlcigpKTtcclxuXHJcbmxpbmtzWzBdLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJylcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9