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

;// CONCATENATED MODULE: ./src/shared/products.json
const products_namespaceObject = JSON.parse('[{"name":"Irish coffee","description":"Fragrant black coffee with Jameson Irish whiskey and whipped milk","price":"7.00","category":"coffee","sizes":{"s":{"size":"200 ml","add-price":"0.00"},"m":{"size":"300 ml","add-price":"0.50"},"l":{"size":"400 ml","add-price":"1.00"}},"additives":[{"name":"Sugar","add-price":"0.50"},{"name":"Cinnamon","add-price":"0.50"},{"name":"Syrup","add-price":"0.50"}]},{"name":"Kahlua coffee","description":"Classic coffee with milk and Kahlua liqueur under a cap of frothed milk","price":"7.00","category":"coffee","sizes":{"s":{"size":"200 ml","add-price":"0.00"},"m":{"size":"300 ml","add-price":"0.50"},"l":{"size":"400 ml","add-price":"1.00"}},"additives":[{"name":"Sugar","add-price":"0.50"},{"name":"Cinnamon","add-price":"0.50"},{"name":"Syrup","add-price":"0.50"}]},{"name":"Honey raf","description":"Espresso with frothed milk, cream and aromatic honey","price":"5.50","category":"coffee","sizes":{"s":{"size":"200 ml","add-price":"0.00"},"m":{"size":"300 ml","add-price":"0.50"},"l":{"size":"400 ml","add-price":"1.00"}},"additives":[{"name":"Sugar","add-price":"0.50"},{"name":"Cinnamon","add-price":"0.50"},{"name":"Syrup","add-price":"0.50"}]},{"name":"Ice cappuccino","description":"Cappuccino with soft thick foam in summer version with ice","price":"5.00","category":"coffee","sizes":{"s":{"size":"200 ml","add-price":"0.00"},"m":{"size":"300 ml","add-price":"0.50"},"l":{"size":"400 ml","add-price":"1.00"}},"additives":[{"name":"Sugar","add-price":"0.50"},{"name":"Cinnamon","add-price":"0.50"},{"name":"Syrup","add-price":"0.50"}]},{"name":"Espresso","description":"Classic black coffee","price":"4.50","category":"coffee","sizes":{"s":{"size":"200 ml","add-price":"0.00"},"m":{"size":"300 ml","add-price":"0.50"},"l":{"size":"400 ml","add-price":"1.00"}},"additives":[{"name":"Sugar","add-price":"0.50"},{"name":"Cinnamon","add-price":"0.50"},{"name":"Syrup","add-price":"0.50"}]},{"name":"Latte","description":"Espresso coffee with the addition of steamed milk and dense milk foam","price":"5.50","category":"coffee","sizes":{"s":{"size":"200 ml","add-price":"0.00"},"m":{"size":"300 ml","add-price":"0.50"},"l":{"size":"400 ml","add-price":"1.00"}},"additives":[{"name":"Sugar","add-price":"0.50"},{"name":"Cinnamon","add-price":"0.50"},{"name":"Syrup","add-price":"0.50"}]},{"name":"Latte macchiato","description":"Espresso with frothed milk and chocolate","price":"5.50","category":"coffee","sizes":{"s":{"size":"200 ml","add-price":"0.00"},"m":{"size":"300 ml","add-price":"0.50"},"l":{"size":"400 ml","add-price":"1.00"}},"additives":[{"name":"Sugar","add-price":"0.50"},{"name":"Cinnamon","add-price":"0.50"},{"name":"Syrup","add-price":"0.50"}]},{"name":"Coffee with cognac","description":"Fragrant black coffee with cognac and whipped cream","price":"6.50","category":"coffee","sizes":{"s":{"size":"200 ml","add-price":"0.00"},"m":{"size":"300 ml","add-price":"0.50"},"l":{"size":"400 ml","add-price":"1.00"}},"additives":[{"name":"Sugar","add-price":"0.50"},{"name":"Cinnamon","add-price":"0.50"},{"name":"Syrup","add-price":"0.50"}]},{"name":"Moroccan","description":"Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint","price":"4.50","category":"tea","sizes":{"s":{"size":"200 ml","add-price":"0.00"},"m":{"size":"300 ml","add-price":"0.50"},"l":{"size":"400 ml","add-price":"1.00"}},"additives":[{"name":"Sugar","add-price":"0.50"},{"name":"Lemon","add-price":"0.50"},{"name":"Syrup","add-price":"0.50"}]},{"name":"Ginger","description":"Original black tea with fresh ginger, lemon and honey","price":"5.00","category":"tea","sizes":{"s":{"size":"200 ml","add-price":"0.00"},"m":{"size":"300 ml","add-price":"0.50"},"l":{"size":"400 ml","add-price":"1.00"}},"additives":[{"name":"Sugar","add-price":"0.50"},{"name":"Lemon","add-price":"0.50"},{"name":"Syrup","add-price":"0.50"}]},{"name":"Cranberry","description":"Invigorating black tea with cranberry and honey","price":"5.00","category":"tea","sizes":{"s":{"size":"200 ml","add-price":"0.00"},"m":{"size":"300 ml","add-price":"0.50"},"l":{"size":"400 ml","add-price":"1.00"}},"additives":[{"name":"Sugar","add-price":"0.50"},{"name":"Lemon","add-price":"0.50"},{"name":"Syrup","add-price":"0.50"}]},{"name":"Sea buckthorn","description":"Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon","price":"5.50","category":"tea","sizes":{"s":{"size":"200 ml","add-price":"0.00"},"m":{"size":"300 ml","add-price":"0.50"},"l":{"size":"400 ml","add-price":"1.00"}},"additives":[{"name":"Sugar","add-price":"0.50"},{"name":"Lemon","add-price":"0.50"},{"name":"Syrup","add-price":"0.50"}]},{"name":"Marble cheesecake","description":"Philadelphia cheese with lemon zest on a light sponge cake and red currant jam","price":"3.50","category":"dessert","sizes":{"s":{"size":"50 g","add-price":"0.00"},"m":{"size":"100 g","add-price":"0.50"},"l":{"size":"200 g","add-price":"1.00"}},"additives":[{"name":"Berries","add-price":"0.50"},{"name":"Nuts","add-price":"0.50"},{"name":"Jam","add-price":"0.50"}]},{"name":"Red velvet","description":"Layer cake with cream cheese frosting","price":"4.00","category":"dessert","sizes":{"s":{"size":"50 g","add-price":"0.00"},"m":{"size":"100 g","add-price":"0.50"},"l":{"size":"200 g","add-price":"1.00"}},"additives":[{"name":"Berries","add-price":"0.50"},{"name":"Nuts","add-price":"0.50"},{"name":"Jam","add-price":"0.50"}]},{"name":"Cheesecakes","description":"Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar","price":"4.50","category":"dessert","sizes":{"s":{"size":"50 g","add-price":"0.00"},"m":{"size":"100 g","add-price":"0.50"},"l":{"size":"200 g","add-price":"1.00"}},"additives":[{"name":"Berries","add-price":"0.50"},{"name":"Nuts","add-price":"0.50"},{"name":"Jam","add-price":"0.50"}]},{"name":"Creme brulee","description":"Delicate creamy dessert in a caramel basket with wild berries","price":"4.00","category":"dessert","sizes":{"s":{"size":"50 g","add-price":"0.00"},"m":{"size":"100 g","add-price":"0.50"},"l":{"size":"200 g","add-price":"1.00"}},"additives":[{"name":"Berries","add-price":"0.50"},{"name":"Nuts","add-price":"0.50"},{"name":"Jam","add-price":"0.50"}]},{"name":"Pancakes","description":"Tender pancakes with strawberry jam and fresh strawberries","price":"4.50","category":"dessert","sizes":{"s":{"size":"50 g","add-price":"0.00"},"m":{"size":"100 g","add-price":"0.50"},"l":{"size":"200 g","add-price":"1.00"}},"additives":[{"name":"Berries","add-price":"0.50"},{"name":"Nuts","add-price":"0.50"},{"name":"Jam","add-price":"0.50"}]},{"name":"Honey cake","description":"Classic honey cake with delicate custard","price":"4.50","category":"dessert","sizes":{"s":{"size":"50 g","add-price":"0.00"},"m":{"size":"100 g","add-price":"0.50"},"l":{"size":"200 g","add-price":"1.00"}},"additives":[{"name":"Berries","add-price":"0.50"},{"name":"Nuts","add-price":"0.50"},{"name":"Jam","add-price":"0.50"}]},{"name":"Chocolate cake","description":"Cake with hot chocolate filling and nuts with dried apricots","price":"5.50","category":"dessert","sizes":{"s":{"size":"50 g","add-price":"0.00"},"m":{"size":"100 g","add-price":"0.50"},"l":{"size":"200 g","add-price":"1.00"}},"additives":[{"name":"Berries","add-price":"0.50"},{"name":"Nuts","add-price":"0.50"},{"name":"Jam","add-price":"0.50"}]},{"name":"Black forest","description":"A combination of thin sponge cake with cherry jam and light chocolate mousse","price":"6.50","category":"dessert","sizes":{"s":{"size":"50 g","add-price":"0.00"},"m":{"size":"100 g","add-price":"0.50"},"l":{"size":"200 g","add-price":"1.00"}},"additives":[{"name":"Berries","add-price":"0.50"},{"name":"Nuts","add-price":"0.50"},{"name":"Jam","add-price":"0.50"}]}]');
;// CONCATENATED MODULE: ./src/shared/assets/coffee-1.jpg
const coffee_1_namespaceObject = __webpack_require__.p + "9aa3fe1559a83a5e5694.jpg";
;// CONCATENATED MODULE: ./src/shared/assets/coffee-2.jpg
const coffee_2_namespaceObject = __webpack_require__.p + "1010a10326800c13b209.jpg";
;// CONCATENATED MODULE: ./src/shared/assets/coffee-3.jpg
const coffee_3_namespaceObject = __webpack_require__.p + "28cfba434477a74b9d3c.jpg";
;// CONCATENATED MODULE: ./src/shared/assets/coffee-4.jpg
const coffee_4_namespaceObject = __webpack_require__.p + "5615868a570a5daa0ef9.jpg";
;// CONCATENATED MODULE: ./src/shared/assets/coffee-5.jpg
const coffee_5_namespaceObject = __webpack_require__.p + "c85679af00a1b77e1381.jpg";
;// CONCATENATED MODULE: ./src/shared/assets/coffee-6.jpg
const coffee_6_namespaceObject = __webpack_require__.p + "292c9beeaf5c0c13b173.jpg";
;// CONCATENATED MODULE: ./src/shared/assets/coffee-7.jpg
const coffee_7_namespaceObject = __webpack_require__.p + "6d3f1d0a27ae906ed35c.jpg";
;// CONCATENATED MODULE: ./src/shared/assets/coffee-8.jpg
const coffee_8_namespaceObject = __webpack_require__.p + "43eeae364416c90cea31.jpg";
;// CONCATENATED MODULE: ./src/shared/product-photos.js









