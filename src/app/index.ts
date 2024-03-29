import { createElement } from '@/helpers/create-element';
import { Garage } from '@/pages/garage';

export class App {
  private container = createElement('div');

  private pageContainer = createElement('div');

  private currentPage = 0;

  private garage = new Garage();

  private async build(): Promise<void> {
    const garageButton = createElement('button', { className: 'button', textContent: 'GARAGE' });
    const winnersButton = createElement('button', { className: 'button', textContent: 'WINNERS' });
    this.container.append(garageButton, winnersButton, this.pageContainer);
    this.garage.init();
    this.pageContainer.append(this.garage.getContainer());
    await this.garage.buildTracksContainer(this.currentPage);
  }

  public async init(): Promise<void> {
    await this.build();
    document.body.append(this.container);
  }
}
