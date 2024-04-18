import { Dialog } from '@/components/dialog/Dialog';
import type { LoginInfo } from '@/components/login-form/login-info.schema';
import { createElement } from '@/helpers/create-element';
import { Router } from '@/services/router';
import { parseServerResponse } from '@/services/server-response.schema';
import { WebsocketService } from '@/services/websocket-service';

export class App {
  private websocket = new WebsocketService();

  private dialog = new Dialog();

  private pageContainer = createElement('div', { className: 'h-full w-full flex justify-center items-center' });

  private router = new Router(this.onLogin.bind(this));

  private userLogin: string | null = sessionStorage.getItem('userLogin');

  public async init(): Promise<void> {
    document.body.append(this.pageContainer);
    await this.websocket.init();
    this.build();
    this.dialog.init();
    this.router.initRouter(this.pageContainer);
    if (this.userLogin) {
      this.router.navigate('/main');
    } else {
      this.router.navigate('/login');
    }
  }

  private build(): void {
    this.websocket.setOnMsg(this.showErrorModal.bind(this));
    this.websocket.setOnMsg(this.onSuccessLogin.bind(this));
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

  private onSuccessLogin(event: MessageEvent): void {
    const data = parseServerResponse(event.data);
    if (data.type === 'USER_LOGIN') {
      this.userLogin = data.payload.user.login;
      sessionStorage.setItem('userLogin', JSON.stringify(this.userLogin));
      this.router.navigate('/main');
    }
  }
}
