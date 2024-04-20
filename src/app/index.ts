import { Dialog } from '@/components/dialog/Dialog';
import { loginInfoSchema, type LoginInfo } from '@/components/login-form/login-info.schema';
import { createElement } from '@/helpers/create-element';
import { Router } from '@/services/router';
import { parseServerResponse } from '@/services/server-response.schema';
import { stringToJsonSchema } from '@/services/string-to-json.schema';
import { WebsocketService } from '@/services/websocket-service';

export class App {
  private websocket = new WebsocketService();

  private dialog = new Dialog();

  private pageContainer = createElement('div', { className: 'h-full w-full flex justify-center items-center' });

  private router = new Router([
    {
      route: '/main',
      callback: (): Promise<HTMLDivElement> =>
        import('../pages/main').then(({ MainPage }) => {
          const login = stringToJsonSchema.parse(sessionStorage.getItem('userLogin'));
          if (typeof login !== 'string') {
            throw new Error('json wasnt parsed to string');
          }
          this.sendUpdateUsersMsg();
          return new MainPage(login, this.onLogout.bind(this), this.websocket).getContainer();
        }),
    },
    {
      route: '/login',
      callback: (): Promise<HTMLDivElement> =>
        import('../pages/entry').then(({ EntryPage }) => new EntryPage(this.onLogin.bind(this)).getContainer()),
    },
  ] as const);

  private userLogin: string | null = sessionStorage.getItem('userLogin');

  private loginInfo: LoginInfo | null = loginInfoSchema
    .nullable()
    .catch(null)
    .parse(stringToJsonSchema.nullable().catch(null).parse(sessionStorage.getItem('loginInfo')));

  public async init(): Promise<void> {
    document.body.append(this.pageContainer);
    await this.websocket.init();
    this.subscribe();
    this.dialog.init();
    this.router.initRouter(this.pageContainer);
    if (this.loginInfo) {
      this.onLogin(this.loginInfo);
    } else {
      Router.navigate('/login');
    }
  }

  private subscribe(): void {
    this.websocket.setOnMsg(this.showErrorModal.bind(this));
    this.websocket.setOnMsg(this.onSuccessLogin.bind(this));
    this.websocket.setOnMsg(this.onThirdPartyLoginLogout.bind(this));
  }

  private onLogin(loginInfo: LoginInfo): void {
    this.websocket.sendMsg('USER_LOGIN', { user: loginInfo });

    this.loginInfo = loginInfo;
    sessionStorage.setItem('loginInfo', JSON.stringify(this.loginInfo));
  }

  private onLogout(): void {
    this.websocket.sendMsg('USER_LOGOUT', { user: this.loginInfo });
    Router.navigate('./login');
    sessionStorage.clear();
  }

  private showErrorModal(event: MessageEvent): void {
    const data = parseServerResponse(event.data);
    if (data.type === 'ERROR') {
      this.dialog.clean();
      this.dialog.appendElements([createElement('p', { textContent: `ERROR! ${data.payload.error}` })]);
      this.dialog.open();
    }
  }

  private onSuccessLogin(event: MessageEvent): void {
    const data = parseServerResponse(event.data);
    if (data.type === 'USER_LOGIN') {
      this.userLogin = data.payload.user.login;
      sessionStorage.setItem('userLogin', JSON.stringify(this.userLogin));
      Router.navigate('/main');
    }
  }

  private onThirdPartyLoginLogout(event: MessageEvent): void {
    const data = parseServerResponse(event.data);
    if (data.type === 'USER_EXTERNAL_LOGOUT' || data.type === 'USER_EXTERNAL_LOGIN') {
      this.sendUpdateUsersMsg();
    }
  }

  private sendUpdateUsersMsg(): void {
    this.websocket.sendMsg('USER_ACTIVE', null);
    this.websocket.sendMsg('USER_INACTIVE', null);
  }
}
