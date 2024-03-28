import { createElement } from '@/helpers/create-element';
import { Garage } from '@/pages/garage';

export class App {
  private container = createElement('div');

  private pageContainer = createElement('div');

  private currentPage = 0;

  private garage = new Garage();

  private build(): void {
    const garageButton = createElement('button', { className: 'button', textContent: 'GARAGE' });
    const winnersButton = createElement('button', { className: 'button', textContent: 'WINNERS' });
    this.container.append(garageButton, winnersButton, this.pageContainer);
    this.garage.init();
    this.pageContainer.append(this.garage.getContainer());
    this.garage.buildTracksContainer(10, this.currentPage);
  }

  public init(): void {
    this.build();
    document.body.append(this.container);
  }
}
