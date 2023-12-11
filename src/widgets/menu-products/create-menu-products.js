import { createEl } from '../../shared/createEl';
import './menu-product.css';
import productJSON from '../../shared/products.json';
import photos from '../../shared/product-photos';
import kettleImg from './assets/kettle.png';
import coffeeImg from './assets/coffee.png';
import cakeImg from './assets/cake.png';
import { createModal } from '../modal/create-modal';

export function createProductMenu() {
  const section = createEl('section', 'menu-section section');
  const heading = createEl('h1', 'menu-heading heading');
  heading.append('Behind each of our cups hides an ', createEl('span', 'cursive', 'amazing surprise'));
  const tabsContainer = createEl('div', 'tabs-container');
  let tabs = [
    [coffeeImg, 'Coffee'],
    [kettleImg, 'Tea'],
    [cakeImg, 'Dessert'],
  ];
  tabs = tabs.map((tab) => {
    const newTab = createEl('div', 'tab');
    const icon = createEl('img', 'tab-icon');
    icon.src = tab[0];
    icon.alt = tab[1];
    const text = createEl('span', 'tab-text', tab[1]);
    newTab.append(icon, text);
    tabsContainer.append(newTab);
    return [...tab, newTab];
  });

  tabs[0][2].classList.add('active');

  const productSliderContainer = createEl('div', 'product-slider-wrapper');
  const cardsWrapper = createEl('div', 'cards-wrapper');
  productSliderContainer.append(cardsWrapper);

  //* product cards

  let currentCategory = 'Coffee';

  function replaceCards(category) {
    cardsWrapper.replaceChildren();
    addDrinkCard(category);
  }

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

  function addDrinkCard(category) {
    productJSON.forEach((drink, index) => {
      if (drink.category === category.toLowerCase()) {
        createCard(photos[index], drink);
      }
    });
  }

  function removeActiveClass() {
    tabs.forEach((tab) => {
      if (tab[2].classList.contains('active')) {
        tab[2].classList.remove('active');
      }
    });
  }

  tabs.forEach((tab, index) => {
    tab[2].addEventListener('click', () => {
      if (currentCategory !== tab[1]) {
        currentCategory = tab[1];
        replaceCards(currentCategory);
        removeActiveClass();
        tab[2].classList.add('active');
        if (index === 1 || !loadMoreButton.classList.contains('hidden')) {
          loadMoreButton.classList.add('hidden');
        } else {
          loadMoreButton.classList.remove('hidden');
        }
      }
    });
  });

  replaceCards('coffee');

  const loadMoreButton = createEl('button', 'load-more');
  loadMoreButton.insertAdjacentHTML(
    'afterbegin',
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21.8883 13.5C21.1645 18.3113 17.013 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C16.1006 2 19.6248 4.46819 21.1679 8" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 8H21.4C21.7314 8 22 7.73137 22 7.4V3" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  );
  productSliderContainer.append(loadMoreButton);

  loadMoreButton.addEventListener('click', () => {
    let cards = Array.from(cardsWrapper.children);
    if (cards.length > 4) {
      cards.slice(3).forEach((card) => {
        card.classList.add('displayed');
        loadMoreButton.classList.add('hidden');
      });
    }
  });

  //* modal open

  cardsWrapper.addEventListener('click', (e) => {
    let clickTarget = e.target.closest('.drink-card');
    let elDrinkName = clickTarget.lastChild.firstChild.firstChild;

    productJSON.forEach((drink, index) => {
      if (drink.name === elDrinkName.textContent) {
        createModal(index);
      }
    });
  });

  section.append(heading, tabsContainer, productSliderContainer);
  return section;
}
