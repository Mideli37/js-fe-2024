import { Footer } from '@/components/footer/Footer';
import { Header } from '@/components/header/Header';
import { createElement } from '@/helpers/create-element';

export class MainPage {
  constructor(
    private userLogin: string,
    private onLogout: () => void
  ) {
    this.init();
  }

  private container = createElement('div', {
    className:
      'w-full m-8 p-3 flex-col flex justify-center items-center bg-orange-100 rounded-md border-red-900 border',
  });

  public init(): void {
    const header = new Header(this.userLogin, this.onLogout);
    const footer = new Footer();
    this.container.append(header.getContainer(), footer.getContainer());
  }

  public getContainer(): HTMLDivElement {
    return this.container;
  }
}
