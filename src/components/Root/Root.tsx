import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import { ThemeProvider } from 'styled-components';
import PrivateRoute from '../Routes/PrivateRoute';
import LoginRoute from '../Routes/LoginRoute';
import ServerListPage from '../ServerListPage/ServerListPage';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Login from '../Login/Login';
import theme from '../../theme';
import GlobalStyle from '../Styled/GlobalStyle';

type Props = {
    store: any;
};

const Root = ({ store }: Props) => (
    <Provider store={store}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Switch>
                    <LoginRoute exact path="/login" component={Login} />
                    <PrivateRoute exact path="/" component={ServerListPage} />
                    <PrivateRoute component={NotFoundPage} />
                </Switch>
            </BrowserRouter>
        </ThemeProvider>
    </Provider>
);

export default hot(Root);
