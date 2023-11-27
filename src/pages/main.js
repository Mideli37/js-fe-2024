import { createEl } from '../shared/createEl';
import { createAbout } from '../widgets/about/create-about';
import { createFavorite } from '../widgets/favorite/create-favorite';
import { createFooter } from '../widgets/footer/create-footer';
import { createHeader } from '../widgets/header/create-header';
import { createHero } from '../widgets/hero/create-hero';
import { createMobile } from '../widgets/mobile-app/create-mobile';
import './style.css';

const container = createEl('div', 'page-container');
const main = createEl('main', 'main');
const [header, links] = createHeader()
document.body.append(container);
main.append(createHero(), createFavorite(), createAbout(), createMobile());
container.append(header, main, createFooter());

links[0].classList.add('disabled')
