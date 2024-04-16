import rsLogo from '@/assets/rs-school-logo.svg';
import { createElement } from '@/helpers/create-element';

export class Footer {
  constructor() {
    this.build();
  }

  private container = createElement('div', { className: 'w-full h-10 flex flex-row justify-between items-center' });

  private build(): void {
    const rsLink = createElement('a', { href: 'https://rs.school/' });
    rsLink.append(
      createElement('img', { alt: 'rs school logo', width: 90, src: rsLogo, className: 'hover:scale-110 duration-300' })
    );
    const developerLink = createElement('a', {
      textContent: 'Mideli37',
      href: 'https://github.com/Mideli37',
      className: 'hover:scale-110 duration-300',
    });
    const year = createElement('span', { textContent: '2024' });
    this.container.append(rsLink, developerLink, year);
  }

  public getContainer(): HTMLDivElement {
    return this.container;
  }
}
