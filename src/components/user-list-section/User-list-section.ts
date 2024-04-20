import { createElement } from '@/helpers/create-element';
import type { UserInfo } from '../login-form/login-info.schema';
import { UserListItem } from './User-list-item';

export class UserListSection {
  constructor() {
    this.build();
  }

  private container = createElement('div');

  private userList = createElement('ul');

  private usersInfo: UserInfo[] | null = null;

  private build(): void {
    const input = createElement('input', { type: 'search', placeholder: 'Search...' });
    input.addEventListener('input', () => {
      if (!this.usersInfo) {
        throw new Error('no users to filter');
      }
      const filteredUsers = this.usersInfo.filter((user) => user.login.startsWith(input.value));
      this.createUsersLI(filteredUsers);
    });
    this.container.append(input, this.userList);
  }

  public createUsersLI(users: UserInfo[]): void {
    const liElements = users.map((info) => new UserListItem(info).getElement());
    this.userList.replaceChildren(...liElements);
  }

  public getContainer(): HTMLDivElement {
    return this.container;
  }

  public setUsersInfo(users: UserInfo[]): void {
    this.usersInfo = users;
  }
}
