import { EntryPage } from '@/page/entry';
import { StartPage } from '@/page/start';
import { getLSData, saveLSData } from '@/services/Local-storage.service';
import { loginInfoSchema, type LoginInfo } from '@/services/login-info.schema';

export class App {
  private loginInfo: LoginInfo | null = null;

  public init(): void {
    try {
      this.loginInfo = loginInfoSchema.parse(getLSData('loginInfo'));
      this.openStartPage();
    } catch {
      this.openEntryPage();
    }
  }

  private openStartPage(): void {
    if (this.loginInfo === null) {
      throw new Error('No userName to call openStartPage fn');
    }
    const startPage = new StartPage({
      onLogout: (): void => {
        this.openEntryPage();
        this.loginInfo = null;
      },
      userName: this.loginInfo,
    });
    startPage.init();
  }

  private openEntryPage(): void {
    const entryPage = new EntryPage({
      onSuccessfulLogin: (userName: LoginInfo): void => {
        this.loginInfo = userName;
        this.openStartPage();
      },
    });
    entryPage.init();
  }

  public saveLoginInfo(): void {
    saveLSData('loginInfo', this.loginInfo);
  }
}
