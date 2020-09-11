import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import authentication from '../slices/authentication.slice';
import servers from '../slices/servers.slice';

const reducer = combineReducers({
  authentication,
  servers,
});

const store = configureStore({
  reducer,
});

export default store;
