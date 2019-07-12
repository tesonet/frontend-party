import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import PrivateRoute from '../Routes/PrivateRoute';
import LoginRoute from '../Routes/LoginRoute';
import ServerListPage from '../Servers/Servers';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Login from '../Login/Login';
import GlobalStyle from '../common/GlobalStyle';

type Props = {
    store: any;
};

const Root = ({ store }: Props) => (
    <Provider store={store}>
        <GlobalStyle />
        <BrowserRouter>
            <Switch>
                <LoginRoute exact path="/login" component={Login} />
                <PrivateRoute exact path="/" component={ServerListPage} />
                <PrivateRoute component={NotFoundPage} />
            </Switch>
        </BrowserRouter>
    </Provider>
);

export default hot(Root);
