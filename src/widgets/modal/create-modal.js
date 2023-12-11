import { createEl } from '../../shared/createEl';
import './modal.css';
import productJSON from '../../shared/products.json';
import photos from '../../shared/product-photos';
import icon from './assets/info-empty.svg';

export function createModal(index) {
  const modalBg = createEl('div', 'modal-bg');
  document.body.append(modalBg);

  const product = productJSON[index];

  const modal = createEl('div', 'modal');
  const imageWrapper = createEl('div', 'img-wrapper');
  const image = createEl('img', 'drink-image');
  image.src = photos[index];
  image.alt = product.name;
  imageWrapper.append(image);
  const description = createEl('div', 'description');
  const name = createEl('p', 'drink-name', product.name);
  const info = createEl('p', 'drink-info', product.description);

  let total = Number(product.price);

  const sizesArr = Array.from(Object.entries(product.sizes));

  const sizeWrapper = createEl('div', 'option-wrapper');
  const sizeHeadingEl = createEl('p', 'option-heading', 'Size');
  const sizeButtonWrapper = createEl('div', 'button-wrapper');
  sizeWrapper.append(sizeHeadingEl, sizeButtonWrapper);
  let sizeTabsArr = sizesArr.map((option) => {
    let tab = createEl('div', 'tab');
    const letter = createEl('p', 'option-letter', option[0]);
    const volume = createEl('p', 'option-volume', option[1].size);
    tab.append(letter, volume);
    sizeButtonWrapper.append(tab);
    return [...option, tab];
  });

  sizeTabsArr[0][2].classList.add('active');

  const additionArr = product.additives;

  const additionWrapper = createEl('div', 'option-wrapper');
  const additionHeadingEl = createEl('p', 'option-heading', 'Additives');
  const additionButtonWrapper = createEl('div', 'button-wrapper');
  additionWrapper.append(additionHeadingEl, additionButtonWrapper);

  let additionTabsArr = additionArr.map((option, index) => {
    const tab = createEl('div', 'tab');
    const letter = createEl('p', 'option-letter', index + 1);
    const volume = createEl('p', 'option-volume', option.name);
    tab.append(letter, volume);
    additionButtonWrapper.append(tab);
    return [option, tab];
  });

  const totalWrapper = createEl('div', 'total-wrapper');
  const totalLabel = createEl('span', 'total-label', 'Total:');
  const price = createEl('span', 'price', `$${total.toFixed(2)}`);
  totalWrapper.append(totalLabel, price);

  const divider = createEl('div', 'divider');
  const costInfoWrapper = createEl('div', 'cost-info-wrapper');
  const infoIcon = createEl('img', 'info-icon');
  infoIcon.src = icon;
  infoIcon.alt = 'warning icon';
  const costInfo = createEl(
    'p',
    'cost-info',
    'The cost is not final. Download our mobile app to see the final price and place your order. Earn loyalty points and enjoy your favorite coffee with up to 20% discount.',
  );
  costInfoWrapper.append(infoIcon, costInfo);

  const closeButton = createEl('button', 'close-button', 'Close');

  document.body.append(modal);
  modal.append(imageWrapper, description);
  description.append(name, info, sizeWrapper, additionWrapper, totalWrapper, divider, costInfoWrapper, closeButton);

  function closeModal() {
    modal.remove();
    modalBg.remove();
    document.body.classList.remove('no-scroll');
  }

  modalBg.addEventListener('click', () => {
    closeModal();
  });

  closeButton.addEventListener('click', () => {
    closeModal();
  });

  //* chooose size

  function updateTotal() {
    console.log(total.toFixed(2));
    price.textContent = `$${Number(total).toFixed(2)}`;
  }

  function removeActiveClass() {
    sizeTabsArr.forEach((tab) => {
      if (tab[2].classList.contains('active')) {
        tab[2].classList.remove('active');
        total -= Number(tab[1]['add-price']);
        updateTotal();
      }
    });
  }

  sizeTabsArr.forEach((tab) => {
    tab[2].addEventListener('click', () => {
      if (!tab[2].classList.contains('active')) {
        removeActiveClass();
        tab[2].classList.add('active');
        total += Number(tab[1]['add-price']);
        updateTotal();
      }
    });
  });

  additionTabsArr.forEach((tab) => {
    tab[1].addEventListener('click', () => {
      if (!tab[1].classList.contains('active')) {
        tab[1].classList.add('active');
        console.log(total);
        console.log(+tab[0]['add-price']);
        console.log(total);
        total += Number(tab[0]['add-price']);
      } else {
        tab[1].classList.remove('active');
        total -= Number(tab[0]['add-price']);
      }
      updateTotal();
    });
  });
}
