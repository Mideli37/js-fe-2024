import { Footer } from '@/components/footer/Footer';
import { Header } from '@/components/header/Header';
import type { UserInfo } from '@/components/login-form/login-info.schema';
import { UserListSection } from '@/components/user-list-section/User-list-section';
import { createElement } from '@/helpers/create-element';
import { parseServerResponse } from '@/services/server-response.schema';
import type { WebsocketService } from '@/services/websocket-service';

export class MainPage {
  constructor(
    private userLogin: string,
    private onLogout: () => void,
    private /* onServerMsg: (callback: (event: MessageEvent) => void) => void */ websocket: WebsocketService
  ) {
    this.init();
  }

  private activeUsers: UserInfo[] | null = null;

  private inactiveUsers: UserInfo[] | null = null;

  private userListSection = new UserListSection();

  private container = createElement('div', {
    className:
      'w-full m-8 p-3 flex-col flex justify-center items-center bg-orange-100 rounded-md border-red-900 border',
  });

  public init(): void {
    this.websocket.setOnMsg(this.updateUsers.bind(this));
    const header = new Header(this.userLogin, this.onLogout);
    const chatWrapper = createElement('div');
    chatWrapper.append(this.userListSection.getContainer());
    const footer = new Footer();
    this.container.append(header.getContainer(), chatWrapper, footer.getContainer());
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
    return [...sortedActive, ...sortedInactive];
  }
}
