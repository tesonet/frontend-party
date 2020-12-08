import * as React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import {
    LoginPage,
    ServersPage,
    Error503,
    Error404
} from './pages';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './helpers';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <React.StrictMode>
                    <Router>
                        <Switch>

                            <Route exact path="/">
                                <Redirect to="/login" />
                            </Route>

                            <PrivateRoute exact path="/servers" component={ServersPage} />

                            <Route exact path="/login" component={LoginPage} />
                            <Route exact path="/503" component={Error503} />
                            <Route component={Error404} status={404} />

                        </Switch>
                    </Router>
                </React.StrictMode>
            </PersistGate>
        </Provider>
    );
}

export default App;