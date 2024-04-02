import { createElement } from '@/helpers/create-element';
import { Garage } from '@/pages/garage';
import { Winners } from '@/pages/winners';

export class App {
  private container = createElement('div');

  private pageContainer = createElement('div');

  private garage = new Garage();

  private winners = new Winners();

  private isGarage: boolean = true;

  private async build(): Promise<void> {
    const garageButton = createElement('button', { className: 'button', textContent: 'GARAGE' });
    garageButton.onclick = (): void => {
      if (!this.isGarage) {
        this.pageContainer.replaceChildren(this.garage.getContainer());
        this.isGarage = true;
      }
    };
    const winnersButton = createElement('button', { className: 'button', textContent: 'WINNERS' });
    winnersButton.onclick = async (): Promise<void> => {
      if (this.isGarage) {
        this.pageContainer.replaceChildren(this.winners.getContainer());
        this.isGarage = false;
        await this.winners.buildPageContainer();
      }
    };
    this.container.append(garageButton, winnersButton, this.pageContainer);
    await this.winners.init();
    await this.garage.init();
    this.pageContainer.append(this.garage.getContainer());
  }

  public async init(): Promise<void> {
    await this.build();
    document.body.append(this.container);
  }
}
