import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from "react-router-dom";


import App from './App';
import FormPage from './components/FormPage/Form';
import LoginPage from './components/LoginPage/Login';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import store from './store';


ReactDOM.render(
  <Provider store={store}>
      <Router>
      <div>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/form">Form</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/form" exact={true} component={FormPage} />
            <Route component={LoginPage} />
          </Switch>
        </div>
      </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();