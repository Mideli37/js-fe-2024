import { createElement } from '@/helpers/create-element';
import type { UserInfo } from '../login-form/login-info.schema';
import { UserListItem } from './User-list-item';

export class UserListSection {
  constructor(private onLIClick: (userInfo: UserInfo) => void) {
    this.build();
  }

  private container = createElement('div', {
    className: 'p-3 m-3 w-1/3 flex flex-col justify-between rounded-md border border-red-900',
  });

  private userList = createElement('ul', { className: 'overflow-y-scroll h-[93%]' });

  private usersInfo: UserInfo[] | null = null;

  private build(): void {
    const input = createElement('input', { type: 'search', placeholder: 'Search...', className: 'w-full' });
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
    const liElements = users.map((info) => new UserListItem(info, this.onLIClick).getElement());
    this.userList.replaceChildren(...liElements);
  }

  public getContainer(): HTMLDivElement {
    return this.container;
  }

  public setUsersInfo(users: UserInfo[]): void {
    this.usersInfo = users;
  }
}
