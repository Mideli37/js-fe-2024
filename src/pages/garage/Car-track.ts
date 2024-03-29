import { createElement } from '@/helpers/create-element';
import type { CarInfo } from '@/lib/car-list.schema';

function createButton(text: string): HTMLButtonElement {
  return createElement('button', { className: 'small-button', textContent: text });
}

export class CarTrack {
  private carTrackContainer = createElement('div', { className: 'flex flex-row m-2' });

  constructor(
    private carInfo: CarInfo,
    private onSelect: (carInfo: CarInfo) => void
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
    carControls.append(selectButton, removeButton);
    const engineControls = createElement('div');
    const driveButton = createButton('Drive');
    const stopButton = createButton('Stop');
    engineControls.append(driveButton, stopButton);
    leftColumn.append(name, carControls, engineControls);
    const carTrack = createElement('div', {
      className: 'w-full border-b-2 border-black flex justify-start items-end',
    });
    const car = createElement('div', { className: 'w-8 h-5 relative bottom-0' });
    car.style.color = this.carInfo.color;
    car.insertAdjacentHTML(
      'beforeend',
      '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path fill="currentColor" d="M325.4 49.03h-1c-1.7.1-3.4.52-4.9 1.25c-8 3.79-12.7 13.76-13.8 27.34c-1.1 13.57 2 29.58 6.7 40.08c5.7 12.6 17.6 28.6 30.7 39.4c1.9-2.9 4.2-5.4 6.7-7.6c-16-18.6-24.3-40.6-29.9-60.21l17.4-4.96c5.6 19.47 13.7 40.07 28.6 55.97c1.7-.7 3.4-1.3 5.2-1.8c5.6-1.8 11.5-3.1 17.3-4c-.2-.8-.3-1.7-.5-2.5c-3.7-17.2-13-36.69-21.3-49.67c-5.6-8.75-14.7-19.4-23.9-26.08c-6.5-4.71-12.2-7.19-17.3-7.22M42.93 131.8c-3.7.2-6.9 1.2-9.23 2.8c-5.22 3.6-9.25 12-10.07 21.8c-.82 9.9 1.7 20.4 5.93 26.3c3.99 5.4 12.79 10.7 21.95 12.8c5.19 1.2 10.28 1.3 14.58.5l13.4 18.1c-1.01 5.6-.61 12.8 1.13 20.4c3.56 15.7 12.61 33.3 20.98 43.9h.1c.7.9 1.5 1.8 2.3 2.8c2.7-4 6.1-7.6 9.9-10.6c.4-.3.9-.7 1.3-1l-15.35-21.2l14.55-10.6l16.5 22.7c6.3-2.7 13.1-4.9 20.1-6.7c.2 0 .4-.1.6-.1c-4.4-6.8-9.1-13.2-13.2-18.5c-7.3-9.2-17.9-21-28.1-28.4c-5.1-3.6-10.1-6.1-13.95-6.9c-1.45-.3-2.72-.4-3.88-.4c-.39 0-.77 0-1.14.1h-.12l-11.1-15c1.45-3.5 2.35-7.8 2.53-12.3c.36-9.2-2.37-19.1-6.43-24.7v-.1c-3.93-5.6-12.35-11.4-20.99-14c-3.32-1.1-6.55-1.6-9.55-1.7h-2.68zm369.57 19c-1.6 0-3.3 0-5 .1c-10.1.3-21.6 1.7-31 4.7c-6.3 2-11.6 4.7-15.1 7.7c-3.4 2.9-5.2 5.8-5.7 9.7c-1.3 11.1 6.9 22.5 21 32c14.1 9.4 33.3 15.6 47.1 16.1h.1c12.4.5 30.3-3.8 43.8-11.4c13.4-7.5 21.3-17.2 20.8-27.1c-.3-5-2.3-8.9-6.3-12.8c-4-3.9-10.1-7.4-17.4-10.2c-14.6-5.7-33.5-8.3-47.6-8.7h-.1c-1.5 0-3-.1-4.6-.1m6.1 13.1c17.2.1 32.3 3 46.8 6.4l-4.2 17.6c-24-5.8-46-9.6-78.7-1.7l-4.2-17.4c13.4-3.3 25.6-4.7 36.8-4.9zm-77.5 27.7c-2 1.5-4 3.1-6 4.9c-11 10.1-20.6 25.1-24.9 37c-1.5 4.3-2.7 9.5-3.4 15c3.4.5 6.9 1 10.3 1.6c7.7-17.1 18-33.1 29.8-48.4c-2.3-3.2-4.3-6.5-5.8-10.1m18.6 23.2c-9.9 12.8-18.3 25.9-24.7 39.5c11.1 3.2 21.3 7.6 29.8 14c1.7 1.3 3.4 2.7 4.9 4.3c5-5.7 8.9-11.7 11.3-17.2c2.8-6.7 4.5-15.8 4.8-25.2c-6.6-2.8-13.1-6.3-19.1-10.3c-2.4-1.6-4.7-3.3-7-5.1m-104.5 48.5c-7 0-13.7 0-19.9.1c-23 .3-54.8 1.5-79.9 7.9c-12.5 3.2-23.2 7.7-30.3 13.4c-7 5.6-10.6 11.6-10.8 20.5c-.2 9.4 3.3 16.1 10.4 22.5c7 6.4 17.9 11.8 30.7 15.8c25.6 8.1 58.3 10.8 81.8 10.9c24.3.1 58.6-2.2 85.5-10.3c13.4-4.1 24.9-9.6 32.4-16.2c7.4-6.6 11.1-13.6 10.8-23.4c-.3-9.7-4.3-16-12-21.8c-7.7-5.9-19.4-10.4-32.9-13.4c-20.3-4.5-44.6-5.8-65.8-6m-22.9 14.5c25.6 0 54.9 2 87.9 5.1l-1.8 18c-43.5-4.2-80.4-6.3-109.2-4.3c-28.7 2-48.9 8.3-60.3 18.8l-12.2-13.2c16.2-15.1 40.6-21.4 71.3-23.5c7.7-.6 15.8-.8 24.3-.9m-130.1 50.3c-8.78 14-15.89 30.2-20.02 43c-4.95 15.4-9.01 37.6-7.94 56.1c.53 9.2 2.36 17.5 5.38 23.4c3.01 5.9 6.73 9.5 12.52 11.3c5.89 1.9 10.96 1.2 16.96-1.9c5.9-3 12.2-8.7 18.1-16c11.8-14.5 21.7-35.2 27.2-50.8c3-8.3 5.9-18.5 8.2-29c-4.3-1.1-8.5-2.2-12.6-3.5c-8-2.5-15.5-5.5-22.4-9.2c-11.5 26.6-21.2 52.8-21.5 81.4l-17.99-.2c.33-33.8 11.99-63.4 24.49-91.6c-4.2-3.8-7.7-8.1-10.4-13m274.8 1.4c-2.7 4.5-6.1 8.4-10 11.9c-5.3 4.6-11.3 8.5-18 11.7c5.8 27.4 21.6 46.2 38.5 67.3l-14 11.2c-16.2-20-34.1-41.2-41.4-71.6c-1.4.4-2.8.9-4.2 1.3c-3.5 1.1-7.1 2-10.7 2.9c4.1 18 11.8 36.3 19.4 49.4c7.3 12.6 20.4 28.4 34 38.4c6.8 5 13.7 8.5 19.7 9.8c6 1.4 10.8.9 15.5-1.9c6.1-3.6 9.5-8.7 11.4-16c2-7.2 2.2-16.6.7-26.7c-2.9-20.2-12.1-43.2-20.8-58.9v-.1c-4.9-8.8-12-19.3-20.1-28.7"/></svg>'
    );
    carTrack.append(car);
    this.carTrackContainer.append(leftColumn, carTrack);
  }

  public getTrack(): HTMLDivElement {
    return this.carTrackContainer;
  }
}