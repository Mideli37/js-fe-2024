import { getCar, getWinners, type WinnersInfoOptions } from '@/api';
import { createElement } from '@/helpers/create-element';
import { carSchema } from '@/lib/car-list.schema';
import { winnerListSchema, type Winner } from './winner.schema';
import { corgi } from '@/assets/corgi';

async function buildRow(winner: Winner, counter: number): Promise<HTMLTableRowElement> {
  const row = createElement('tr');
  const carInfo = carSchema.parse(await getCar(winner.id.toString()));
  const carElement = createElement('td', { className: '' });
  carElement.style.color = carInfo.color;
  carElement.append(corgi.cloneNode(true));
  row.append(
    createElement('td', { textContent: counter.toString() }),
    carElement,
    createElement('td', { textContent: carInfo.name }),
    createElement('td', { textContent: winner.wins.toString() }),
    createElement('td', { textContent: winner.time.toString() })
  );
  return row;
}
export class Winners {
  private pageContainer = createElement('div');

  private page: number = 1;

  private tableWrapper = createElement('div');

  private WINNERS_PER_PAGE: number = 10;

  private totalWinnersCount: number = 0;

  public getContainer(): HTMLDivElement {
    return this.pageContainer;
  }

  public async init(): Promise<void> {
    await this.buildPageContainer();
  }

  public async buildPageContainer(page?: number): Promise<void> {
    const winnerInfoOptions: WinnersInfoOptions = { _limit: this.WINNERS_PER_PAGE.toString() };
    if (page) {
      this.page = page;
    }
    winnerInfoOptions._page = this.page.toString();
    const response = await getWinners(winnerInfoOptions);
    const winnersList = winnerListSchema.parse(response.json);
    if (response.count) {
      this.totalWinnersCount = +response.count;
    }
    const heading = createElement('h1', { textContent: `WINNERS (${response.count ?? '0'})` });
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
      await this.buildPageContainer();
    };
    if (this.page > Math.floor((this.totalWinnersCount - 1) / this.WINNERS_PER_PAGE)) {
      nextButton.disabled = true;
    }
    nextButton.onclick = async (): Promise<void> => {
      this.page += 1;
      prevButton.disabled = false;
      await this.buildPageContainer();
    };

    await this.buildTable(winnersList);
    buttonsWrapper.append(prevButton, nextButton);
    this.pageContainer.replaceChildren(heading, p, this.tableWrapper, buttonsWrapper);
  }

  private async buildTable(winnerList: Winner[]): Promise<void> {
    const table = createElement('table', { className: 'h-4 ring-2 w-[50rem]' });
    const headRow = createElement('tr');
    ['№', 'Image', 'Name', 'Wins', 'Best Time'].forEach((text) => {
      headRow.append(createElement('th', { textContent: text, className: 'ring-1' }));
    });
    let counter = this.page * this.WINNERS_PER_PAGE - this.WINNERS_PER_PAGE;
    const promises = winnerList.map((winner) => {
      counter += 1;
      return buildRow(winner, counter);
    });

    table.append(headRow, ...(await Promise.all(promises)));
    this.tableWrapper.replaceChildren(table);
  }
}
