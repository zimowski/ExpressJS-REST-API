import IndexComponent from './components/index.component';
import AuthenticationComponent from './components/authentication.component.js';
import RestrictedArea from '../core/restrictedArea';
import UserMiddleware from './middlewares/user.middleware';

// Example
import SecretComponent from './components/secret.component';
import ExampleModule from './example/example.module';

const routes = [
  { path: '/', component: IndexComponent, middlewares: [] },
  { path: '/authentication', component: AuthenticationComponent, middlewares: [] },
  // Example
  { path: '/secret', component: SecretComponent, middlewares: [RestrictedArea, UserMiddleware] },
  // Module example
  { path: '/module', component: ExampleModule, middlewares: [] }
];

export default routes;
