import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import userReducer from './user/reducer';

const rootReducer = combineReducers({
  form: formReducer,
  user: userReducer,
});

const index = createStore(
  rootReducer,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default index;
