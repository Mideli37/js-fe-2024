import { createEl } from '../../shared/createEl';
import phoneImageSrc from './assets/mobile-screens.png';
import playMImage from './assets/play-market-icon.svg';
import appStoreImageSrc from './assets/app-store-icon.svg';
import './mobile.css';

export function createMobile() {
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
  appStoreIcon.src = appStoreImageSrc;
  const buttonPlayMarket = createEl('a', 'button-app');
  buttonPlayMarket.href = '#'
  const playMarketIcon = createEl('img', 'app-icon');
  playMarketIcon.alt = 'play market icon';
  playMarketIcon.src = playMImage;
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
  phoneImage.src = phoneImageSrc;

  imgWrapper.append(phoneImage);
  section.append(infoContainer, imgWrapper);
  return section;
}
