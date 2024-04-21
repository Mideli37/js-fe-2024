import { createElement } from '@/helpers/create-element';
import type { MsgSendPayload } from '@/services/server-response.schema';

export class Message {
  constructor(
    payload: MsgSendPayload,
    private fromRecipient: boolean
  ) {
    this.message = payload.message;
    this.build();
  }

  private message;

  private container = createElement('div', {
    className: 'block p-3 m-3 rounded-md border border-red-900 w-[70%] min-w-[200px]',
  });

  private build(): void {
    if (!this.fromRecipient) {
      this.container.classList.add('ml-auto', 'mr-0');
    }
    const generalInfoWrapper = createElement('div', {
      className: 'flex flex-row w-full justify-between text-gray-600 text-xs',
    });
    const fromSpan = createElement('span', { textContent: this.message.from });
    const timeSpan = createElement('span', { textContent: new Date(this.message.datetime).toLocaleString() });
    generalInfoWrapper.append(fromSpan, timeSpan);
    const message = createElement('p', { textContent: this.message.text });
    const statusesWrapper = createElement('div', {
      className: 'flex flex-row w-full justify-end gap-2 text-gray-600 text-xs',
    });
    const editStatus = createElement('span', { textContent: this.message.status.isEdited ? 'edited' : '' });
    let status;
    if (this.message.status.isReaded) {
      status = 'read';
    } else if (this.message.status.isDelivered) {
      status = 'delivered';
    } else {
      status = 'not delivered';
    }
    const readStatus = createElement('span', {
      textContent: status,
    });
    statusesWrapper.append(editStatus, readStatus);
    this.container.append(generalInfoWrapper, message, statusesWrapper);
  }

  public getContainer(): HTMLDivElement {
    return this.container;
  }
}
