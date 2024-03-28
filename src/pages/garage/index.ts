import { createElement } from '@/helpers/create-element';
import { CarTrack } from './Car-track';

function createSmallButton(text: string): HTMLButtonElement {
  return createElement('button', { className: 'small-button', textContent: text });
}

export class Garage {
  private pageContainer = createElement('div');

  private trackContainer = createElement('div');

  private tracksWrapper = createElement('div');

  public getContainer(): HTMLDivElement {
    return this.pageContainer;
  }

  public init(): void {
    this.buildCustomizeCar();
    this.buildControllers();
    this.pageContainer.append(this.trackContainer);
  }

  private buildCustomizeCar(): void {
    const container = createElement('div');
    const form = createElement('form');
    const createCarWrapper = createElement('div');
    const nameInput = createElement('input', { type: 'text', ariaLabel: 'Car Name', className: 'input' });
    const colorPickCreate = createElement('input', { type: 'color', ariaLabel: 'color pick for car' });
    const createButton = createSmallButton('CREATE');
    createCarWrapper.append(nameInput, colorPickCreate, createButton);
    const updateCarWrapper = createElement('div');
    const updateNameInput = createElement('input', { type: 'text', ariaLabel: 'Update Car Name', className: 'input' });
    const colorPickUpdate = createElement('input', { type: 'color', ariaLabel: 'color pick for car' });
    const updateButton = createSmallButton('UPDATE');
    updateCarWrapper.append(updateNameInput, colorPickUpdate, updateButton);
    form.append(createCarWrapper, updateCarWrapper);
    container.append(form);
    this.pageContainer.append(container);
  }

  private buildControllers(): void {
    const container = createElement('div');
    const raceButton = createSmallButton('RACE');
    const resetButton = createSmallButton('RESET');
    const generateButton = createSmallButton('GENERATE CARS');
    container.append(raceButton, resetButton, generateButton);
    this.pageContainer.append(container);
  }

  public buildTracksContainer(carQuantity: number, page: number): void {
    const heading = createElement('h1', { textContent: `GARAGE (${carQuantity.toString()})` });
    const p = createElement('p', { textContent: `Page #${page.toString()}` });
    const buttonsWrapper = createElement('div');
    const prevButton = createElement('button', { className: 'button', textContent: 'Previous' });
    const nextButton = createElement('button', { className: 'button', textContent: 'Next' });
    buttonsWrapper.append(prevButton, nextButton);
    this.trackContainer.append(heading, p, this.tracksWrapper, buttonsWrapper);
    this.buildCars(['Настенькина машинка', 'Синенькая машинка', 'Машинкина машинка']);
  }

  private buildCars(carNames: string[]): void {
    this.tracksWrapper.append(
      ...carNames.map((carInfo) => {
        const car = new CarTrack(carInfo);
        return car.getTrack();
      })
    );
  }
}
