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
    icon.src = tab[0]
    icon.alt = tab[1]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN4RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL21pZGVsaTM3LWpzZmUyMDIzcTQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWlkZWxpMzctanNmZTIwMjNxNC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL21pZGVsaTM3LWpzZmUyMDIzcTQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vbWlkZWxpMzctanNmZTIwMjNxNC8uL3NyYy9zaGFyZWQvY3JlYXRlRWwuanMiLCJ3ZWJwYWNrOi8vbWlkZWxpMzctanNmZTIwMjNxNC8uL3NyYy93aWRnZXRzL2Zvb3Rlci9jcmVhdGUtZm9vdGVyLmpzIiwid2VicGFjazovL21pZGVsaTM3LWpzZmUyMDIzcTQvLi9zcmMvd2lkZ2V0cy9oZWFkZXIvY3JlYXRlLWhlYWRlci5qcyIsIndlYnBhY2s6Ly9taWRlbGkzNy1qc2ZlMjAyM3E0Ly4vc3JjL3NoYXJlZC9wcm9kdWN0LXBob3Rvcy5qcyIsIndlYnBhY2s6Ly9taWRlbGkzNy1qc2ZlMjAyM3E0Ly4vc3JjL3dpZGdldHMvbWVudS1wcm9kdWN0cy9jcmVhdGUtbWVudS1wcm9kdWN0cy5qcyIsIndlYnBhY2s6Ly9taWRlbGkzNy1qc2ZlMjAyM3E0Ly4vc3JjL3BhZ2VzL21lbnUvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlRWwodGFnLCBjbGFzc05hbWUsIHRleHQpIHtcclxuICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcclxuICBpZiAoY2xhc3NOYW1lKSB7XHJcbiAgICBlbC5jbGFzc05hbWUgPSBjbGFzc05hbWU7XHJcbiAgfVxyXG4gIGlmICh0ZXh0KSB7XHJcbiAgICBlbC5hcHBlbmQodGV4dCk7XHJcbiAgfVxyXG4gIHJldHVybiBlbDtcclxufSIsImltcG9ydCB7IGNyZWF0ZUVsIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2NyZWF0ZUVsJztcclxuaW1wb3J0IHR3aXRTcmMgZnJvbSAnLi9hc3NldHMvdHdpdHRlci5zdmcnO1xyXG5pbXBvcnQgaW5zdGFTcmMgZnJvbSAnLi9hc3NldHMvaW5zdGFncmFtLnN2Zyc7XHJcbmltcG9ydCBmYlNyYyBmcm9tICcuL2Fzc2V0cy9mYWNlYm9vay5zdmcnO1xyXG5pbXBvcnQgcGluIGZyb20gJy4vYXNzZXRzL3Bpbi1hbHQuc3ZnJztcclxuaW1wb3J0IHBob25lIGZyb20gJy4vYXNzZXRzL3Bob25lLnN2Zyc7XHJcbmltcG9ydCBjbG9jayBmcm9tICcuL2Fzc2V0cy9jbG9jay5zdmcnO1xyXG5pbXBvcnQgJy4vZm9vdGVyLmNzcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xyXG4gIGNvbnN0IGZvb3RlciA9IGNyZWF0ZUVsKCdmb290ZXInLCAnZm9vdGVyJyk7XHJcbiAgZm9vdGVyLmlkID0gJ2NvbnRhY3QtdXMnO1xyXG4gIGNvbnN0IHNvY2lhbCA9IGNyZWF0ZUVsKCdkaXYnLCAnc29jaWFsLWNvbnRhaW5lcicpO1xyXG4gIGNvbnN0IGhlYWRpbmcgPSBjcmVhdGVFbCgnaDInLCAnZm9vdGVyLWhlYWRpbmcnKTtcclxuICBoZWFkaW5nLmFwcGVuZCgnU2lwLCBTYXZvciwgU21pbGUuJywgY3JlYXRlRWwoJ3NwYW4nLCAnY3Vyc2l2ZScsICdJdOKAmXMgY29mZmVlIHRpbWUhJykpO1xyXG4gIGNvbnN0IHNvY2lhbFdyYXBwZXIgPSBjcmVhdGVFbCgnZGl2JywgJ3NvY2lhbC13cmFwcGVyJyk7XHJcblxyXG4gIGNvbnN0IHR3aXR0ZXJMaW5rID0gY3JlYXRlRWwoJ2EnLCAnc29jaWFsLWxpbmsnKTtcclxuICB0d2l0dGVyTGluay5ocmVmID0gJ2h0dHBzOi8vdHdpdHRlci5jb20vP2xhbmc9ZW4nO1xyXG4gIGNvbnN0IHR3aXR0ZXJJY29uID0gY3JlYXRlRWwoJ2ltZycsICdzb2NpYWwtaWNvbicpO1xyXG4gIHR3aXR0ZXJJY29uLmFsdCA9ICd0d2l0dGVyIGljb24nO1xyXG4gIHR3aXR0ZXJJY29uLnNyYyA9IHR3aXRTcmM7XHJcbiAgdHdpdHRlckxpbmsuYXBwZW5kKHR3aXR0ZXJJY29uKTtcclxuXHJcbiAgY29uc3QgaW5zdGFMaW5rID0gY3JlYXRlRWwoJ2EnLCAnc29jaWFsLWxpbmsnKTtcclxuICBpbnN0YUxpbmsuaHJlZiA9ICdodHRwczovL3d3dy5pbnN0YWdyYW0uY29tLyc7XHJcbiAgY29uc3QgaW5zdGFJY29uID0gY3JlYXRlRWwoJ2ltZycsICdzb2NpYWwtaWNvbicpO1xyXG4gIGluc3RhSWNvbi5hbHQgPSAnaW5zdGEgaWNvbic7XHJcbiAgaW5zdGFJY29uLnNyYyA9IGluc3RhU3JjO1xyXG4gIGluc3RhTGluay5hcHBlbmQoaW5zdGFJY29uKTtcclxuXHJcbiAgY29uc3QgZmJMaW5rID0gY3JlYXRlRWwoJ2EnLCAnc29jaWFsLWxpbmsnKTtcclxuICBmYkxpbmsuaHJlZiA9ICdodHRwczovL3VrLXVhLmZhY2Vib29rLmNvbS8nO1xyXG4gIGNvbnN0IGZiSWNvbiA9IGNyZWF0ZUVsKCdpbWcnLCAnc29jaWFsLWljb24nKTtcclxuICBmYkljb24uYWx0ID0gJ2ZiIGljb24nO1xyXG4gIGZiSWNvbi5zcmMgPSBmYlNyYztcclxuICBmYkxpbmsuYXBwZW5kKGZiSWNvbik7XHJcblxyXG4gIHNvY2lhbFdyYXBwZXIuYXBwZW5kKHR3aXR0ZXJMaW5rLCBpbnN0YUxpbmssIGZiTGluayk7XHJcbiAgc29jaWFsLmFwcGVuZChoZWFkaW5nLCBzb2NpYWxXcmFwcGVyKTtcclxuXHJcbiAgY29uc3QgY29udGFjdHMgPSBjcmVhdGVFbCgnZGl2JywgJ2NvbnRhY3RzLXdyYXBwZXInKTtcclxuICBjb25zdCBjb250YWN0c0hlYWRpbmcgPSBjcmVhdGVFbCgnaDMnLCAnY29udGFjdHMtaGVhZGluZycsICdDb250YWN0IHVzJyk7XHJcbiAgY29uc3QgY29udGFjdHNMaXN0ID0gY3JlYXRlRWwoJ3VsJywgJ2NvbnRhY3RzLWxpc3QnKTtcclxuXHJcbiAgZnVuY3Rpb24gY3JlYXRlTEkoaWNvbiwgdGV4dCwgbGluaykge1xyXG4gICAgY29uc3QgbGkgPSBjcmVhdGVFbCgnbGknLCAnY29udGFjdC1pdGVtJyk7XHJcbiAgICBjb25zdCBsaUljb24gPSBjcmVhdGVFbCgnaW1nJywgJ2NvbnRhY3QtaWNvbicpO1xyXG4gICAgbGlJY29uLmFsdCA9ICdtYXJrZXInO1xyXG4gICAgbGlJY29uLnNyYyA9IGljb247XHJcbiAgICBpZiAobGluaykge1xyXG4gICAgICBjb25zdCBsaUxpbmsgPSBjcmVhdGVFbCgnYScsICdjb250YWN0LWxpbmsnKTtcclxuICAgICAgbGlMaW5rLmhyZWYgPSBsaW5rO1xyXG4gICAgICBsaUxpbmsudGFyZ2V0ID0gJ2JsYW5rJztcclxuXHJcbiAgICAgIGxpLmFwcGVuZChsaUxpbmspO1xyXG4gICAgICBsaUxpbmsuYXBwZW5kKGxpSWNvbiwgdGV4dCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsaS5hcHBlbmQobGlJY29uLCB0ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBjb250YWN0c0xpc3QuYXBwZW5kKGxpKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUxJKHBpbiwgJzg1NTggR3JlZW4gUmQuLCBMQScsICdodHRwczovL21hcHMuYXBwLmdvby5nbC8yMnAyYk5pTmdTNlhFckxROScpO1xyXG4gIGNyZWF0ZUxJKHBob25lLCAnKzEgKDYwMykgNTU1LTAxMjMnLCAndGVsOisxKDYwMyk1NTUtMDEyMycpO1xyXG4gIGNyZWF0ZUxJKGNsb2NrLCAnTW9uLVNhdDogOTowMCBBTSDigJMgMjM6MDAgUE0nKTtcclxuXHJcbiAgY29udGFjdHMuYXBwZW5kKGNvbnRhY3RzSGVhZGluZywgY29udGFjdHNMaXN0KTtcclxuXHJcbiAgZm9vdGVyLmFwcGVuZChzb2NpYWwsIGNvbnRhY3RzKTtcclxuICByZXR1cm4gZm9vdGVyO1xyXG59XHJcbiIsImltcG9ydCB7IGNyZWF0ZUVsIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2NyZWF0ZUVsJztcclxuaW1wb3J0IGxvZ29JbWFnZSBmcm9tICcuL2Fzc2V0cy9sb2dvLnN2Zyc7XHJcbmltcG9ydCBjdXBJbWFnZSBmcm9tICcuL2Fzc2V0cy9jb2ZmZWUtY3VwLnN2Zyc7XHJcbmltcG9ydCAnLi9oZWFkZXIuY3NzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XHJcbiAgY29uc3QgaGVhZGVyID0gY3JlYXRlRWwoJ2hlYWRlcicsICdoZWFkZXInKTtcclxuICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbCgnZGl2JywgJ2hlYWRlci1jb250YWluZXInKTtcclxuICBjb25zdCBsb2dvID0gY3JlYXRlRWwoJ2EnLCAnaGVhZGVyLWxvZ28nKTtcclxuICBsb2dvLmhyZWYgPSAnLi4vaW5kZXguaHRtbCc7XHJcbiAgY29uc3QgbG9nb0ltZyA9IGNyZWF0ZUVsKCdpbWcnKTtcclxuICBsb2dvLmFwcGVuZChsb2dvSW1nKTtcclxuICBsb2dvSW1nLmFsdCA9ICdjb2ZmZWUgaG91c2UgbG9nbyc7XHJcbiAgbG9nb0ltZy5zcmMgPSBsb2dvSW1hZ2U7XHJcbiAgY29uc3QgbmF2ID0gY3JlYXRlRWwoJ25hdicsICduYXYnKTtcclxuICBjb25zdCBuYXZVbCA9IGNyZWF0ZUVsKCd1bCcsICduYXYtdWwnKTtcclxuICBsZXQgbmF2SXRlbXMgPSBbJ0Zhdm9yaXRlIGNvZmZlZScsICdBYm91dCcsICdNb2JpbGUgYXBwJywgJ0NvbnRhY3QgdXMnXTtcclxuICBuYXZJdGVtcyA9IG5hdkl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgY29uc3QgbmV3SXRlbSA9IGNyZWF0ZUVsKCdsaScsICduYXYtaXRlbScpO1xyXG4gICAgbmF2VWwuYXBwZW5kKG5ld0l0ZW0pO1xyXG4gICAgY29uc3QgbmV3SXRlbUxpbmsgPSBjcmVhdGVFbCgnYScsICduYXYtaXRlbS1saW5rJywgaXRlbSk7XHJcbiAgICBuZXdJdGVtLmFwcGVuZChuZXdJdGVtTGluayk7XHJcbiAgICBuZXdJdGVtTGluay5ocmVmID0gYCMke2l0ZW0ucmVwbGFjZUFsbCgnICcsICctJykudG9Mb3dlckNhc2UoKX1gO1xyXG4gICAgcmV0dXJuIG5ld0l0ZW1MaW5rO1xyXG4gIH0pO1xyXG4gIGNvbnN0IG1lbnVMaW5rID0gY3JlYXRlRWwoJ2EnLCAnbWVudS1saW5rJyk7XHJcbiAgbWVudUxpbmsuaHJlZiA9ICcuL21lbnUvaW5kZXguaHRtbCc7XHJcbiAgY29uc3QgbWVudUxpbmtUZXh0ID0gY3JlYXRlRWwoJ3NwYW4nLCAnbWVudS1saW5rLXRleHQnLCAnTWVudScpO1xyXG4gIGNvbnN0IG1lbnVMaW5rSW1hZ2UgPSBjcmVhdGVFbCgnaW1nJywgJ21lbnUtbGluay1pbWFnZScpO1xyXG4gIG1lbnVMaW5rSW1hZ2UuYWx0ID0gJ2N1cCBpY29uJztcclxuICBtZW51TGlua0ltYWdlLnNyYyA9IGN1cEltYWdlO1xyXG5cclxuICBoZWFkZXIuYXBwZW5kKGNvbnRhaW5lcik7XHJcbiAgY29udGFpbmVyLmFwcGVuZChsb2dvLCBuYXYsIG1lbnVMaW5rKTtcclxuICBuYXYuYXBwZW5kKG5hdlVsKTtcclxuICBtZW51TGluay5hcHBlbmQobWVudUxpbmtUZXh0LCBtZW51TGlua0ltYWdlKTtcclxuXHJcbiAgY29uc3QgbGlua3NFbCA9IFtsb2dvLCAuLi5uYXZJdGVtcywgbWVudUxpbmtdO1xyXG4gIHJldHVybiBbaGVhZGVyLCBsaW5rc0VsXTtcclxufVxyXG4iLCJpbXBvcnQgY29mZmVlMSBmcm9tICcuL2Fzc2V0cy9jb2ZmZWUtMS5qcGcnO1xyXG5pbXBvcnQgY29mZmVlMiBmcm9tICcuL2Fzc2V0cy9jb2ZmZWUtMi5qcGcnO1xyXG5pbXBvcnQgY29mZmVlMyBmcm9tICcuL2Fzc2V0cy9jb2ZmZWUtMy5qcGcnO1xyXG5pbXBvcnQgY29mZmVlNCBmcm9tICcuL2Fzc2V0cy9jb2ZmZWUtNC5qcGcnO1xyXG5pbXBvcnQgY29mZmVlNSBmcm9tICcuL2Fzc2V0cy9jb2ZmZWUtNS5qcGcnO1xyXG5pbXBvcnQgY29mZmVlNiBmcm9tICcuL2Fzc2V0cy9jb2ZmZWUtNi5qcGcnO1xyXG5pbXBvcnQgY29mZmVlNyBmcm9tICcuL2Fzc2V0cy9jb2ZmZWUtNy5qcGcnO1xyXG5pbXBvcnQgY29mZmVlOCBmcm9tICcuL2Fzc2V0cy9jb2ZmZWUtOC5qcGcnO1xyXG5cclxuY29uc3QgcGhvdG9zID0gW2NvZmZlZTEsIGNvZmZlZTIsIGNvZmZlZTMsIGNvZmZlZTQsIGNvZmZlZTUsIGNvZmZlZTYsIGNvZmZlZTcsIGNvZmZlZThdO1xyXG5leHBvcnQgZGVmYXVsdCBwaG90b3MiLCJpbXBvcnQgeyBjcmVhdGVFbCB9IGZyb20gJy4uLy4uL3NoYXJlZC9jcmVhdGVFbCc7XHJcbmltcG9ydCAnLi9tZW51LXByb2R1Y3QuY3NzJztcclxuaW1wb3J0IHByb2R1Y3RKU09OIGZyb20gJy4uLy4uL3NoYXJlZC9wcm9kdWN0cy5qc29uJztcclxuaW1wb3J0IHBob3RvcyBmcm9tICcuLi8uLi9zaGFyZWQvcHJvZHVjdC1waG90b3MnO1xyXG5pbXBvcnQga2V0dGxlSW1nIGZyb20gJy4vYXNzZXRzL2tldHRsZS5wbmcnXHJcbmltcG9ydCBjb2ZmZWVJbWcgZnJvbSAnLi9hc3NldHMvY29mZmVlLnBuZydcclxuaW1wb3J0IGNha2VJbWcgZnJvbSAnLi9hc3NldHMvY2FrZS5wbmcnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvZHVjdE1lbnUoKSB7XHJcbiAgY29uc3Qgc2VjdGlvbiA9IGNyZWF0ZUVsKCdzZWN0aW9uJywgJ21lbnUtc2VjdGlvbiBzZWN0aW9uJyk7XHJcbiAgY29uc3QgaGVhZGluZyA9IGNyZWF0ZUVsKCdoMScsICdtZW51LWhlYWRpbmcgaGVhZGluZycpO1xyXG4gIGhlYWRpbmcuYXBwZW5kKCdCZWhpbmQgZWFjaCBvZiBvdXIgY3VwcyBoaWRlcyBhbiAnLCBjcmVhdGVFbCgnc3BhbicsICdjdXJzaXZlJywgJ2FtYXppbmcgc3VycHJpc2UnKSk7XHJcbiAgY29uc3QgdGFic0NvbnRhaW5lciA9IGNyZWF0ZUVsKCdkaXYnLCAndGFicy1jb250YWluZXInKTtcclxuICBsZXQgdGFicyA9IFtcclxuICAgIFtjb2ZmZWVJbWcsICdDb2ZmZWUnXSxcclxuICAgIFtrZXR0bGVJbWcsICdUZWEnXSxcclxuICAgIFtjYWtlSW1nLCAnRGVzc2VydCddLFxyXG4gIF07XHJcbiAgdGFicyA9IHRhYnMubWFwKCh0YWIpID0+IHtcclxuICAgIGNvbnN0IG5ld1RhYiA9IGNyZWF0ZUVsKCdkaXYnLCAndGFiJyk7XHJcbiAgICBjb25zdCBpY29uID0gY3JlYXRlRWwoJ2ltZycsICd0YWItaWNvbicpO1xyXG4gICAgaWNvbi5zcmMgPSB0YWJbMF1cclxuICAgIGljb24uYWx0ID0gdGFiWzFdXHJcbiAgICBjb25zdCB0ZXh0ID0gY3JlYXRlRWwoJ3NwYW4nLCAndGFiLXRleHQnLCB0YWJbMV0pO1xyXG4gICAgbmV3VGFiLmFwcGVuZChpY29uLCB0ZXh0KTtcclxuICAgIHRhYnNDb250YWluZXIuYXBwZW5kKG5ld1RhYik7XHJcbiAgICByZXR1cm4gbmV3VGFiO1xyXG4gIH0pO1xyXG5cclxuICB0YWJzWzBdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cclxuICBjb25zdCBwcm9kdWN0U2xpZGVyQ29udGFpbmVyID0gY3JlYXRlRWwoJ2RpdicsICdwcm9kdWN0LXNsaWRlci13cmFwcGVyJyk7XHJcbiAgY29uc3QgY2FyZHNXcmFwcGVyID0gY3JlYXRlRWwoJ2RpdicsICdjYXJkcy13cmFwcGVyJyk7XHJcbiAgcHJvZHVjdFNsaWRlckNvbnRhaW5lci5hcHBlbmQoY2FyZHNXcmFwcGVyKTtcclxuXHJcbiAgZnVuY3Rpb24gY3JlYXRlQ2FyZChwaG90bywgZHJpbmspIHtcclxuICAgIGNvbnN0IHsgZGVzY3JpcHRpb24sIG5hbWUsIHByaWNlIH0gPSBkcmluaztcclxuICAgIGNvbnN0IGNhcmQgPSBjcmVhdGVFbCgnZGl2JywgJ2RyaW5rLWNhcmQnKTtcclxuICAgIGNvbnN0IGltYWdlV3JhcHBlciA9IGNyZWF0ZUVsKCdkaXYnLCAnaW1hZ2Utd3JhcHBlcicpO1xyXG4gICAgY29uc3QgaW1hZ2UgPSBjcmVhdGVFbCgnaW1nJywgJ2RyaW5rLWltYWdlJyk7XHJcbiAgICBpbWFnZS5hbHQgPSBgJHtuYW1lfSBwaG90b2A7XHJcbiAgICBpbWFnZS5zcmMgPSBwaG90bztcclxuICAgIGltYWdlV3JhcHBlci5hcHBlbmQoaW1hZ2UpO1xyXG4gICAgY29uc3QgY2FyZERlc2NyaXB0aW9uID0gY3JlYXRlRWwoJ2RpdicsICdjYXJkLWRlc2NyaXB0aW9uJyk7XHJcbiAgICBjb25zdCBkcmlua0luZm8gPSBjcmVhdGVFbCgnZGl2JywgJ2RyaW5rLWluZm8nKTtcclxuICAgIGRyaW5rSW5mby5hcHBlbmQoY3JlYXRlRWwoJ3AnLCAnZHJpbmstbmFtZScsIG5hbWUpLCBjcmVhdGVFbCgncCcsICdkcmluay1kZXNjcmlwdGlvbicsIGRlc2NyaXB0aW9uKSk7XHJcblxyXG4gICAgY2FyZERlc2NyaXB0aW9uLmFwcGVuZChkcmlua0luZm8sIGNyZWF0ZUVsKCdwJywgJ2RyaW5rLXByaWNlJywgYCQke3ByaWNlfWApKTtcclxuICAgIGNhcmQuYXBwZW5kKGltYWdlV3JhcHBlciwgY2FyZERlc2NyaXB0aW9uKTtcclxuICAgIGNhcmRzV3JhcHBlci5hcHBlbmQoY2FyZCk7XHJcbiAgfVxyXG5cclxuICBwcm9kdWN0SlNPTi5mb3JFYWNoKChkcmluaywgaW5kZXgpID0+IHtcclxuICAgIGlmIChkcmluay5jYXRlZ29yeSA9PT0gJ2NvZmZlZScpIHtcclxuICAgICAgY3JlYXRlQ2FyZChwaG90b3NbaW5kZXhdLCBkcmluayk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHNlY3Rpb24uYXBwZW5kKGhlYWRpbmcsIHRhYnNDb250YWluZXIsIHByb2R1Y3RTbGlkZXJDb250YWluZXIpO1xyXG4gIHJldHVybiBzZWN0aW9uO1xyXG59XHJcbiIsImltcG9ydCB7IGNyZWF0ZUVsIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2NyZWF0ZUVsJztcclxuaW1wb3J0IHsgY3JlYXRlRm9vdGVyIH0gZnJvbSAnLi4vLi4vd2lkZ2V0cy9mb290ZXIvY3JlYXRlLWZvb3Rlcic7XHJcbmltcG9ydCB7IGNyZWF0ZUhlYWRlciB9IGZyb20gJy4uLy4uL3dpZGdldHMvaGVhZGVyL2NyZWF0ZS1oZWFkZXInO1xyXG5pbXBvcnQgeyBjcmVhdGVQcm9kdWN0TWVudSB9IGZyb20gJy4uLy4uL3dpZGdldHMvbWVudS1wcm9kdWN0cy9jcmVhdGUtbWVudS1wcm9kdWN0cyc7XHJcbmltcG9ydCAnLi4vc3R5bGUuY3NzJ1xyXG5cclxuY29uc3QgY29udGFpbmVyID0gY3JlYXRlRWwoJ2RpdicsICdwYWdlLWNvbnRhaW5lcicpO1xyXG5jb25zdCBtYWluID0gY3JlYXRlRWwoJ21haW4nLCAnbWFpbicpO1xyXG5kb2N1bWVudC5ib2R5LmFwcGVuZChjb250YWluZXIpO1xyXG5tYWluLmFwcGVuZChjcmVhdGVQcm9kdWN0TWVudSgpKTtcclxuY29uc3QgW2hlYWRlciwgbGlua3NdID0gY3JlYXRlSGVhZGVyKClcclxuY29udGFpbmVyLmFwcGVuZChoZWFkZXIsIG1haW4sIGNyZWF0ZUZvb3RlcigpKTtcclxuXHJcbmxpbmtzWzVdLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJylcclxubGlua3NbMV0uaHJlZiA9ICcuLi9pbmRleC5odG1sI2Zhdm9yaXRlLWNvZmZlZSdcclxubGlua3NbMl0uaHJlZiA9ICcuLi9pbmRleC5odG1sI2Fib3V0J1xyXG5saW5rc1szXS5ocmVmID0gJy4uL2luZGV4Lmh0bWwjbW9iaWxlLWFwcCciXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=