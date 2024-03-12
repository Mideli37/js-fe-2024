import { EntryPage } from '@/page/entry';
import { StartPage } from '@/page/start';
import { getLSData } from '@/services/Local-storage.service';

export class App {
  public init(): void {
    const loginInfo = getLSData('loginInfo');
    if (loginInfo) {
      this.openStartPage();
    } else {
      this.openEntryPage();
    }
  }

  private openStartPage(): void {
    const startPage = new StartPage({
      onLogout: (): void => {
        this.openEntryPage();
      },
    });
    startPage.init();
  }

  private openEntryPage(): void {
    const entryPage = new EntryPage({
      onSuccessfulLogin: (): void => {
        this.openStartPage();
      },
    });
    entryPage.init();
  }
}
