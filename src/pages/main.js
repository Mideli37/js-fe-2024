import { createEl } from '../shared/createEl';
import { createAbout } from '../widgets/about/create-about';
import { createFavorite } from '../widgets/favorite/create-favorite';
import { createHeader } from '../widgets/header/create-header';
import { createHero } from '../widgets/hero/create-hero';
import { createMobile } from '../widgets/mobile-app/create-mobile';
import './style.css';

const container = createEl('div', 'page-container');
document.body.append(container);
container.append(createHeader(), createHero(), createFavorite(), createAbout(), createMobile());
