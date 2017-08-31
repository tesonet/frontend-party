import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
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
      return <h1>LOADING</h1>
    }
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={(this.props.login.token && this.props.login.userAuthenticated) ? Servers : App} />
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
