import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux';
import authentication from '../slices/authentication.slice';

const reducer = combineReducers({
  authentication,
})
const store = configureStore({
  reducer,
})
export default store;