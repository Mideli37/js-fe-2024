import { createCar, deleteCar, getCars, updateCar } from '@/api';
import { createElement } from '@/helpers/create-element';
import { getRandomColor } from '@/helpers/get-random-color';
import { getRandomName } from '@/helpers/get-random-name';
import { carListSchema, type CarInfo, type CarList } from '@/lib/car-list.schema';
import { CarTrack } from './Car-track';

function createSmallButton(text: string): HTMLButtonElement {
  return createElement('button', { className: 'small-button', textContent: text });
}

export class Garage {
  private pageContainer = createElement('div');

  private trackContainer = createElement('div');

  private tracksWrapper = createElement('div');

  private page: number = 1;

  private totalCarCount: number = 0;

  private CARS_PER_PAGE = 7;

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

    if (response.count) {
      this.totalCarCount = +response.count;
    }

    const heading = createElement('h1', { textContent: `GARAGE (${response.count ?? '0'})` });
    const p = createElement('p', { textContent: `Page #${this.page.toString()}` });
    const buttonsWrapper = createElement('div');
    const prevButton = createElement('button', { className: 'button', textContent: 'Previous' });
    const nextButton = createElement('button', { className: 'button', textContent: 'Next' });
    if (this.page === 1) {
      prevButton.disabled = true;
    }
    prevButton.onclick = async (): Promise<void> => {
      this.page -= 1;
      nextButton.disabled = false;
      await this.buildTracksContainer();
    };
    if (this.page > Math.floor((this.totalCarCount - 1) / this.CARS_PER_PAGE)) {
      nextButton.disabled = true;
    }
    nextButton.onclick = async (): Promise<void> => {
      this.page += 1;
      prevButton.disabled = false;
      await this.buildTracksContainer();
    };

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
            if (carInfo === this.selectedCar) {
              this.updateInputs.forEach((elem, i) => {
                const input = elem;
                input.disabled = true;
                if (i === 0) {
                  input.value = '';
                } else if (i === 1) {
                  input.value = '#000000';
                }
              });
            }
            await deleteCar(carInfo.id.toString());
            if (
              this.totalCarCount % this.CARS_PER_PAGE === 1 &&
              this.page > Math.floor(this.totalCarCount / this.CARS_PER_PAGE)
            ) {
              this.page -= 1;
            }
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
