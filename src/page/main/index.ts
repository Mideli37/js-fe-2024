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
    const buttonWrapper = createElement('div', { className: 'flex flex-row' });
    const logoutButton = new LogoutButton(this.onLogout);
    const checkButton = createElement('button', { className: 'button', textContent: 'Check', disabled: true });
    let isReadyForContinue = false;
    const game = new Game({
      setCheckButtonState: (boolean: boolean): void => {
        checkButton.disabled = boolean;
      },
      setContinueFlag: (boolean: boolean): void => {
        checkButton.textContent = boolean ? 'Continue' : 'Check';
        isReadyForContinue = boolean;
      },
    });
    checkButton.addEventListener('click', () => {
      if (isReadyForContinue) {
        game.resetBg();
        game.removeOnClick();
        game.setNextLine();
        checkButton.textContent = 'Check';
        checkButton.disabled = true;
        isReadyForContinue = false;
      } else {
        game.checkCards();
      }
    });
    buttonWrapper.append(checkButton);
    this.container.append(logoutButton.getButtonWrapper(), game.getGameWrapper(), buttonWrapper);
  }

  public init(): void {
    this.build();
    document.body.replaceChildren(this.container);
  }
}
