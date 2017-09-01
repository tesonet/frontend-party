import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoadingPage from './components/LoadingPage';
import LoginPage from './components/login/LoginPage';
import Servers from './components/servers/ServersPage';
import PageNotFound from './components/PageNotFound';
import { persistStore } from 'redux-persist';
import store from './Store';

class Routes extends Component {

  constructor() {
    super()
    this.state = { rehydrated: false }
  }

  componentWillMount(){
  persistStore(store, {}, () => {
    this.setState({ rehydrated: true })
  })
}

  render() {
    if(!this.state.rehydrated){
      return <LoadingPage />
    }
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={(this.props.login.token && this.props.login.userAuthenticated) ? Servers : LoginPage} />
          <Route path='*' component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.LoginReducer
  }
}

export default connect(mapStateToProps)(Routes);
