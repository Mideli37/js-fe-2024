import { createEl } from '../../shared/createEl';
import './hero.css'

export function createHero() {
  const heroSection = createEl('section', 'hero-section section');
  const heroHeading = createEl('h1', 'hero-heading');
  heroHeading.append(
    createEl('span', 'cursive', 'Enjoy'),
    createEl('span', null, ' premium coffee at our charming cafe'),
  );
  const info = createEl('p', 'hero-info', 'With its inviting atmosphere and delicious coffee options, the Coffee House Resource is a popular destination for coffee lovers and those seeking a warm and inviting space to enjoy their favorite beverage.')
  const menuButton = createEl('button', 'menu-button', 'Menu')
  heroSection.append(heroHeading, info, menuButton)
  return heroSection
}
