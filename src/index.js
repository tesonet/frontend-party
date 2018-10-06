import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react';
import 'bootstrap/dist/css/bootstrap.css';

import {
    store,
    persistor,
    history,
} from 'app/store';

import App from 'app/app';

// TODO add spinner/loader
// TODO add app skeleton
ReactDOM.render(
    <Provider store={ store }>
        <PersistGate persistor={ persistor } loading={ null }>
            <ConnectedRouter history={ history }>
                <App />
            </ConnectedRouter>
        </PersistGate>
    </Provider>,
    document.getElementById('app')
);
