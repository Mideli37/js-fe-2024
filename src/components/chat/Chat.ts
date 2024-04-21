import { createElement } from '@/helpers/create-element';
import type { UserInfo } from '../login-form/login-info.schema';

export class Chat {
  constructor(private userInfo?: UserInfo) {
    this.build();
  }

  private container = createElement('div', {
    className: 'p-3 m-3 flex flex-col justify-between items-center w-[65%] rounded-md border border-red-900',
  });

  private userStatusSpan = createElement('span');

  private input = createElement('input', {
    placeholder: 'Message..',
    type: 'text',
    disabled: true,
    className: 'w-full',
  });

  private build(): void {
    if (this.userInfo) {
      this.buildHeader();
      this.buildMsgInput();
      this.input.disabled = false;
    } else {
      this.container.append(createElement('p', { textContent: 'Select user to start a chat' }));
      this.buildMsgInput();
    }
  }

  private buildHeader(): void {
    const header = createElement('div', {
      className: 'flex flex-row justify-between p-2 w-full border-b-2 border-red-900',
    });
    if (this.userInfo) {
      this.updateStatus(this.userInfo);
    }
    const userName = createElement('span', { textContent: this.userInfo?.login });
    this.container.append(header);
    header.append(userName, this.userStatusSpan);
  }

  private buildMsgInput(): void {
    const wrapper = createElement('div', { className: 'flex flex-row w-full gap-2' });
    const button = createElement('button', { textContent: 'Send', className: 'button', disabled: true });
    this.input.addEventListener('input', () => {
      button.disabled = !this.input.value;
    });
    wrapper.append(this.input, button);
    this.container.append(wrapper);
  }

  public getContainer(): HTMLDivElement {
    return this.container;
  }

  public updateStatus(newUserInfo: UserInfo): void {
    this.userStatusSpan.textContent = newUserInfo.isLogined ? 'online' : 'offline';
  }
}
