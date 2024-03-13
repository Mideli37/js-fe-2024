import { App } from './app/app';
import './style.css';

const app = new App();
app.init();

window.addEventListener('beforeunload', () => {
  app.saveLoginInfo();
});
