import React from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {NAME} from './constants';
import reducer from './reducer';


export const getStore = () => createStore(
  combineReducers({
    [NAME]: reducer,
  }),
  applyMiddleware(thunk),
);


export const Container = ({children, store}) => (
  <Provider store={store || getStore()}>
    {children}
  </Provider>
);

Container.propTypes = {
  children: PropTypes.node,
  store: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

Container.defaultProps = {
  children: null,
  store: null,
};
