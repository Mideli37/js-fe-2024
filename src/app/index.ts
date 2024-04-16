import { Dialog } from '@/components/dialog/Dialog';
import type { LoginInfo } from '@/components/login-form/login-info.schema';
import { createElement } from '@/helpers/create-element';
import { EntryPage } from '@/pages/entry';
import { MainPage } from '@/pages/main';
import { parseServerResponse } from '@/services/server-response.schema';
import { WebsocketService } from '@/services/websocket-service';

export class App {
  private websocket = new WebsocketService();

  private dialog = new Dialog();

  private pageContainer = createElement('div', { className: 'h-full w-full flex justify-center items-center' });

  public async init(): Promise<void> {
    document.body.append(this.pageContainer);
    await this.websocket.init();
    this.build();
    this.dialog.init();
  }

  private build(): void {
    this.websocket.setOnMsg(this.showErrorModal.bind(this));
    this.websocket.setOnMsg(this.onSuccessLogin.bind(this));
    this.openEntryPage(this.onLogin.bind(this));
  }

  private onLogin(loginInfo: LoginInfo): void {
    this.websocket.sendMsg('USER_LOGIN', { user: loginInfo });
  }

  private showErrorModal(event: MessageEvent): void {
    this.dialog.clean();
    // console.log('Event data  ', event.data);
    const data = parseServerResponse(event.data);
    if (data.type === 'ERROR') {
      this.dialog.appendElements([createElement('p', { textContent: `АШЫПКА! ${data.payload.error}` })]);
      this.dialog.open();
    }
  }

  private openMainPage(userLogin: string): void {
    const mainPage = new MainPage(userLogin);
    mainPage.init();
    this.pageContainer.replaceChildren(mainPage.getContainer());
  }

  private openEntryPage(onLogin: (loginInfo: LoginInfo) => void): void {
    const entryPage = new EntryPage(onLogin);
    entryPage.init();
    this.pageContainer.replaceChildren(entryPage.getContainer());
  }

  private onSuccessLogin(event: MessageEvent): void {
    const data = parseServerResponse(event.data);
    if (data.type === 'USER_LOGIN') {
      // console.log('Success login');
      this.openMainPage(data.payload.user.login);
    }
  }
}
