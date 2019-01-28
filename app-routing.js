import IndexComponent from './components/index.component';
import AuthenticationComponent from './components/authentication.component.js';

const routes = [
  { path: '/', component: IndexComponent, middlewares: [] },
  { path: '/authentication', component: AuthenticationComponent, middlewares: [] }
];

export default routes;
