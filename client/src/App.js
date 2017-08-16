import React, { Component } from 'react';
import Routes from './screens';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { ApiMiddleware } from './utils';
import reducer from './reducers';
import { LoadingView } from './components/ui';
import 'font-awesome/css/font-awesome.min.css';
import './App.scss';

const persistorConfig = {
  whitelist: ['login']
};

const middlewares = [thunk, ApiMiddleware('')];
const toolChain = [applyMiddleware(...middlewares), autoRehydrate()];
const store = compose(...toolChain)(createStore)(reducer, {});

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rehydrated: false
    }
  }

  componentWillMount(){
    persistStore(store, persistorConfig, () => {
      this.setState({ rehydrated: true })
    })
  }

  renderContent() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }

  renderLoading() {
    return (
      <LoadingView />
    );
  }

  render() {
    const { rehydrated } = this.state;

    return (
      rehydrated ? this.renderContent() : this.renderLoading()
    );
  }
}

export default App;
