import Login from './containers/Login/Login';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';

const appRoutes = {
    login: {
        name: 'Login',
        path: '/login',
        component: Login,
    },
    notFound: {
        name: 'Page 404',
        path: '/404',
        component: NotFoundPage,
    },
};

export default appRoutes;