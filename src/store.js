import { combineReducers, createStore } from 'redux'
import { reducer as auth } from './ducks/auth/reducer';

const rootReducer = combineReducers({
  auth,
})

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);