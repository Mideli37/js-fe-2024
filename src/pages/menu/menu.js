import { createEl } from '../../shared/createEl';
import { createFooter } from '../../widgets/footer/create-footer';
import { createHeader } from '../../widgets/header/create-header';
import { createProductMenu } from '../../widgets/menu-products/create-menu-products';
import '../style.css';

const container = createEl('div', 'page-container');
const main = createEl('main', 'main');
document.body.append(container);
main.append(createProductMenu());
const [header, links] = createHeader();
container.append(header, main, createFooter());

links[5].classList.add('disabled');
links[5].href = '#';
links[1].href = '../index.html#favorite-coffee';
links[2].href = '../index.html#about';
links[3].href = '../index.html#mobile-app';
