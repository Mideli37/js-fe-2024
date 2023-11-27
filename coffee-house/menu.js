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
  heading.append('Sip, Savor, Smile.', createEl('span', 'cursive', 'It’s coffee time!'));
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

  header.append(container);
  container.append(logo, nav, menuLink);
  nav.append(navUl);
  menuLink.append(menuLinkText, menuLinkImage);

  const linksEl = [logo, ...navItems, menuLink];
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
;// CONCATENATED MODULE: ./src/widgets/menu-products/create-menu-products.js





function createProductMenu() {
  const section = createEl('section', 'menu-section section');
  const heading = createEl('h1', 'menu-heading heading');
  heading.append('Behind each of our cups hides an ', createEl('span', 'cursive', 'amazing surprise'));
  const tabsContainer = createEl('div', 'tabs-container');
  let tabs = [
    ['☕', 'Coffee'],
    ['🫖', 'Tea'],
    ['🍰', 'Dessert'],
  ];
  tabs = tabs.map((tab) => {
    const newTab = createEl('div', 'tab');
    const icon = createEl('div', 'tab-icon', tab[0]);
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

  section.append(heading, tabsContainer, productSliderContainer);
  return section;
}

;// CONCATENATED MODULE: ./src/pages/menu/menu.js






const container = createEl('div', 'page-container');
const main = createEl('main', 'main');
document.body.append(container);
main.append(createProductMenu());
const [header, links] = createHeader()
container.append(header, main, createFooter());

links[5].classList.add('disabled')
links[1].href = '../index.html#favorite-coffee'
links[2].href = '../index.html#about'
links[3].href = '../index.html#mobile-app'
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN4RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3ZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWlkZWxpMzctanNmZTIwMjNxNC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9taWRlbGkzNy1qc2ZlMjAyM3E0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbWlkZWxpMzctanNmZTIwMjNxNC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9taWRlbGkzNy1qc2ZlMjAyM3E0Ly4vc3JjL3NoYXJlZC9jcmVhdGVFbC5qcyIsIndlYnBhY2s6Ly9taWRlbGkzNy1qc2ZlMjAyM3E0Ly4vc3JjL3dpZGdldHMvZm9vdGVyL2NyZWF0ZS1mb290ZXIuanMiLCJ3ZWJwYWNrOi8vbWlkZWxpMzctanNmZTIwMjNxNC8uL3NyYy93aWRnZXRzL2hlYWRlci9jcmVhdGUtaGVhZGVyLmpzIiwid2VicGFjazovL21pZGVsaTM3LWpzZmUyMDIzcTQvLi9zcmMvc2hhcmVkL3Byb2R1Y3QtcGhvdG9zLmpzIiwid2VicGFjazovL21pZGVsaTM3LWpzZmUyMDIzcTQvLi9zcmMvd2lkZ2V0cy9tZW51LXByb2R1Y3RzL2NyZWF0ZS1tZW51LXByb2R1Y3RzLmpzIiwid2VicGFjazovL21pZGVsaTM3LWpzZmUyMDIzcTQvLi9zcmMvcGFnZXMvbWVudS9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbCh0YWcsIGNsYXNzTmFtZSwgdGV4dCkge1xyXG4gIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xyXG4gIGlmIChjbGFzc05hbWUpIHtcclxuICAgIGVsLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcclxuICB9XHJcbiAgaWYgKHRleHQpIHtcclxuICAgIGVsLmFwcGVuZCh0ZXh0KTtcclxuICB9XHJcbiAgcmV0dXJuIGVsO1xyXG59IiwiaW1wb3J0IHsgY3JlYXRlRWwgfSBmcm9tICcuLi8uLi9zaGFyZWQvY3JlYXRlRWwnO1xyXG5pbXBvcnQgdHdpdFNyYyBmcm9tICcuL2Fzc2V0cy90d2l0dGVyLnN2Zyc7XHJcbmltcG9ydCBpbnN0YVNyYyBmcm9tICcuL2Fzc2V0cy9pbnN0YWdyYW0uc3ZnJztcclxuaW1wb3J0IGZiU3JjIGZyb20gJy4vYXNzZXRzL2ZhY2Vib29rLnN2Zyc7XHJcbmltcG9ydCBwaW4gZnJvbSAnLi9hc3NldHMvcGluLWFsdC5zdmcnO1xyXG5pbXBvcnQgcGhvbmUgZnJvbSAnLi9hc3NldHMvcGhvbmUuc3ZnJztcclxuaW1wb3J0IGNsb2NrIGZyb20gJy4vYXNzZXRzL2Nsb2NrLnN2Zyc7XHJcbmltcG9ydCAnLi9mb290ZXIuY3NzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XHJcbiAgY29uc3QgZm9vdGVyID0gY3JlYXRlRWwoJ2Zvb3RlcicsICdmb290ZXInKTtcclxuICBmb290ZXIuaWQgPSAnY29udGFjdC11cyc7XHJcbiAgY29uc3Qgc29jaWFsID0gY3JlYXRlRWwoJ2RpdicsICdzb2NpYWwtY29udGFpbmVyJyk7XHJcbiAgY29uc3QgaGVhZGluZyA9IGNyZWF0ZUVsKCdoMicsICdmb290ZXItaGVhZGluZycpO1xyXG4gIGhlYWRpbmcuYXBwZW5kKCdTaXAsIFNhdm9yLCBTbWlsZS4nLCBjcmVhdGVFbCgnc3BhbicsICdjdXJzaXZlJywgJ0l04oCZcyBjb2ZmZWUgdGltZSEnKSk7XHJcbiAgY29uc3Qgc29jaWFsV3JhcHBlciA9IGNyZWF0ZUVsKCdkaXYnLCAnc29jaWFsLXdyYXBwZXInKTtcclxuXHJcbiAgY29uc3QgdHdpdHRlckxpbmsgPSBjcmVhdGVFbCgnYScsICdzb2NpYWwtbGluaycpO1xyXG4gIHR3aXR0ZXJMaW5rLmhyZWYgPSAnaHR0cHM6Ly90d2l0dGVyLmNvbS8/bGFuZz1lbic7XHJcbiAgY29uc3QgdHdpdHRlckljb24gPSBjcmVhdGVFbCgnaW1nJywgJ3NvY2lhbC1pY29uJyk7XHJcbiAgdHdpdHRlckljb24uYWx0ID0gJ3R3aXR0ZXIgaWNvbic7XHJcbiAgdHdpdHRlckljb24uc3JjID0gdHdpdFNyYztcclxuICB0d2l0dGVyTGluay5hcHBlbmQodHdpdHRlckljb24pO1xyXG5cclxuICBjb25zdCBpbnN0YUxpbmsgPSBjcmVhdGVFbCgnYScsICdzb2NpYWwtbGluaycpO1xyXG4gIGluc3RhTGluay5ocmVmID0gJ2h0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vJztcclxuICBjb25zdCBpbnN0YUljb24gPSBjcmVhdGVFbCgnaW1nJywgJ3NvY2lhbC1pY29uJyk7XHJcbiAgaW5zdGFJY29uLmFsdCA9ICdpbnN0YSBpY29uJztcclxuICBpbnN0YUljb24uc3JjID0gaW5zdGFTcmM7XHJcbiAgaW5zdGFMaW5rLmFwcGVuZChpbnN0YUljb24pO1xyXG5cclxuICBjb25zdCBmYkxpbmsgPSBjcmVhdGVFbCgnYScsICdzb2NpYWwtbGluaycpO1xyXG4gIGZiTGluay5ocmVmID0gJ2h0dHBzOi8vdWstdWEuZmFjZWJvb2suY29tLyc7XHJcbiAgY29uc3QgZmJJY29uID0gY3JlYXRlRWwoJ2ltZycsICdzb2NpYWwtaWNvbicpO1xyXG4gIGZiSWNvbi5hbHQgPSAnZmIgaWNvbic7XHJcbiAgZmJJY29uLnNyYyA9IGZiU3JjO1xyXG4gIGZiTGluay5hcHBlbmQoZmJJY29uKTtcclxuXHJcbiAgc29jaWFsV3JhcHBlci5hcHBlbmQodHdpdHRlckxpbmssIGluc3RhTGluaywgZmJMaW5rKTtcclxuICBzb2NpYWwuYXBwZW5kKGhlYWRpbmcsIHNvY2lhbFdyYXBwZXIpO1xyXG5cclxuICBjb25zdCBjb250YWN0cyA9IGNyZWF0ZUVsKCdkaXYnLCAnY29udGFjdHMtd3JhcHBlcicpO1xyXG4gIGNvbnN0IGNvbnRhY3RzSGVhZGluZyA9IGNyZWF0ZUVsKCdoMycsICdjb250YWN0cy1oZWFkaW5nJywgJ0NvbnRhY3QgdXMnKTtcclxuICBjb25zdCBjb250YWN0c0xpc3QgPSBjcmVhdGVFbCgndWwnLCAnY29udGFjdHMtbGlzdCcpO1xyXG5cclxuICBmdW5jdGlvbiBjcmVhdGVMSShpY29uLCB0ZXh0LCBsaW5rKSB7XHJcbiAgICBjb25zdCBsaSA9IGNyZWF0ZUVsKCdsaScsICdjb250YWN0LWl0ZW0nKTtcclxuICAgIGNvbnN0IGxpSWNvbiA9IGNyZWF0ZUVsKCdpbWcnLCAnY29udGFjdC1pY29uJyk7XHJcbiAgICBsaUljb24uYWx0ID0gJ21hcmtlcic7XHJcbiAgICBsaUljb24uc3JjID0gaWNvbjtcclxuICAgIGlmIChsaW5rKSB7XHJcbiAgICAgIGNvbnN0IGxpTGluayA9IGNyZWF0ZUVsKCdhJywgJ2NvbnRhY3QtbGluaycpO1xyXG4gICAgICBsaUxpbmsuaHJlZiA9IGxpbms7XHJcbiAgICAgIGxpTGluay50YXJnZXQgPSAnYmxhbmsnO1xyXG5cclxuICAgICAgbGkuYXBwZW5kKGxpTGluayk7XHJcbiAgICAgIGxpTGluay5hcHBlbmQobGlJY29uLCB0ZXh0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxpLmFwcGVuZChsaUljb24sIHRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnRhY3RzTGlzdC5hcHBlbmQobGkpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlTEkocGluLCAnODU1OCBHcmVlbiBSZC4sIExBJywgJ2h0dHBzOi8vbWFwcy5hcHAuZ29vLmdsLzIycDJiTmlOZ1M2WEVyTFE5Jyk7XHJcbiAgY3JlYXRlTEkocGhvbmUsICcrMSAoNjAzKSA1NTUtMDEyMycsICd0ZWw6KzEoNjAzKTU1NS0wMTIzJyk7XHJcbiAgY3JlYXRlTEkoY2xvY2ssICdNb24tU2F0OiA5OjAwIEFNIOKAkyAyMzowMCBQTScpO1xyXG5cclxuICBjb250YWN0cy5hcHBlbmQoY29udGFjdHNIZWFkaW5nLCBjb250YWN0c0xpc3QpO1xyXG5cclxuICBmb290ZXIuYXBwZW5kKHNvY2lhbCwgY29udGFjdHMpO1xyXG4gIHJldHVybiBmb290ZXI7XHJcbn1cclxuIiwiaW1wb3J0IHsgY3JlYXRlRWwgfSBmcm9tICcuLi8uLi9zaGFyZWQvY3JlYXRlRWwnO1xyXG5pbXBvcnQgbG9nb0ltYWdlIGZyb20gJy4vYXNzZXRzL2xvZ28uc3ZnJztcclxuaW1wb3J0IGN1cEltYWdlIGZyb20gJy4vYXNzZXRzL2NvZmZlZS1jdXAuc3ZnJztcclxuaW1wb3J0ICcuL2hlYWRlci5jc3MnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcclxuICBjb25zdCBoZWFkZXIgPSBjcmVhdGVFbCgnaGVhZGVyJywgJ2hlYWRlcicpO1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUVsKCdkaXYnLCAnaGVhZGVyLWNvbnRhaW5lcicpO1xyXG4gIGNvbnN0IGxvZ28gPSBjcmVhdGVFbCgnYScsICdoZWFkZXItbG9nbycpO1xyXG4gIGxvZ28uaHJlZiA9ICcuLi9pbmRleC5odG1sJztcclxuICBjb25zdCBsb2dvSW1nID0gY3JlYXRlRWwoJ2ltZycpO1xyXG4gIGxvZ28uYXBwZW5kKGxvZ29JbWcpO1xyXG4gIGxvZ29JbWcuYWx0ID0gJ2NvZmZlZSBob3VzZSBsb2dvJztcclxuICBsb2dvSW1nLnNyYyA9IGxvZ29JbWFnZTtcclxuICBjb25zdCBuYXYgPSBjcmVhdGVFbCgnbmF2JywgJ25hdicpO1xyXG4gIGNvbnN0IG5hdlVsID0gY3JlYXRlRWwoJ3VsJywgJ25hdi11bCcpO1xyXG4gIGxldCBuYXZJdGVtcyA9IFsnRmF2b3JpdGUgY29mZmVlJywgJ0Fib3V0JywgJ01vYmlsZSBhcHAnLCAnQ29udGFjdCB1cyddO1xyXG4gIG5hdkl0ZW1zID0gbmF2SXRlbXMubWFwKChpdGVtKSA9PiB7XHJcbiAgICBjb25zdCBuZXdJdGVtID0gY3JlYXRlRWwoJ2xpJywgJ25hdi1pdGVtJyk7XHJcbiAgICBuYXZVbC5hcHBlbmQobmV3SXRlbSk7XHJcbiAgICBjb25zdCBuZXdJdGVtTGluayA9IGNyZWF0ZUVsKCdhJywgJ25hdi1pdGVtLWxpbmsnLCBpdGVtKTtcclxuICAgIG5ld0l0ZW0uYXBwZW5kKG5ld0l0ZW1MaW5rKTtcclxuICAgIG5ld0l0ZW1MaW5rLmhyZWYgPSBgIyR7aXRlbS5yZXBsYWNlQWxsKCcgJywgJy0nKS50b0xvd2VyQ2FzZSgpfWA7XHJcbiAgICByZXR1cm4gbmV3SXRlbUxpbms7XHJcbiAgfSk7XHJcbiAgY29uc3QgbWVudUxpbmsgPSBjcmVhdGVFbCgnYScsICdtZW51LWxpbmsnKTtcclxuICBtZW51TGluay5ocmVmID0gJy4vbWVudS9pbmRleC5odG1sJztcclxuICBjb25zdCBtZW51TGlua1RleHQgPSBjcmVhdGVFbCgnc3BhbicsICdtZW51LWxpbmstdGV4dCcsICdNZW51Jyk7XHJcbiAgY29uc3QgbWVudUxpbmtJbWFnZSA9IGNyZWF0ZUVsKCdpbWcnLCAnbWVudS1saW5rLWltYWdlJyk7XHJcbiAgbWVudUxpbmtJbWFnZS5hbHQgPSAnY3VwIGljb24nO1xyXG4gIG1lbnVMaW5rSW1hZ2Uuc3JjID0gY3VwSW1hZ2U7XHJcblxyXG4gIGhlYWRlci5hcHBlbmQoY29udGFpbmVyKTtcclxuICBjb250YWluZXIuYXBwZW5kKGxvZ28sIG5hdiwgbWVudUxpbmspO1xyXG4gIG5hdi5hcHBlbmQobmF2VWwpO1xyXG4gIG1lbnVMaW5rLmFwcGVuZChtZW51TGlua1RleHQsIG1lbnVMaW5rSW1hZ2UpO1xyXG5cclxuICBjb25zdCBsaW5rc0VsID0gW2xvZ28sIC4uLm5hdkl0ZW1zLCBtZW51TGlua107XHJcbiAgcmV0dXJuIFtoZWFkZXIsIGxpbmtzRWxdO1xyXG59XHJcbiIsImltcG9ydCBjb2ZmZWUxIGZyb20gJy4vYXNzZXRzL2NvZmZlZS0xLmpwZyc7XHJcbmltcG9ydCBjb2ZmZWUyIGZyb20gJy4vYXNzZXRzL2NvZmZlZS0yLmpwZyc7XHJcbmltcG9ydCBjb2ZmZWUzIGZyb20gJy4vYXNzZXRzL2NvZmZlZS0zLmpwZyc7XHJcbmltcG9ydCBjb2ZmZWU0IGZyb20gJy4vYXNzZXRzL2NvZmZlZS00LmpwZyc7XHJcbmltcG9ydCBjb2ZmZWU1IGZyb20gJy4vYXNzZXRzL2NvZmZlZS01LmpwZyc7XHJcbmltcG9ydCBjb2ZmZWU2IGZyb20gJy4vYXNzZXRzL2NvZmZlZS02LmpwZyc7XHJcbmltcG9ydCBjb2ZmZWU3IGZyb20gJy4vYXNzZXRzL2NvZmZlZS03LmpwZyc7XHJcbmltcG9ydCBjb2ZmZWU4IGZyb20gJy4vYXNzZXRzL2NvZmZlZS04LmpwZyc7XHJcblxyXG5jb25zdCBwaG90b3MgPSBbY29mZmVlMSwgY29mZmVlMiwgY29mZmVlMywgY29mZmVlNCwgY29mZmVlNSwgY29mZmVlNiwgY29mZmVlNywgY29mZmVlOF07XHJcbmV4cG9ydCBkZWZhdWx0IHBob3RvcyIsImltcG9ydCB7IGNyZWF0ZUVsIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2NyZWF0ZUVsJztcclxuaW1wb3J0ICcuL21lbnUtcHJvZHVjdC5jc3MnO1xyXG5pbXBvcnQgcHJvZHVjdEpTT04gZnJvbSAnLi4vLi4vc2hhcmVkL3Byb2R1Y3RzLmpzb24nO1xyXG5pbXBvcnQgcGhvdG9zIGZyb20gJy4uLy4uL3NoYXJlZC9wcm9kdWN0LXBob3Rvcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvZHVjdE1lbnUoKSB7XHJcbiAgY29uc3Qgc2VjdGlvbiA9IGNyZWF0ZUVsKCdzZWN0aW9uJywgJ21lbnUtc2VjdGlvbiBzZWN0aW9uJyk7XHJcbiAgY29uc3QgaGVhZGluZyA9IGNyZWF0ZUVsKCdoMScsICdtZW51LWhlYWRpbmcgaGVhZGluZycpO1xyXG4gIGhlYWRpbmcuYXBwZW5kKCdCZWhpbmQgZWFjaCBvZiBvdXIgY3VwcyBoaWRlcyBhbiAnLCBjcmVhdGVFbCgnc3BhbicsICdjdXJzaXZlJywgJ2FtYXppbmcgc3VycHJpc2UnKSk7XHJcbiAgY29uc3QgdGFic0NvbnRhaW5lciA9IGNyZWF0ZUVsKCdkaXYnLCAndGFicy1jb250YWluZXInKTtcclxuICBsZXQgdGFicyA9IFtcclxuICAgIFsn4piVJywgJ0NvZmZlZSddLFxyXG4gICAgWyfwn6uWJywgJ1RlYSddLFxyXG4gICAgWyfwn42wJywgJ0Rlc3NlcnQnXSxcclxuICBdO1xyXG4gIHRhYnMgPSB0YWJzLm1hcCgodGFiKSA9PiB7XHJcbiAgICBjb25zdCBuZXdUYWIgPSBjcmVhdGVFbCgnZGl2JywgJ3RhYicpO1xyXG4gICAgY29uc3QgaWNvbiA9IGNyZWF0ZUVsKCdkaXYnLCAndGFiLWljb24nLCB0YWJbMF0pO1xyXG4gICAgY29uc3QgdGV4dCA9IGNyZWF0ZUVsKCdzcGFuJywgJ3RhYi10ZXh0JywgdGFiWzFdKTtcclxuICAgIG5ld1RhYi5hcHBlbmQoaWNvbiwgdGV4dCk7XHJcbiAgICB0YWJzQ29udGFpbmVyLmFwcGVuZChuZXdUYWIpO1xyXG4gICAgcmV0dXJuIG5ld1RhYjtcclxuICB9KTtcclxuXHJcbiAgdGFic1swXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHJcbiAgY29uc3QgcHJvZHVjdFNsaWRlckNvbnRhaW5lciA9IGNyZWF0ZUVsKCdkaXYnLCAncHJvZHVjdC1zbGlkZXItd3JhcHBlcicpO1xyXG4gIGNvbnN0IGNhcmRzV3JhcHBlciA9IGNyZWF0ZUVsKCdkaXYnLCAnY2FyZHMtd3JhcHBlcicpO1xyXG4gIHByb2R1Y3RTbGlkZXJDb250YWluZXIuYXBwZW5kKGNhcmRzV3JhcHBlcik7XHJcblxyXG4gIGZ1bmN0aW9uIGNyZWF0ZUNhcmQocGhvdG8sIGRyaW5rKSB7XHJcbiAgICBjb25zdCB7IGRlc2NyaXB0aW9uLCBuYW1lLCBwcmljZSB9ID0gZHJpbms7XHJcbiAgICBjb25zdCBjYXJkID0gY3JlYXRlRWwoJ2RpdicsICdkcmluay1jYXJkJyk7XHJcbiAgICBjb25zdCBpbWFnZVdyYXBwZXIgPSBjcmVhdGVFbCgnZGl2JywgJ2ltYWdlLXdyYXBwZXInKTtcclxuICAgIGNvbnN0IGltYWdlID0gY3JlYXRlRWwoJ2ltZycsICdkcmluay1pbWFnZScpO1xyXG4gICAgaW1hZ2UuYWx0ID0gYCR7bmFtZX0gcGhvdG9gO1xyXG4gICAgaW1hZ2Uuc3JjID0gcGhvdG87XHJcbiAgICBpbWFnZVdyYXBwZXIuYXBwZW5kKGltYWdlKTtcclxuICAgIGNvbnN0IGNhcmREZXNjcmlwdGlvbiA9IGNyZWF0ZUVsKCdkaXYnLCAnY2FyZC1kZXNjcmlwdGlvbicpO1xyXG4gICAgY29uc3QgZHJpbmtJbmZvID0gY3JlYXRlRWwoJ2RpdicsICdkcmluay1pbmZvJyk7XHJcbiAgICBkcmlua0luZm8uYXBwZW5kKGNyZWF0ZUVsKCdwJywgJ2RyaW5rLW5hbWUnLCBuYW1lKSwgY3JlYXRlRWwoJ3AnLCAnZHJpbmstZGVzY3JpcHRpb24nLCBkZXNjcmlwdGlvbikpO1xyXG5cclxuICAgIGNhcmREZXNjcmlwdGlvbi5hcHBlbmQoZHJpbmtJbmZvLCBjcmVhdGVFbCgncCcsICdkcmluay1wcmljZScsIGAkJHtwcmljZX1gKSk7XHJcbiAgICBjYXJkLmFwcGVuZChpbWFnZVdyYXBwZXIsIGNhcmREZXNjcmlwdGlvbik7XHJcbiAgICBjYXJkc1dyYXBwZXIuYXBwZW5kKGNhcmQpO1xyXG4gIH1cclxuXHJcbiAgcHJvZHVjdEpTT04uZm9yRWFjaCgoZHJpbmssIGluZGV4KSA9PiB7XHJcbiAgICBpZiAoZHJpbmsuY2F0ZWdvcnkgPT09ICdjb2ZmZWUnKSB7XHJcbiAgICAgIGNyZWF0ZUNhcmQocGhvdG9zW2luZGV4XSwgZHJpbmspO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBzZWN0aW9uLmFwcGVuZChoZWFkaW5nLCB0YWJzQ29udGFpbmVyLCBwcm9kdWN0U2xpZGVyQ29udGFpbmVyKTtcclxuICByZXR1cm4gc2VjdGlvbjtcclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVFbCB9IGZyb20gJy4uLy4uL3NoYXJlZC9jcmVhdGVFbCc7XHJcbmltcG9ydCB7IGNyZWF0ZUZvb3RlciB9IGZyb20gJy4uLy4uL3dpZGdldHMvZm9vdGVyL2NyZWF0ZS1mb290ZXInO1xyXG5pbXBvcnQgeyBjcmVhdGVIZWFkZXIgfSBmcm9tICcuLi8uLi93aWRnZXRzL2hlYWRlci9jcmVhdGUtaGVhZGVyJztcclxuaW1wb3J0IHsgY3JlYXRlUHJvZHVjdE1lbnUgfSBmcm9tICcuLi8uLi93aWRnZXRzL21lbnUtcHJvZHVjdHMvY3JlYXRlLW1lbnUtcHJvZHVjdHMnO1xyXG5pbXBvcnQgJy4uL3N0eWxlLmNzcydcclxuXHJcbmNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUVsKCdkaXYnLCAncGFnZS1jb250YWluZXInKTtcclxuY29uc3QgbWFpbiA9IGNyZWF0ZUVsKCdtYWluJywgJ21haW4nKTtcclxuZG9jdW1lbnQuYm9keS5hcHBlbmQoY29udGFpbmVyKTtcclxubWFpbi5hcHBlbmQoY3JlYXRlUHJvZHVjdE1lbnUoKSk7XHJcbmNvbnN0IFtoZWFkZXIsIGxpbmtzXSA9IGNyZWF0ZUhlYWRlcigpXHJcbmNvbnRhaW5lci5hcHBlbmQoaGVhZGVyLCBtYWluLCBjcmVhdGVGb290ZXIoKSk7XHJcblxyXG5saW5rc1s1XS5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpXHJcbmxpbmtzWzFdLmhyZWYgPSAnLi4vaW5kZXguaHRtbCNmYXZvcml0ZS1jb2ZmZWUnXHJcbmxpbmtzWzJdLmhyZWYgPSAnLi4vaW5kZXguaHRtbCNhYm91dCdcclxubGlua3NbM10uaHJlZiA9ICcuLi9pbmRleC5odG1sI21vYmlsZS1hcHAnIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9