const photos = [coffee_1_namespaceObject, coffee_2_namespaceObject, coffee_3_namespaceObject, coffee_4_namespaceObject, coffee_5_namespaceObject, coffee_6_namespaceObject, coffee_7_namespaceObject, coffee_8_namespaceObject];
/* harmony default export */ const product_photos = (photos);
;// CONCATENATED MODULE: ./src/widgets/menu-products/assets/kettle.png
const kettle_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAARCAYAAADUryzEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKDSURBVHgBzVJNSFRRFD7v586beW8Gn8Nz9FnZxjJoZ1G7wExNyCzIFrkQgiRSqMBFTWVDCRG1ml2LmE3gImhhoEJuKkIkIaSCkCxDB9Nx5s3P+7/vp/sGBiLauPPA4R445/vOd885ALvasvny2NLK+m3Yqc3OLsobJXP0V05RlrO57I9c+cqXbKGllp+aWuTT6WkuiKnZd/PtUtNedPTgvoUq+MOniWZZGuFDSEQMBa7ngWk7oJT07a1CKX2gRZ5kaG9a07RYrF4+zXqWcb0hXnf21dxC6+Szp8V4XBqKCjExynPAIxpc34eyjsEFViLxDZqhL7+de5MURbHSejiUYrpP9Ww3NsvXEo0J88iJ3uMN8frzsSgPQgRBBDGAWBZ8GgHDEmdCkVxeWbtwpmukp/+iLjdKl6hA9sLS1822trbE71zZ4zhEhzkEgfOIAtv1oGJgsCwMmmFCXtFK35bz+wvZj/VdXR0ZNiDQVH1+Y6vQr6kajS0ETjgEwWswDGDHARvbYJo2ITCC2roQqx7r6+1zNrfXjSrBxvrqvA/QT9MEQDo7FgcmClJ+dYgODkgwqJoBRUWBcAi1ezS+uvZ9Zaj6hUwmIzKI/xkWBJEXeIhEwsCyDARJjwzRISpMy4JKRYNiqQJyU0LT1OLjwYGBh1Rtt+l0epCLRF/wggBcmCMDY4CmKULgASYKLMsGVVVB19SCYejnxpPJ9wGOqRHMzMx87u7scG3snvSJbM/FBIjBJp0t0wRD14C0BVOv3Bq/c/dlDUf9e4VPHk2MehR1n2U5iSIKqmTEfRcXHcceS9578Pzveup/p5waHpa4lj2dLEMf8gI0Bash2399M5Uqwq6zPwZnMY0CE5cHAAAAAElFTkSuQmCC";
;// CONCATENATED MODULE: ./src/widgets/menu-products/assets/coffee.png
const coffee_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK/SURBVHgBxVNNTxNRFD1vZtr5aGdaSgsSWgqKFU2DgiQaVBKMMWFlYsKG6D8wJi7cmrh3wT/AsBMMCzVxZUiIGEUCJEj4EBxEOraGtkzb6cd0mPFZIxupxpU3eZv7Xs4959zzCOpUZ2cnHw6H5VAolJ2cmLBBiFPvLVenT4aGhi42NTW5IpGI2j86mr4H6LTv/AuIY9v2h3g83i4IQi9lNFMPoDax3kUymexIp1NhWVYCtk02otHoJ0JI5a8gjuM0rq8u3k9p2nBe3+/QdZ0IooTqgYVAoNGWJO/rE6e6Hre0tI0dKYcCkPXVpfmXU0/aVxff4bOqIpcz4BZEHFhVBIMBprPr1EDvpWsD2XSqraGx+eFvILTkUj4XnRwfQyptwOdTIHt94FgOll3BhprC8qoKhrhw/sLlmy+eP22NnYwlY13dDw7lLCy8PdMWjrzXEpo092YW25vryO9nYVMpHkWBLxBCc2srzvX2YGV5ZZcVSA+x3dcHBgfX2B8A83OzdzN7qUlJlESPJFAJHESPB/6mZviCIXBUElgGiuIF73ZB8SlKoCE4vK2qXyIt0TUmubMTt8zyKMdxgmEYNFOUnENQMSugxiKTyaJQKMKyrJ93NHMMQ/BVS3SEQo03YvH4EmeicpwwICKdZlkm5WXDzbsgCjw4jgVLGVDTwbs46g+hoBkUi2XYtgO6dn/NWFnmZnRJylZNs8GxD7CtbkLgRXg9Ejw8B7NI4GZZNPi9SOwmoBtFeL1KjZXbzU8d5kTb2bmiaVvj5XKx3cjr0LQESrVpNmgPhlFGpWpSVhx8fj9kmR7FPxY7ffZOX19f8XA7hcK3Y1sfN2/vZ/Zu5XO5bsMooFKmQFSKy+WCQOUKophiWG7RFwg+6u+/+urIxP6q6elnQcbmu8tWKWSWqny5auqmieWRkRGV/OE3///6DobgHOA5Dh4kAAAAAElFTkSuQmCC";
;// CONCATENATED MODULE: ./src/widgets/menu-products/assets/cake.png
const cake_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKbSURBVHgBzVLPS1RRFP7ue/fNTDOTpmOJoyAUqdCQUUEELvoBgRREi6htqyBp265/opCoRdAma5kQlf0QErQiJLOMzBbhYDPOqMP8evPeuz8694khRIs24YPDPffd833nO/e7wFb52N8OKrduHns182xoLC1KZw9dGD51+tKHfyKZHhtJd959MJnLL3c/GuxAb88R9Kb7P3EndgNO20gmk6lurrc2b8bHh5Ovn9+7GhRX3tUWFrtjhTXsuz+HZulA+I1M4FXuaC87t/Bl8vIfSkZHb8fbkk0XtVLXlFS9ulhE+clL+NxCc99etJ8YQCwWBbcZLIuCWbTf9ibOxfl41/Esy8++aK8y7ykDO2AKGDRsKuImtzbm1WA6gJYulPDBzE/eaggf7+wZPMPc3MRuJcT3IGhASQ86WAX8FVpLgKjBkmUwWaWoQ/oCWgvKBYIdR6FaB2odfSzFV7NzOe5NBxyBwwjgRCPUrUFdNQEUidBhZ200WZwukZNCCctbgtQ6kf8q06Ha/NSVRa4bXZauw+YEkDQUi1AkSfZ2WJEWaCtBQXs7CWknoLSNQEi4vtvODUk0dbBgW7Euxhxop5k6xmHy8Da0UbS+KqUoJI1NoaU5buzZf64QkiRa+stKaSMPksYgh8IiFYJDpnA0c7EIKtBeAWZSP9L5jTGm+brPVoXgCImEC+lVILwVqEYe2l+j6hKCegGMCGz4UL4PmRqAbNm1bPAhSTE7URZuAbL2kxwhsDR2khPCyCDZStBjU2SzpjcSQNRdZaeaFhXDw98kpaXZEmQFKnDJ2hqRCMJJypVn6yBHY84LT763LTnv8MiPRiUye/jk9eLGiw1JarXyDPz6W+nVZ4Rb/6ilX5Yq+rk1EpvPDE1V8T++X1XAeh9T9uH0AAAAAElFTkSuQmCC";
;// CONCATENATED MODULE: ./src/widgets/menu-products/create-menu-products.js








