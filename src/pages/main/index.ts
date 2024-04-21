import { Chat } from '@/components/chat/Chat';
import { Footer } from '@/components/footer/Footer';
import { Header } from '@/components/header/Header';
import type { UserInfo } from '@/components/login-form/login-info.schema';
import { UserListSection } from '@/components/user-list-section/User-list-section';
import { createElement } from '@/helpers/create-element';
import { msgSendSchema, parseServerResponse } from '@/services/server-response.schema';
import type { WebsocketService } from '@/services/websocket-service';

export class MainPage {
  constructor(
    private userLogin: string,
    private onLogout: () => void,
    private websocket: WebsocketService
  ) {
    this.init();
  }

  private activeUsers: UserInfo[] | null = null;

  private inactiveUsers: UserInfo[] | null = null;

  private userListSection = new UserListSection(this.changeChat.bind(this));

  private container = createElement('div', {
    className:
      'w-full m-8 p-3 flex-col flex justify-center items-center bg-orange-100 rounded-md border-red-900 border',
  });

  private chatWrapper = createElement('div', { className: 'flex flex-row w-full h-[80dvh] justify-between' });

  private currentRecipient: UserInfo | null = null;

  private chat = new Chat(this.sendMsg.bind(this));

  public init(): void {
    this.websocket.setOnMsg(this.updateUsers.bind(this));
    this.websocket.setOnMsg(this.createSendMsg.bind(this));
    this.websocket.setOnMsg(this.createAllMessanges.bind(this));
    const header = new Header(this.userLogin, this.onLogout);
    this.chatWrapper.append(this.userListSection.getContainer(), this.chat.getContainer());
    const footer = new Footer();
    this.container.append(header.getContainer(), this.chatWrapper, footer.getContainer());
  }

  public getContainer(): HTMLDivElement {
    return this.container;
  }

  private updateUsers(event: MessageEvent): void {
    const data = parseServerResponse(event.data);
    if (data.type === 'USER_ACTIVE') {
      this.activeUsers = data.payload.users;
    } else if (data.type === 'USER_INACTIVE') {
      this.inactiveUsers = data.payload.users;
    }
    if (this.activeUsers && this.inactiveUsers) {
      this.userListSection.setUsersInfo(this.sortUsers());
      this.userListSection.createUsersLI(this.sortUsers());
      this.activeUsers = null;
      this.inactiveUsers = null;
    }
  }

  private sortUsers(): UserInfo[] {
    if (!(this.activeUsers && this.inactiveUsers)) {
      throw new Error('no users to sort');
    }
    const sortedActive = this.activeUsers.filter((user) => user.login !== this.userLogin);
    sortedActive.sort((a, b) => a.login.localeCompare(b.login));
    const sortedInactive = this.inactiveUsers.toSorted((a, b) => a.login.localeCompare(b.login));
    const allUsers = [...sortedActive, ...sortedInactive];
    if (this.currentRecipient) {
      const userNewInfo = allUsers.filter((user) => user.login === this.currentRecipient?.login)[0];
      if (userNewInfo) {
        this.chat.updateStatus(userNewInfo);
      }
    }
    return allUsers;
  }

  private changeChat(userInfo: UserInfo): void {
    this.currentRecipient = userInfo;
    this.fetchMsgHistory();
    this.chat = new Chat(this.sendMsg.bind(this), userInfo);
    this.chatWrapper.replaceChildren(this.userListSection.getContainer(), this.chat.getContainer());
  }

  private sendMsg(msg: string): void {
    if (this.currentRecipient) {
      this.websocket.sendMsg('MSG_SEND', {
        message: {
          to: this.currentRecipient.login,
          text: msg,
        },
      });
    }
  }

  private createSendMsg(event: MessageEvent): void {
    const data = parseServerResponse(event.data);
    if (data.type === 'MSG_SEND') {
      msgSendSchema.parse(data.payload.message);
      this.chat.displayMsg(data.payload.message);
    }
  }

  private fetchMsgHistory(): void {
    if (this.currentRecipient) {
      this.websocket.sendMsg('MSG_FROM_USER', {
        user: { login: this.currentRecipient.login },
      });
    }
  }

  private createAllMessanges(event: MessageEvent): void {
    const data = parseServerResponse(event.data);
    if (data.type === 'MSG_FROM_USER') {
      data.payload.messages.forEach((message) => {
        msgSendSchema.parse(message);
        this.chat.displayMsg(message);
      });
    }
  }
}
