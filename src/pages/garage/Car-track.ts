import { deleteWinner, switchDriveMode, toggleEngine } from '@/api';
import { corgi } from '@/assets/corgi';
import { createElement } from '@/helpers/create-element';
import { moveToLeftAnimation } from '@/lib/animations';
import type { CarInfo } from '@/lib/car-list.schema';
import { velocitySchema } from '@/lib/velocity.schema';

function createButton(text: string): HTMLButtonElement {
  return createElement('button', { className: 'small-button', textContent: text });
}

export class CarTrack {
  private carTrackContainer = createElement('div', { className: 'flex flex-row m-2' });

  private carElement = createElement('div', { className: 'w-8 h-5 relative bottom-10' });

  private animation: Animation = new Animation();

  private driveButton: HTMLButtonElement = createButton('Drive');

  private stopButton: HTMLButtonElement = createButton('Stop');

  constructor(
    private carInfo: CarInfo,
    private onSelect: (carInfo: CarInfo) => void,

    private onDelete: (id: string) => void
  ) {
    this.build();
  }

  private build(): void {
    const leftColumn = createElement('div');
    const name = createElement('h3', { textContent: this.carInfo.name });
    const carControls = createElement('div', { className: 'flex flex-row flex-nowrap' });
    const selectButton = createButton('Select');
    selectButton.onclick = (): void => {
      this.onSelect(this.carInfo);
    };
    const removeButton = createButton('Remove');
    removeButton.onclick = async (): Promise<void> => {
      this.onDelete(this.carInfo.id.toString());
      await deleteWinner(this.carInfo.id.toString());
    };
    carControls.append(selectButton, removeButton);
    const engineControls = createElement('div');
    engineControls.append(...this.createEngineButtons());
    leftColumn.append(name, carControls, engineControls);
    const carTrack = createElement('div', {
      className: 'w-full border-b-2 border-black flex justify-start items-end',
    });
    this.carElement.style.color = this.carInfo.color;
    this.carElement.append(corgi.cloneNode(true));
    carTrack.append(this.carElement);
    this.carTrackContainer.append(leftColumn, carTrack);
  }

  private createEngineButtons(): HTMLButtonElement[] {
    this.driveButton = createButton('Drive');
    this.stopButton = createButton('Stop');
    this.stopButton.disabled = true;
    this.stopButton.onclick = this.stopRace.bind(this);
    this.driveButton.onclick = async (): Promise<void> => {
      try {
        await this.startRace();
      } catch {
        this.carElement.style.filter = 'grayscale(0.5)';
      }
    };
    return [this.driveButton, this.stopButton];
  }

  public async startRace(): Promise<CarInfo> {
    this.driveButton.disabled = true;
    const engineInfo = velocitySchema.parse(await toggleEngine({ status: 'started', id: this.carInfo.id.toString() }));
    this.stopButton.disabled = false;
    this.animation = moveToLeftAnimation(this.carElement, engineInfo.distance / engineInfo.velocity);
    this.carElement.style.left = '90%';
    const promise = await switchDriveMode(this.carInfo.id.toString());
    if (promise.success) {
      return this.carInfo;
    }
    this.animation.pause();
    this.carElement.style.filter = 'grayscale(0.5)';
    throw new Error('the car is broken');
  }

  public async stopRace(): Promise<void> {
    this.stopButton.disabled = true;
    this.carElement.style.left = '0%';
    this.carElement.style.filter = '';
    const promise = toggleEngine({ status: 'stopped', id: this.carInfo.id.toString() });
    await promise.then(() => {
      this.driveButton.disabled = false;
      this.animation.cancel();
    });
  }

  public getTrack(): HTMLDivElement {
    return this.carTrackContainer;
  }
}
