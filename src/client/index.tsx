import App from 'common/app';
import browserHistory from 'common/browserHistory';
import configureStore from 'common/store/configure-store';
import { init } from 'common/store/modules/auth/actions';
import { ConnectedRouter } from 'connected-react-router';
import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'sanitize.css';
import './styles.scss';

const store = configureStore(undefined, browserHistory);

store.dispatch(init());

const Component: React.SFC = () => (
  <Provider store={store}>
    <ConnectedRouter history={browserHistory}>
      <App />
    </ConnectedRouter>
  </Provider>
);

render(<Component />, document.getElementById('app'));
