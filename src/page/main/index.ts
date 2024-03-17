import { Game } from '@/components/game/Game';
import { LogoutButton } from '@/components/login-form/Logout-button';
import { createElement } from '@/helpers/create-element';

type Props = {
  onLogout: () => void;
};

export class MainPage {
  private container = createElement('div', { className: 'h-full w-full flex justify-between items-center flex-col' });

  private onLogout: () => void;

  private isReadyForContinue: boolean = false;

  constructor({ onLogout }: Props) {
    this.onLogout = onLogout;
  }

  private build(): void {
    const buttonWrapper = createElement('div', { className: 'flex flex-row' });
    const logoutButton = new LogoutButton(this.onLogout);
    const checkButton = createElement('button', { className: 'button', textContent: 'Check', disabled: true });
    const autoCompleteButton = createElement('button', {
      className: 'button',
      textContent: 'Auto Complete',
      disabled: true,
    });
    this.isReadyForContinue = false;
    const game = this.createGame(checkButton, autoCompleteButton);
    checkButton.addEventListener('click', () => {
      this.handleCheckClick(game, checkButton);
    });
    autoCompleteButton.addEventListener('click', async () => {
      await game.sortCards();
      game.checkCards();
      autoCompleteButton.disabled = true;
    });

    buttonWrapper.append(checkButton, autoCompleteButton);
    this.container.append(logoutButton.getButtonWrapper(), game.getGameWrapper(), buttonWrapper);
  }

  private createGame(checkbtn: HTMLButtonElement, autobtn: HTMLButtonElement): Game {
    const checkButton = checkbtn;
    const autoCompleteButton = autobtn;
    const game = new Game({
      setCheckButtonState: (boolean: boolean): void => {
        checkButton.disabled = boolean;
        autoCompleteButton.disabled = boolean;
      },
      setContinueFlag: (boolean: boolean): void => {
        checkButton.textContent = boolean ? 'Continue' : 'Check';
        this.isReadyForContinue = boolean;
      },
    });
    return game;
  }

  private handleCheckClick(game: Game, checkbtn: HTMLButtonElement): void {
    const checkButton = checkbtn;
    if (this.isReadyForContinue) {
      game.resetBg();
      game.removeOnClick();
      game.setNextLine();
      checkButton.textContent = 'Check';
      checkButton.disabled = true;
      this.isReadyForContinue = false;
    } else {
      game.checkCards();
    }
  }

  public init(): void {
    this.build();
    document.body.replaceChildren(this.container);
  }
}
