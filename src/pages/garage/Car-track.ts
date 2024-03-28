import { createElement } from '@/helpers/create-element';

function createButton(text: string): HTMLButtonElement {
  return createElement('button', { className: 'small-button', textContent: text });
}

export class CarTrack {
  private carTrackContainer = createElement('div', { className: 'flex flex-row m-2' });

  constructor(private name: string) {
    this.build();
  }

  private build(): void {
    const leftColumn = createElement('div');
    const name = createElement('h3', { textContent: this.name });
    const carControls = createElement('div', { className: 'flex flex-row flex-nowrap' });
    const selectButton = createButton('Select');
    const removeButton = createButton('Remove');
    carControls.append(selectButton, removeButton);
    const engineControls = createElement('div');
    const driveButton = createButton('Drive');
    const stopButton = createButton('Stop');
    engineControls.append(driveButton, stopButton);
    leftColumn.append(name, carControls, engineControls);
    const carTrack = createElement('div', {
      className: 'w-full border-b-2 border-black flex justify-start items-end',
    });
    const car = createElement('div', { className: 'w-8 h-5 bg-amber-400 relative bottom-0' });
    carTrack.append(car);
    this.carTrackContainer.append(leftColumn, carTrack);
  }

  public getTrack(): HTMLDivElement {
    return this.carTrackContainer;
  }
}
