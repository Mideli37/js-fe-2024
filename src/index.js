import { App } from './widgets/app/App';
import './main.css';

const app = new App();
app.init();

window.addEventListener('beforeunload', () => {
  app.saveDataToLS();
});
