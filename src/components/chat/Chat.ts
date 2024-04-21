import { createElement } from '@/helpers/create-element';
import type { UserInfo } from '../login-form/login-info.schema';
import { MessageSection } from '../message/Message-section';
import type { MsgSendPayload } from '@/services/server-response.schema';

export class Chat {
  constructor(
    private onMsgSend: (text: string) => void,
    private recipientInfo?: UserInfo
  ) {
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

  private messageSection: MessageSection | null = null;

  private build(): void {
    if (this.recipientInfo) {
      this.buildHeader();
      this.messageSection = new MessageSection();
      this.container.append(this.messageSection.getContainer());
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
    if (this.recipientInfo) {
      this.updateStatus(this.recipientInfo);
    }
    const userName = createElement('span', { textContent: this.recipientInfo?.login });
    this.container.append(header);
    header.append(userName, this.userStatusSpan);
  }

  private buildMsgInput(): void {
    const form = createElement('form', { className: 'flex flex-row w-full gap-2' });
    const button = createElement('button', { textContent: 'Send', className: 'button', disabled: true });
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.onMsgSend(this.input.value);
    });
    this.input.addEventListener('input', () => {
      button.disabled = !this.input.value;
    });
    form.append(this.input, button);
    this.container.append(form);
  }

  public getContainer(): HTMLDivElement {
    return this.container;
  }

  public updateStatus(newUserInfo: UserInfo): void {
    this.userStatusSpan.textContent = newUserInfo.isLogined ? 'online' : 'offline';
  }

  public displayMsg(payload: MsgSendPayload): void {
    const fromRecipient = !(payload.message.from !== this.recipientInfo?.login);
    this.messageSection?.displayMsg(payload, fromRecipient);
  }
}