function createProductMenu() {
  const section = createEl('section', 'menu-section section');
  const heading = createEl('h1', 'menu-heading heading');
  heading.append('Behind each of our cups hides an ', createEl('span', 'cursive', 'amazing surprise'));
  const tabsContainer = createEl('div', 'tabs-container');
  let tabs = [
    [coffee_namespaceObject, 'Coffee'],
    [kettle_namespaceObject, 'Tea'],
    [cake_namespaceObject, 'Dessert'],
  ];
  tabs = tabs.map((tab) => {
    const newTab = createEl('div', 'tab');
    const icon = createEl('img', 'tab-icon');
    icon.src = tab[0];
    icon.alt = tab[1];
    const text = createEl('span', 'tab-text', tab[1]);
    newTab.append(icon, text);
    tabsContainer.append(newTab);
    return newTab;
  });

  tabs[0].classList.add('active');

  const productSliderContainer = createEl('div', 'product-slider-wrapper');
  const cardsWrapper = createEl('div', 'cards-wrapper');
  productSliderContainer.append(cardsWrapper);

  function createCard(photo, drink) {
    const { description, name, price } = drink;
    const card = createEl('div', 'drink-card');
    const imageWrapper = createEl('div', 'image-wrapper');
    const image = createEl('img', 'drink-image');
    image.alt = `${name} photo`;
    image.src = photo;
    imageWrapper.append(image);
    const cardDescription = createEl('div', 'card-description');
    const drinkInfo = createEl('div', 'drink-info');
    drinkInfo.append(createEl('p', 'drink-name', name), createEl('p', 'drink-description', description));

    cardDescription.append(drinkInfo, createEl('p', 'drink-price', `$${price}`));
    card.append(imageWrapper, cardDescription);
    cardsWrapper.append(card);
  }

  products_namespaceObject.forEach((drink, index) => {
    if (drink.category === 'coffee') {
      createCard(product_photos[index], drink);
    }
  });

  const loadMoreButton = createEl('button', 'load-more');
  loadMoreButton.insertAdjacentHTML(
    'afterbegin',
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21.8883 13.5C21.1645 18.3113 17.013 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C16.1006 2 19.6248 4.46819 21.1679 8" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 8H21.4C21.7314 8 22 7.73137 22 7.4V3" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  );
  productSliderContainer.append(loadMoreButton);

  section.append(heading, tabsContainer, productSliderContainer);
  return section;
}

