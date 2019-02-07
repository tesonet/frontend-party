import Login from '../views/Login';
import List from '../views/List';
import { IRoute } from '../interfaces';

const routes: IRoute[] = [
  {
    component: Login,
    exact: true,
    name: 'Login',
    path: '/login',
    secured: false
  },
  {
    component: List,
    exact: true,
    name: 'List',
    path: '/list',
    secured: true
  },
];

export default routes;
