import { createEl } from '../../shared/createEl';
import { createFooter } from '../../widgets/footer/create-footer';
import { createHeader } from '../../widgets/header/create-header';
import { createProductMenu } from '../../widgets/menu-products/create-menu-products';
import '../style.css'

const container = createEl('div', 'page-container');
const main = createEl('main', 'main');
document.body.append(container);
main.append(createProductMenu());
container.append(createHeader(), main, createFooter());