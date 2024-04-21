import { createElement } from '@/helpers/create-element';
import { Message } from './Message';
import type { MsgSend } from '@/services/server-response.schema';

export class MessageSection {
  private container = createElement('div', { className: 'block w-full overflow-y-auto grow' });

  /*   private build(): void {

  } */

  public displayMsg(payload: MsgSend, fromRecipient: boolean): void {
    this.container.append(new Message(payload, fromRecipient).getContainer());
  }

  public getContainer(): HTMLDivElement {
    return this.container;
  }
}
