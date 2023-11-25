import './favorite.css';
import { createEl } from '../../shared/createEl';
import frappucinoImage from './assets/coffee-slider-1.png';

export function createFavorite() {
  const favSection = createEl('section', 'favorite-section section');
  const favHeading = createEl('h2', 'favorite-heading');
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
  drinkCardImg.src = frappucinoImage;
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
