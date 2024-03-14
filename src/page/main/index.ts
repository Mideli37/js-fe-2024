import { Game } from '@/components/game/Game';
import { LogoutButton } from '@/components/login-form/Logout-button';
import { createElement } from '@/helpers/create-element';

type Props = {
  onLogout: () => void;
};

export class MainPage {
  private container = createElement('div', { className: 'h-full w-full flex justify-between items-center flex-col' });

  private onLogout: () => void;

  constructor({ onLogout }: Props) {
    this.onLogout = onLogout;
  }

  private build(): void {
    const game = new Game();
    const logoutButton = new LogoutButton(this.onLogout);
    this.container.append(logoutButton.getButtonWrapper(), game.getGameWrapper());
  }

  public init(): void {
    this.build();
    document.body.replaceChildren(this.container);
  }
}
