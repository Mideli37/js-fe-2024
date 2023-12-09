import './favorite.css';
import { createEl } from '../../shared/createEl';
import frappucinoImage from './assets/coffee-slider-1.png';
import macchiatoImage from './assets/coffee-slider-2.png';
import iceImage from './assets/coffee-slider-3.png';

export function createFavorite() {
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
      src: frappucinoImage,
      description:
        'This new drink takes an espresso and mixes it with brown sugar and cinnamon before being topped with oat milk.',
      price: '$5.50',
    },
    {
      alt: 'Caramel Macchiato',
      name: 'Caramel Macchiato',
      src: macchiatoImage,
      description:
        'Fragrant and unique classic espresso with rich caramel-peanut syrup, with cream under whipped thick foam.',
      price: '$5.00',
    },
    {
      alt: 'Ice coffee',
      name: 'Ice coffee',
      src: iceImage,
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
