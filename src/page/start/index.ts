import { LogoutButton } from '@/components/login-form/Logout-button';
import { createElement } from '@/helpers/create-element';

type Props = {
  onLogout: () => void;
};

export class StartPage {
  private onLogout: () => void;

  constructor({ onLogout }: Props) {
    this.onLogout = onLogout;
  }

  private container = createElement('div', { className: 'h-full w-full flex justify-between items-center flex-col' });

  private build(): void {
    const logoutButton = new LogoutButton(this.onLogout);
    const infoContainer = createElement('div', {
      className: 'h-full w-3/5 flex flex-col justify-center items-center gap-8 text-center',
    });
    infoContainer.append(
      createElement('h1', { textContent: 'RSS Puzzle', className: 'font-semibold text-2xl' }),
      createElement('p', {
        textContent:
          'RSS Puzzle is an interactive mini-game aimed at enhancing English language skills. Click on words, collect phrases. Words can be drag and drop.',
      })
    );
    this.container.append(logoutButton.getButtonWrapper(), infoContainer);
  }

  public init(): void {
    this.build();
    document.body.replaceChildren(this.container);
  }
}
