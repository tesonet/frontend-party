import React from 'react';

// React router
import {
    BrowserRouter,
    Switch,
    Route,
} from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import store from '../redux/store';

// Redux Actions Creators
import {
    setUser,
} from '../redux/actions';

// Lookups
import {
    getUserWithToken,
} from '../api/lookups';

// Hoc
import AuthRoute from './hoc/authRoute';

// Pages
import Home from './pages/home';
import Login from './pages/login';
import NotFound from './pages/404';
import Dashboard from './pages/dashboard';

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <Switch>
                            <Route exact path='/login' component={Login}/>
                            <AuthRoute path='/dashboard' component={Dashboard}/>
                            <Route exact path='/' component={Home}/>
                            <Route path='/' component={NotFound}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }

    async componentDidMount() {
        const user = await getUserWithToken();
        store.dispatch(setUser({ user }));
    }
}

export default App;
