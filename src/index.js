import App from './components/app/app';
import './global.css';

const app = new App();
app.start();
console.log(process.env.API_URL)
console.log(process.env.API_KEY)
