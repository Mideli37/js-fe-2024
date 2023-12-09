import { createEl } from '../../shared/createEl';
import logoImage from './assets/logo.svg';
import cupImage from './assets/coffee-cup.svg';
import './header.css';

export function createHeader() {
  const header = createEl('header', 'header');
  const container = createEl('div', 'header-container');
  const logo = createEl('a', 'header-logo');
  logo.href = '../index.html';
  const logoImg = createEl('img');
  logo.append(logoImg);
  logoImg.alt = 'coffee house logo';
  logoImg.src = logoImage;
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
  menuLinkImage.src = cupImage;

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