;// CONCATENATED MODULE: ./src/pages/menu/menu.js






const container = createEl('div', 'page-container');
const main = createEl('main', 'main');
document.body.append(container);
main.append(createProductMenu());
const [header, links] = createHeader();
container.append(header, main, createFooter());

links[5].classList.add('disabled');
links[5].href = '#';
links[1].href = '../index.html#favorite-coffee';
links[2].href = '../index.html#about';
links[3].href = '../index.html#mobile-app';

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN4RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ25FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taWRlbGkzNy1qc2ZlMjAyM3E0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21pZGVsaTM3LWpzZmUyMDIzcTQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9taWRlbGkzNy1qc2ZlMjAyM3E0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL21pZGVsaTM3LWpzZmUyMDIzcTQvLi9zcmMvc2hhcmVkL2NyZWF0ZUVsLmpzIiwid2VicGFjazovL21pZGVsaTM3LWpzZmUyMDIzcTQvLi9zcmMvd2lkZ2V0cy9mb290ZXIvY3JlYXRlLWZvb3Rlci5qcyIsIndlYnBhY2s6Ly9taWRlbGkzNy1qc2ZlMjAyM3E0Ly4vc3JjL3dpZGdldHMvaGVhZGVyL2NyZWF0ZS1oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vbWlkZWxpMzctanNmZTIwMjNxNC8uL3NyYy9zaGFyZWQvcHJvZHVjdC1waG90b3MuanMiLCJ3ZWJwYWNrOi8vbWlkZWxpMzctanNmZTIwMjNxNC8uL3NyYy93aWRnZXRzL21lbnUtcHJvZHVjdHMvY3JlYXRlLW1lbnUtcHJvZHVjdHMuanMiLCJ3ZWJwYWNrOi8vbWlkZWxpMzctanNmZTIwMjNxNC8uL3NyYy9wYWdlcy9tZW51L21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsKHRhZywgY2xhc3NOYW1lLCB0ZXh0KSB7XHJcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XHJcbiAgaWYgKGNsYXNzTmFtZSkge1xyXG4gICAgZWwuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xyXG4gIH1cclxuICBpZiAodGV4dCkge1xyXG4gICAgZWwuYXBwZW5kKHRleHQpO1xyXG4gIH1cclxuICByZXR1cm4gZWw7XHJcbn0iLCJpbXBvcnQgeyBjcmVhdGVFbCB9IGZyb20gJy4uLy4uL3NoYXJlZC9jcmVhdGVFbCc7XHJcbmltcG9ydCB0d2l0U3JjIGZyb20gJy4vYXNzZXRzL3R3aXR0ZXIuc3ZnJztcclxuaW1wb3J0IGluc3RhU3JjIGZyb20gJy4vYXNzZXRzL2luc3RhZ3JhbS5zdmcnO1xyXG5pbXBvcnQgZmJTcmMgZnJvbSAnLi9hc3NldHMvZmFjZWJvb2suc3ZnJztcclxuaW1wb3J0IHBpbiBmcm9tICcuL2Fzc2V0cy9waW4tYWx0LnN2Zyc7XHJcbmltcG9ydCBwaG9uZSBmcm9tICcuL2Fzc2V0cy9waG9uZS5zdmcnO1xyXG5pbXBvcnQgY2xvY2sgZnJvbSAnLi9hc3NldHMvY2xvY2suc3ZnJztcclxuaW1wb3J0ICcuL2Zvb3Rlci5jc3MnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcclxuICBjb25zdCBmb290ZXIgPSBjcmVhdGVFbCgnZm9vdGVyJywgJ2Zvb3RlcicpO1xyXG4gIGZvb3Rlci5pZCA9ICdjb250YWN0LXVzJztcclxuICBjb25zdCBzb2NpYWwgPSBjcmVhdGVFbCgnZGl2JywgJ3NvY2lhbC1jb250YWluZXInKTtcclxuICBjb25zdCBoZWFkaW5nID0gY3JlYXRlRWwoJ2gyJywgJ2Zvb3Rlci1oZWFkaW5nJyk7XHJcbiAgaGVhZGluZy5hcHBlbmQoJ1NpcCwgU2F2b3IsIFNtaWxlLiAnLCBjcmVhdGVFbCgnc3BhbicsICdjdXJzaXZlJywgJ0l04oCZcyBjb2ZmZWUgdGltZSEnKSk7XHJcbiAgY29uc3Qgc29jaWFsV3JhcHBlciA9IGNyZWF0ZUVsKCdkaXYnLCAnc29jaWFsLXdyYXBwZXInKTtcclxuXHJcbiAgY29uc3QgdHdpdHRlckxpbmsgPSBjcmVhdGVFbCgnYScsICdzb2NpYWwtbGluaycpO1xyXG4gIHR3aXR0ZXJMaW5rLmhyZWYgPSAnaHR0cHM6Ly90d2l0dGVyLmNvbS8/bGFuZz1lbic7XHJcbiAgY29uc3QgdHdpdHRlckljb24gPSBjcmVhdGVFbCgnaW1nJywgJ3NvY2lhbC1pY29uJyk7XHJcbiAgdHdpdHRlckljb24uYWx0ID0gJ3R3aXR0ZXIgaWNvbic7XHJcbiAgdHdpdHRlckljb24uc3JjID0gdHdpdFNyYztcclxuICB0d2l0dGVyTGluay5hcHBlbmQodHdpdHRlckljb24pO1xyXG5cclxuICBjb25zdCBpbnN0YUxpbmsgPSBjcmVhdGVFbCgnYScsICdzb2NpYWwtbGluaycpO1xyXG4gIGluc3RhTGluay5ocmVmID0gJ2h0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vJztcclxuICBjb25zdCBpbnN0YUljb24gPSBjcmVhdGVFbCgnaW1nJywgJ3NvY2lhbC1pY29uJyk7XHJcbiAgaW5zdGFJY29uLmFsdCA9ICdpbnN0YSBpY29uJztcclxuICBpbnN0YUljb24uc3JjID0gaW5zdGFTcmM7XHJcbiAgaW5zdGFMaW5rLmFwcGVuZChpbnN0YUljb24pO1xyXG5cclxuICBjb25zdCBmYkxpbmsgPSBjcmVhdGVFbCgnYScsICdzb2NpYWwtbGluaycpO1xyXG4gIGZiTGluay5ocmVmID0gJ2h0dHBzOi8vdWstdWEuZmFjZWJvb2suY29tLyc7XHJcbiAgY29uc3QgZmJJY29uID0gY3JlYXRlRWwoJ2ltZycsICdzb2NpYWwtaWNvbicpO1xyXG4gIGZiSWNvbi5hbHQgPSAnZmIgaWNvbic7XHJcbiAgZmJJY29uLnNyYyA9IGZiU3JjO1xyXG4gIGZiTGluay5hcHBlbmQoZmJJY29uKTtcclxuXHJcbiAgc29jaWFsV3JhcHBlci5hcHBlbmQodHdpdHRlckxpbmssIGluc3RhTGluaywgZmJMaW5rKTtcclxuICBzb2NpYWwuYXBwZW5kKGhlYWRpbmcsIHNvY2lhbFdyYXBwZXIpO1xyXG5cclxuICBjb25zdCBjb250YWN0cyA9IGNyZWF0ZUVsKCdkaXYnLCAnY29udGFjdHMtd3JhcHBlcicpO1xyXG4gIGNvbnN0IGNvbnRhY3RzSGVhZGluZyA9IGNyZWF0ZUVsKCdoMycsICdjb250YWN0cy1oZWFkaW5nJywgJ0NvbnRhY3QgdXMnKTtcclxuICBjb25zdCBjb250YWN0c0xpc3QgPSBjcmVhdGVFbCgndWwnLCAnY29udGFjdHMtbGlzdCcpO1xyXG5cclxuICBmdW5jdGlvbiBjcmVhdGVMSShpY29uLCB0ZXh0LCBsaW5rKSB7XHJcbiAgICBjb25zdCBsaSA9IGNyZWF0ZUVsKCdsaScsICdjb250YWN0LWl0ZW0nKTtcclxuICAgIGNvbnN0IGxpSWNvbiA9IGNyZWF0ZUVsKCdpbWcnLCAnY29udGFjdC1pY29uJyk7XHJcbiAgICBsaUljb24uYWx0ID0gJ21hcmtlcic7XHJcbiAgICBsaUljb24uc3JjID0gaWNvbjtcclxuICAgIGlmIChsaW5rKSB7XHJcbiAgICAgIGNvbnN0IGxpTGluayA9IGNyZWF0ZUVsKCdhJywgJ2NvbnRhY3QtbGluaycpO1xyXG4gICAgICBsaUxpbmsuaHJlZiA9IGxpbms7XHJcbiAgICAgIGxpTGluay50YXJnZXQgPSAnYmxhbmsnO1xyXG5cclxuICAgICAgbGkuYXBwZW5kKGxpTGluayk7XHJcbiAgICAgIGxpTGluay5hcHBlbmQobGlJY29uLCB0ZXh0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxpLmFwcGVuZChsaUljb24sIHRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnRhY3RzTGlzdC5hcHBlbmQobGkpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlTEkocGluLCAnODU1OCBHcmVlbiBSZC4sIExBJywgJ2h0dHBzOi8vbWFwcy5hcHAuZ29vLmdsLzIycDJiTmlOZ1M2WEVyTFE5Jyk7XHJcbiAgY3JlYXRlTEkocGhvbmUsICcrMSAoNjAzKSA1NTUtMDEyMycsICd0ZWw6KzEoNjAzKTU1NS0wMTIzJyk7XHJcbiAgY3JlYXRlTEkoY2xvY2ssICdNb24tU2F0OiA5OjAwIEFNIOKAkyAyMzowMCBQTScpO1xyXG5cclxuICBjb250YWN0cy5hcHBlbmQoY29udGFjdHNIZWFkaW5nLCBjb250YWN0c0xpc3QpO1xyXG5cclxuICBmb290ZXIuYXBwZW5kKHNvY2lhbCwgY29udGFjdHMpO1xyXG4gIHJldHVybiBmb290ZXI7XHJcbn1cclxuIiwiaW1wb3J0IHsgY3JlYXRlRWwgfSBmcm9tICcuLi8uLi9zaGFyZWQvY3JlYXRlRWwnO1xyXG5pbXBvcnQgbG9nb0ltYWdlIGZyb20gJy4vYXNzZXRzL2xvZ28uc3ZnJztcclxuaW1wb3J0IGN1cEltYWdlIGZyb20gJy4vYXNzZXRzL2NvZmZlZS1jdXAuc3ZnJztcclxuaW1wb3J0ICcuL2hlYWRlci5jc3MnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcclxuICBjb25zdCBoZWFkZXIgPSBjcmVhdGVFbCgnaGVhZGVyJywgJ2hlYWRlcicpO1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUVsKCdkaXYnLCAnaGVhZGVyLWNvbnRhaW5lcicpO1xyXG4gIGNvbnN0IGxvZ28gPSBjcmVhdGVFbCgnYScsICdoZWFkZXItbG9nbycpO1xyXG4gIGxvZ28uaHJlZiA9ICcuLi9pbmRleC5odG1sJztcclxuICBjb25zdCBsb2dvSW1nID0gY3JlYXRlRWwoJ2ltZycpO1xyXG4gIGxvZ28uYXBwZW5kKGxvZ29JbWcpO1xyXG4gIGxvZ29JbWcuYWx0ID0gJ2NvZmZlZSBob3VzZSBsb2dvJztcclxuICBsb2dvSW1nLnNyYyA9IGxvZ29JbWFnZTtcclxuICBjb25zdCBuYXYgPSBjcmVhdGVFbCgnbmF2JywgJ25hdicpO1xyXG4gIGNvbnN0IG5hdlVsID0gY3JlYXRlRWwoJ3VsJywgJ25hdi11bCcpO1xyXG4gIGxldCBuYXZJdGVtcyA9IFsnRmF2b3JpdGUgY29mZmVlJywgJ0Fib3V0JywgJ01vYmlsZSBhcHAnLCAnQ29udGFjdCB1cyddO1xyXG4gIG5hdkl0ZW1zID0gbmF2SXRlbXMubWFwKChpdGVtKSA9PiB7XHJcbiAgICBjb25zdCBuZXdJdGVtID0gY3JlYXRlRWwoJ2xpJywgJ25hdi1pdGVtJyk7XHJcbiAgICBuYXZVbC5hcHBlbmQobmV3SXRlbSk7XHJcbiAgICBjb25zdCBuZXdJdGVtTGluayA9IGNyZWF0ZUVsKCdhJywgJ25hdi1pdGVtLWxpbmsnLCBpdGVtKTtcclxuICAgIG5ld0l0ZW0uYXBwZW5kKG5ld0l0ZW1MaW5rKTtcclxuICAgIG5ld0l0ZW1MaW5rLmhyZWYgPSBgIyR7aXRlbS5yZXBsYWNlQWxsKCcgJywgJy0nKS50b0xvd2VyQ2FzZSgpfWA7XHJcbiAgICByZXR1cm4gbmV3SXRlbUxpbms7XHJcbiAgfSk7XHJcbiAgY29uc3QgbWVudUxpbmsgPSBjcmVhdGVFbCgnYScsICdtZW51LWxpbmsnKTtcclxuICBtZW51TGluay5ocmVmID0gJy4vbWVudS9pbmRleC5odG1sJztcclxuICBjb25zdCBtZW51TGlua1RleHQgPSBjcmVhdGVFbCgnc3BhbicsICdtZW51LWxpbmstdGV4dCcsICdNZW51Jyk7XHJcbiAgY29uc3QgbWVudUxpbmtJbWFnZSA9IGNyZWF0ZUVsKCdpbWcnLCAnbWVudS1saW5rLWltYWdlJyk7XHJcbiAgbWVudUxpbmtJbWFnZS5hbHQgPSAnY3VwIGljb24nO1xyXG4gIG1lbnVMaW5rSW1hZ2Uuc3JjID0gY3VwSW1hZ2U7XHJcblxyXG4gIGNvbnN0IGJ1cmdlckJ1dHRvbiA9IGNyZWF0ZUVsKCdidXR0b24nLCAnYnVyZ2VyLWJ1dHRvbicpO1xyXG4gIGJ1cmdlckJ1dHRvbi5hcHBlbmQoY3JlYXRlRWwoJ3NwYW4nKSwgY3JlYXRlRWwoJ3NwYW4nKSk7XHJcblxyXG4gIGhlYWRlci5hcHBlbmQoY29udGFpbmVyKTtcclxuICBjb250YWluZXIuYXBwZW5kKGxvZ28sIG5hdiwgbWVudUxpbmssIGJ1cmdlckJ1dHRvbik7XHJcbiAgbmF2LmFwcGVuZChuYXZVbCk7XHJcbiAgbWVudUxpbmsuYXBwZW5kKG1lbnVMaW5rVGV4dCwgbWVudUxpbmtJbWFnZSk7XHJcblxyXG4gIGNvbnN0IGxpbmtzRWwgPSBbbG9nbywgLi4ubmF2SXRlbXMsIG1lbnVMaW5rXTtcclxuXHJcbiAgLy8qIGZ1bmN0aW9uYWxpdHlcclxuXHJcbiAgbGV0IG9wZW5CdXJnZXJNZW51ID0gZmFsc2U7XHJcbiAgbGV0IHNpZGVCdXJnZXJNZW51ID0gZmFsc2U7XHJcblxyXG4gIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8PSA3NjgpIHtcclxuICAgIG1vdmVOYXZBc2lkZShuYXYsIG1lbnVMaW5rKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNsb3NlTmF2KGJ1dHRvbiwgbmF2TWVudSkge1xyXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgbmF2TWVudS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbm8tc2Nyb2xsJyk7XHJcbiAgICBvcGVuQnVyZ2VyTWVudSA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gb3Blbk5hdihidXR0b24sIG5hdk1lbnUpIHtcclxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIG5hdk1lbnUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ25vLXNjcm9sbCcpO1xyXG4gICAgb3BlbkJ1cmdlck1lbnUgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbW92ZU5hdkFzaWRlKG5hdiwgbWVudUxpbmspIHtcclxuICAgIG5hdi5hcHBlbmQobWVudUxpbmspO1xyXG4gICAgbmF2LmNsYXNzTGlzdC5hZGQoJ2FzaWRlJyk7XHJcbiAgICBzaWRlQnVyZ2VyTWVudSA9IHRydWU7XHJcbiAgfVxyXG5cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKGUpID0+IHtcclxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDc2OCkge1xyXG4gICAgICBpZiAob3BlbkJ1cmdlck1lbnUpIHtcclxuICAgICAgICBjbG9zZU5hdihidXJnZXJCdXR0b24sIG5hdik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHNpZGVCdXJnZXJNZW51KSB7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChsb2dvLCBuYXYsIG1lbnVMaW5rLCBidXJnZXJCdXR0b24pO1xyXG4gICAgICAgIG5hdi5jbGFzc0xpc3QucmVtb3ZlKCdhc2lkZScpO1xyXG4gICAgICAgIHNpZGVCdXJnZXJNZW51ID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICghc2lkZUJ1cmdlck1lbnUpIHtcclxuICAgICAgICBtb3ZlTmF2QXNpZGUobmF2LCBtZW51TGluayk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgYnVyZ2VyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgb3BlbkJ1cmdlck1lbnUgPyBjbG9zZU5hdihidXJnZXJCdXR0b24sIG5hdikgOiBvcGVuTmF2KGJ1cmdlckJ1dHRvbiwgbmF2KTtcclxuICB9KTtcclxuXHJcbiAgbmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGlmIChlLnRhcmdldCAhPT0gbmF2KSB7XHJcbiAgICAgIGNsb3NlTmF2KGJ1cmdlckJ1dHRvbiwgbmF2KTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgbGlua3NFbC5mb3JFYWNoKChsaW5rKSA9PiB7XHJcbiAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgY2xvc2VOYXYoYnVyZ2VyQnV0dG9uLCBuYXYpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBbaGVhZGVyLCBsaW5rc0VsXTtcclxufVxyXG4iLCJpbXBvcnQgY29mZmVlMSBmcm9tICcuL2Fzc2V0cy9jb2ZmZWUtMS5qcGcnO1xyXG5pbXBvcnQgY29mZmVlMiBmcm9tICcuL2Fzc2V0cy9jb2ZmZWUtMi5qcGcnO1xyXG5pbXBvcnQgY29mZmVlMyBmcm9tICcuL2Fzc2V0cy9jb2ZmZWUtMy5qcGcnO1xyXG5pbXBvcnQgY29mZmVlNCBmcm9tICcuL2Fzc2V0cy9jb2ZmZWUtNC5qcGcnO1xyXG5pbXBvcnQgY29mZmVlNSBmcm9tICcuL2Fzc2V0cy9jb2ZmZWUtNS5qcGcnO1xyXG5pbXBvcnQgY29mZmVlNiBmcm9tICcuL2Fzc2V0cy9jb2ZmZWUtNi5qcGcnO1xyXG5pbXBvcnQgY29mZmVlNyBmcm9tICcuL2Fzc2V0cy9jb2ZmZWUtNy5qcGcnO1xyXG5pbXBvcnQgY29mZmVlOCBmcm9tICcuL2Fzc2V0cy9jb2ZmZWUtOC5qcGcnO1xyXG5cclxuY29uc3QgcGhvdG9zID0gW2NvZmZlZTEsIGNvZmZlZTIsIGNvZmZlZTMsIGNvZmZlZTQsIGNvZmZlZTUsIGNvZmZlZTYsIGNvZmZlZTcsIGNvZmZlZThdO1xyXG5leHBvcnQgZGVmYXVsdCBwaG90b3MiLCJpbXBvcnQgeyBjcmVhdGVFbCB9IGZyb20gJy4uLy4uL3NoYXJlZC9jcmVhdGVFbCc7XHJcbmltcG9ydCAnLi9tZW51LXByb2R1Y3QuY3NzJztcclxuaW1wb3J0IHByb2R1Y3RKU09OIGZyb20gJy4uLy4uL3NoYXJlZC9wcm9kdWN0cy5qc29uJztcclxuaW1wb3J0IHBob3RvcyBmcm9tICcuLi8uLi9zaGFyZWQvcHJvZHVjdC1waG90b3MnO1xyXG5pbXBvcnQga2V0dGxlSW1nIGZyb20gJy4vYXNzZXRzL2tldHRsZS5wbmcnO1xyXG5pbXBvcnQgY29mZmVlSW1nIGZyb20gJy4vYXNzZXRzL2NvZmZlZS5wbmcnO1xyXG5pbXBvcnQgY2FrZUltZyBmcm9tICcuL2Fzc2V0cy9jYWtlLnBuZyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvZHVjdE1lbnUoKSB7XHJcbiAgY29uc3Qgc2VjdGlvbiA9IGNyZWF0ZUVsKCdzZWN0aW9uJywgJ21lbnUtc2VjdGlvbiBzZWN0aW9uJyk7XHJcbiAgY29uc3QgaGVhZGluZyA9IGNyZWF0ZUVsKCdoMScsICdtZW51LWhlYWRpbmcgaGVhZGluZycpO1xyXG4gIGhlYWRpbmcuYXBwZW5kKCdCZWhpbmQgZWFjaCBvZiBvdXIgY3VwcyBoaWRlcyBhbiAnLCBjcmVhdGVFbCgnc3BhbicsICdjdXJzaXZlJywgJ2FtYXppbmcgc3VycHJpc2UnKSk7XHJcbiAgY29uc3QgdGFic0NvbnRhaW5lciA9IGNyZWF0ZUVsKCdkaXYnLCAndGFicy1jb250YWluZXInKTtcclxuICBsZXQgdGFicyA9IFtcclxuICAgIFtjb2ZmZWVJbWcsICdDb2ZmZWUnXSxcclxuICAgIFtrZXR0bGVJbWcsICdUZWEnXSxcclxuICAgIFtjYWtlSW1nLCAnRGVzc2VydCddLFxyXG4gIF07XHJcbiAgdGFicyA9IHRhYnMubWFwKCh0YWIpID0+IHtcclxuICAgIGNvbnN0IG5ld1RhYiA9IGNyZWF0ZUVsKCdkaXYnLCAndGFiJyk7XHJcbiAgICBjb25zdCBpY29uID0gY3JlYXRlRWwoJ2ltZycsICd0YWItaWNvbicpO1xyXG4gICAgaWNvbi5zcmMgPSB0YWJbMF07XHJcbiAgICBpY29uLmFsdCA9IHRhYlsxXTtcclxuICAgIGNvbnN0IHRleHQgPSBjcmVhdGVFbCgnc3BhbicsICd0YWItdGV4dCcsIHRhYlsxXSk7XHJcbiAgICBuZXdUYWIuYXBwZW5kKGljb24sIHRleHQpO1xyXG4gICAgdGFic0NvbnRhaW5lci5hcHBlbmQobmV3VGFiKTtcclxuICAgIHJldHVybiBuZXdUYWI7XHJcbiAgfSk7XHJcblxyXG4gIHRhYnNbMF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblxyXG4gIGNvbnN0IHByb2R1Y3RTbGlkZXJDb250YWluZXIgPSBjcmVhdGVFbCgnZGl2JywgJ3Byb2R1Y3Qtc2xpZGVyLXdyYXBwZXInKTtcclxuICBjb25zdCBjYXJkc1dyYXBwZXIgPSBjcmVhdGVFbCgnZGl2JywgJ2NhcmRzLXdyYXBwZXInKTtcclxuICBwcm9kdWN0U2xpZGVyQ29udGFpbmVyLmFwcGVuZChjYXJkc1dyYXBwZXIpO1xyXG5cclxuICBmdW5jdGlvbiBjcmVhdGVDYXJkKHBob3RvLCBkcmluaykge1xyXG4gICAgY29uc3QgeyBkZXNjcmlwdGlvbiwgbmFtZSwgcHJpY2UgfSA9IGRyaW5rO1xyXG4gICAgY29uc3QgY2FyZCA9IGNyZWF0ZUVsKCdkaXYnLCAnZHJpbmstY2FyZCcpO1xyXG4gICAgY29uc3QgaW1hZ2VXcmFwcGVyID0gY3JlYXRlRWwoJ2RpdicsICdpbWFnZS13cmFwcGVyJyk7XHJcbiAgICBjb25zdCBpbWFnZSA9IGNyZWF0ZUVsKCdpbWcnLCAnZHJpbmstaW1hZ2UnKTtcclxuICAgIGltYWdlLmFsdCA9IGAke25hbWV9IHBob3RvYDtcclxuICAgIGltYWdlLnNyYyA9IHBob3RvO1xyXG4gICAgaW1hZ2VXcmFwcGVyLmFwcGVuZChpbWFnZSk7XHJcbiAgICBjb25zdCBjYXJkRGVzY3JpcHRpb24gPSBjcmVhdGVFbCgnZGl2JywgJ2NhcmQtZGVzY3JpcHRpb24nKTtcclxuICAgIGNvbnN0IGRyaW5rSW5mbyA9IGNyZWF0ZUVsKCdkaXYnLCAnZHJpbmstaW5mbycpO1xyXG4gICAgZHJpbmtJbmZvLmFwcGVuZChjcmVhdGVFbCgncCcsICdkcmluay1uYW1lJywgbmFtZSksIGNyZWF0ZUVsKCdwJywgJ2RyaW5rLWRlc2NyaXB0aW9uJywgZGVzY3JpcHRpb24pKTtcclxuXHJcbiAgICBjYXJkRGVzY3JpcHRpb24uYXBwZW5kKGRyaW5rSW5mbywgY3JlYXRlRWwoJ3AnLCAnZHJpbmstcHJpY2UnLCBgJCR7cHJpY2V9YCkpO1xyXG4gICAgY2FyZC5hcHBlbmQoaW1hZ2VXcmFwcGVyLCBjYXJkRGVzY3JpcHRpb24pO1xyXG4gICAgY2FyZHNXcmFwcGVyLmFwcGVuZChjYXJkKTtcclxuICB9XHJcblxyXG4gIHByb2R1Y3RKU09OLmZvckVhY2goKGRyaW5rLCBpbmRleCkgPT4ge1xyXG4gICAgaWYgKGRyaW5rLmNhdGVnb3J5ID09PSAnY29mZmVlJykge1xyXG4gICAgICBjcmVhdGVDYXJkKHBob3Rvc1tpbmRleF0sIGRyaW5rKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgY29uc3QgbG9hZE1vcmVCdXR0b24gPSBjcmVhdGVFbCgnYnV0dG9uJywgJ2xvYWQtbW9yZScpO1xyXG4gIGxvYWRNb3JlQnV0dG9uLmluc2VydEFkamFjZW50SFRNTChcclxuICAgICdhZnRlcmJlZ2luJyxcclxuICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIj48cGF0aCBkPVwiTTIxLjg4ODMgMTMuNUMyMS4xNjQ1IDE4LjMxMTMgMTcuMDEzIDIyIDEyIDIyQzYuNDc3MTUgMjIgMiAxNy41MjI4IDIgMTJDMiA2LjQ3NzE1IDYuNDc3MTUgMiAxMiAyQzE2LjEwMDYgMiAxOS42MjQ4IDQuNDY4MTkgMjEuMTY3OSA4XCIgc3Ryb2tlPVwiIzQwM0YzRFwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiLz48cGF0aCBkPVwiTTE3IDhIMjEuNEMyMS43MzE0IDggMjIgNy43MzEzNyAyMiA3LjRWM1wiIHN0cm9rZT1cIiM0MDNGM0RcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIi8+PC9zdmc+JyxcclxuICApO1xyXG4gIHByb2R1Y3RTbGlkZXJDb250YWluZXIuYXBwZW5kKGxvYWRNb3JlQnV0dG9uKTtcclxuXHJcbiAgc2VjdGlvbi5hcHBlbmQoaGVhZGluZywgdGFic0NvbnRhaW5lciwgcHJvZHVjdFNsaWRlckNvbnRhaW5lcik7XHJcbiAgcmV0dXJuIHNlY3Rpb247XHJcbn1cclxuIiwiaW1wb3J0IHsgY3JlYXRlRWwgfSBmcm9tICcuLi8uLi9zaGFyZWQvY3JlYXRlRWwnO1xyXG5pbXBvcnQgeyBjcmVhdGVGb290ZXIgfSBmcm9tICcuLi8uLi93aWRnZXRzL2Zvb3Rlci9jcmVhdGUtZm9vdGVyJztcclxuaW1wb3J0IHsgY3JlYXRlSGVhZGVyIH0gZnJvbSAnLi4vLi4vd2lkZ2V0cy9oZWFkZXIvY3JlYXRlLWhlYWRlcic7XHJcbmltcG9ydCB7IGNyZWF0ZVByb2R1Y3RNZW51IH0gZnJvbSAnLi4vLi4vd2lkZ2V0cy9tZW51LXByb2R1Y3RzL2NyZWF0ZS1tZW51LXByb2R1Y3RzJztcclxuaW1wb3J0ICcuLi9zdHlsZS5jc3MnO1xyXG5cclxuY29uc3QgY29udGFpbmVyID0gY3JlYXRlRWwoJ2RpdicsICdwYWdlLWNvbnRhaW5lcicpO1xyXG5jb25zdCBtYWluID0gY3JlYXRlRWwoJ21haW4nLCAnbWFpbicpO1xyXG5kb2N1bWVudC5ib2R5LmFwcGVuZChjb250YWluZXIpO1xyXG5tYWluLmFwcGVuZChjcmVhdGVQcm9kdWN0TWVudSgpKTtcclxuY29uc3QgW2hlYWRlciwgbGlua3NdID0gY3JlYXRlSGVhZGVyKCk7XHJcbmNvbnRhaW5lci5hcHBlbmQoaGVhZGVyLCBtYWluLCBjcmVhdGVGb290ZXIoKSk7XHJcblxyXG5saW5rc1s1XS5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpO1xyXG5saW5rc1s1XS5ocmVmID0gJyMnO1xyXG5saW5rc1sxXS5ocmVmID0gJy4uL2luZGV4Lmh0bWwjZmF2b3JpdGUtY29mZmVlJztcclxubGlua3NbMl0uaHJlZiA9ICcuLi9pbmRleC5odG1sI2Fib3V0JztcclxubGlua3NbM10uaHJlZiA9ICcuLi9pbmRleC5odG1sI21vYmlsZS1hcHAnO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=