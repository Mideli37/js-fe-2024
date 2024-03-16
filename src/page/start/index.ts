import { LogoutButton } from '@/components/login-form/Logout-button';
import { createElement } from '@/helpers/create-element';
import type { LoginInfo } from '@/services/login-info.schema';

type Props = {
  onLogout: () => void;
  userName: LoginInfo;
  onStartGame: () => void;
};

export class StartPage {
  private onLogout: () => void;

  private userName: LoginInfo;

  private onStartGame: () => void;

  constructor({ onLogout, userName, onStartGame }: Props) {
    this.onLogout = onLogout;
    this.userName = userName;
    this.onStartGame = onStartGame;
  }

  private container = createElement('div', { className: 'h-full w-full flex justify-between items-center flex-col' });

  private build(): void {
    const logoutButton = new LogoutButton(this.onLogout);
    const infoContainer = createElement('div', {
      className: 'h-full w-3/5 flex flex-col justify-center items-center gap-8 text-center',
    });
    const startButton = createElement('button', { textContent: 'Start', className: 'button' });
    startButton.addEventListener('click', this.onStartGame);
    infoContainer.append(
      createElement('h1', { textContent: 'RSS Puzzle', className: 'font-semibold text-2xl' }),
      createElement('p', {
        textContent:
          'RSS Puzzle is an interactive mini-game aimed at enhancing English language skills. Click on words, collect phrases. Words can be drag and drop.',
      }),
      createElement('p', { textContent: `Welcome to the game, ${this.userName.firstName} ${this.userName.surname}` }),
      startButton
    );
    this.container.append(logoutButton.getButtonWrapper(), infoContainer);
  }

  public init(): void {
    this.build();
    document.body.replaceChildren(this.container);
  }
}