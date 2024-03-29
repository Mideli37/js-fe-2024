import { createCar, deleteCar, getCars, updateCar } from '@/api';
import { createElement } from '@/helpers/create-element';
import { carListSchema, type CarList, type CarInfo } from '@/lib/car-list.schema';
import { CarTrack } from './Car-track';
import { getRandomName } from '@/helpers/get-random-name';
import { getRandomColor } from '@/helpers/get-random-color';

function createSmallButton(text: string): HTMLButtonElement {
  return createElement('button', { className: 'small-button', textContent: text });
}

export class Garage {
  private pageContainer = createElement('div');

  private trackContainer = createElement('div');

  private tracksWrapper = createElement('div');

  private page: number = 0;

  private selectedCar: CarInfo | null = null;

  private updateInputs: (HTMLInputElement | HTMLButtonElement)[] = [];

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
    createButton.onclick = (e): void => {
      e.preventDefault();
      void this.createNewCar(nameInput, colorPickCreate);
    };
    createCarWrapper.append(nameInput, colorPickCreate, createButton);
    const updateCarWrapper = this.createUpdateCarWrapper();
    form.append(createCarWrapper, updateCarWrapper);
    container.append(form);
    this.pageContainer.append(container);
  }

  private createUpdateCarWrapper(): HTMLDivElement {
    const updateCarWrapper = createElement('div');
    const updateNameInput = createElement('input', {
      type: 'text',
      ariaLabel: 'Update Car Name',
      className: 'input',
      disabled: true,
    });
    const colorPickUpdate = createElement('input', { type: 'color', ariaLabel: 'color pick for car', disabled: true });
    const updateButton = createSmallButton('UPDATE');
    updateButton.disabled = true;
    this.updateInputs.push(updateNameInput, colorPickUpdate, updateButton);
    updateButton.onclick = async (e): Promise<void> => {
      e.preventDefault();
      if (updateNameInput.value && this.selectedCar) {
        await updateCar({
          color: colorPickUpdate.value,
          id: this.selectedCar.id.toString(),
          name: updateNameInput.value,
        });
      }
      this.updateInputs.forEach((elem) => {
        const input = elem;
        input.disabled = true;
      });
      updateNameInput.value = '';
      colorPickUpdate.value = '#000000';
      await this.buildTracksContainer();
    };
    updateCarWrapper.append(updateNameInput, colorPickUpdate, updateButton);
    return updateCarWrapper;
  }

  private buildControllers(): void {
    const container = createElement('div');
    const raceButton = createSmallButton('RACE');
    const resetButton = createSmallButton('RESET');
    const generateButton = createSmallButton('GENERATE CARS');
    generateButton.onclick = (): void => {
      void this.generateCars();
    };
    container.append(raceButton, resetButton, generateButton);
    this.pageContainer.append(container);
  }

  public async buildTracksContainer(page?: number): Promise<void> {
    if (page) {
      this.page = page;
    }

    const response = await getCars(this.page);
    this.buildCars(carListSchema.parse(response.json));

    const heading = createElement('h1', { textContent: `GARAGE (${response.count?.toString() ?? '0'})` });
    const p = createElement('p', { textContent: `Page #${(this.page + 1).toString()}` });
    const buttonsWrapper = createElement('div');
    const prevButton = createElement('button', { className: 'button', textContent: 'Previous' });
    const nextButton = createElement('button', { className: 'button', textContent: 'Next' });
    buttonsWrapper.append(prevButton, nextButton);
    this.trackContainer.replaceChildren(heading, p, this.tracksWrapper, buttonsWrapper);
  }

  private buildCars(carList: CarList): void {
    this.tracksWrapper.replaceChildren(
      ...carList.map((carInfo) => {
        const car = new CarTrack(
          carInfo,
          () => {
            this.selectCar(carInfo);
          },
          async () => {
            await deleteCar(carInfo.id.toString());
            await this.buildTracksContainer();
          }
        );
        return car.getTrack();
      })
    );
  }

  private selectCar(carInfo: CarInfo): void {
    this.selectedCar = carInfo;
    this.updateInputs.forEach((elem) => {
      const input = elem;
      input.disabled = false;
    });
    if (this.updateInputs[0] && this.updateInputs[1]) {
      this.updateInputs[0].value = carInfo.name;
      this.updateInputs[1].value = carInfo.color;
    }
  }

  private async generateCars(): Promise<void> {
    const promises = [];
    for (let i = 0; i < 100; i += 1) {
      promises.push(createCar({ name: getRandomName(), color: getRandomColor() }));
    }
    await Promise.all(promises);
    await this.buildTracksContainer();
  }

  private async createNewCar(nameInput: HTMLInputElement, colorInput: HTMLInputElement): Promise<void> {
    if (nameInput.value) {
      await createCar({ name: nameInput.value, color: colorInput.value });
      await this.buildTracksContainer();
    }
  }
}
