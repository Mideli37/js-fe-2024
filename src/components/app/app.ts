import { safeQuerySelector } from '@/helpers/safeQuerySelector';
import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { assertIsEverythingResponse } from '@/helpers/isEverythingResponse';
import { assertIsSourceResponse } from '@/helpers/isSourceResponse';

class App {
  public controller: AppController;

  public view: AppView;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  public start(): void {
    const sources = safeQuerySelector('.sources');
    const button = safeQuerySelector('.source-button');
    button.addEventListener('click', () => {
      sources.classList.toggle('open');
    });
    sources.addEventListener('click', (e) => {
      sources.classList.remove('open');
      return this.controller.getNews(e, (data) => {
        assertIsEverythingResponse(data);
        this.view.drawNews(data);
      });
    });
    this.controller.getSources((data) => {
      assertIsSourceResponse(data);
      this.view.drawSources(data);
    });
  }
}

export default App;
