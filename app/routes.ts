import LoginPage from 'Pages/login-page';
import ServersPage from 'Pages/servers-page';

export default [
  {
    component: ServersPage,
    path: '/',
    exact: true,
  },
  {
    component: LoginPage,
    path: '/login',
  },
];
