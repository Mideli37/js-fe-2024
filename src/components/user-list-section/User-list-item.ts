import { createElement } from '@/helpers/create-element';
import type { UserInfo } from '../login-form/login-info.schema';

export class UserListItem {
  constructor(
    private userInfo: UserInfo,
    private onClick: (userInfo: UserInfo) => void
  ) {
    this.build();
  }

  private listItem = createElement('li', {
    className: 'flex flex-row items-center justify-between hover:cursor-pointer hover:bg-[#ffe3d5] duration-300',
  });

  private build(): void {
    const indicator = createElement('div', { className: 'indicator' });
    indicator.classList.add(this.userInfo.isLogined ? 'bg-[#3eff24]' : 'bg-[#ff6924]');
    this.listItem.append(createElement('span', { textContent: this.userInfo.login.toString() }), indicator);
    this.listItem.addEventListener('click', () => {
      this.onClick(this.userInfo);
    });
  }

  public getElement(): HTMLLIElement {
    return this.listItem;
  }
}
