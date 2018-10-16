import * as React from 'react';
import { render } from 'react-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import { configureStore, getInitialState } from 'Services/store';
import routes from './routes';
import './index.scss';

const initialState = getInitialState(localStorage.getItem('token'));
const history = createHistory();
const store = configureStore(initialState, history);

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        {renderRoutes(routes)}
      </ConnectedRouter>
    </Provider>
  );
};

render(<App />, document.getElementById('root'));
