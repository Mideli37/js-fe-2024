import { LoginForm } from './components/login-form/Login-form';
import './style.css';

const form = new LoginForm();
document.body.append(form.getContainer());
