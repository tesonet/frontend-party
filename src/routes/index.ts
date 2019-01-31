import Login from '../views/Login';
import List from '../views/List';

const routes = [
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
