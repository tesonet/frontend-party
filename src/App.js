import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import './App.css';
import themeFile from './util/theme';
import axios from 'axios';

// MUI Stuff
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

// Components
import HomeAuthRoute from './util/HomeAuthRoute';
import LoginAuthRoute from './util/LoginAuthRoute';

// Pages
import login from './pages/login';
import home from './pages/home';

// Redux
import { Provider } from 'react-redux';
import store from './redux/store';
import { SET_AUTHENTICATED } from './redux/types';
import { logoutUser, getUserData } from './redux/actions/userActions';

const theme = createMuiTheme(themeFile);

const token = localStorage.FBIdToken;
if (token) {
  if (token !== 'undefined') {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common['Authorization'] = token;
    store.dispatch(getUserData());
  } else {
    store.dispatch(logoutUser());
    window.location.href = '/login';
  }
}

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <Router>
            <div className='container'>
              <Switch>
                <HomeAuthRoute exact path='/' component={home} />
                <LoginAuthRoute exact path='/login' component={login} />
                <Redirect to='/' />
              </Switch>
            </div>
          </Router>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
