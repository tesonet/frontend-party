import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { reducer as loginReducer } from '../../modules/login';

const persistConfig = {
  key: 'testio',
  storage,
  whitelist: ['token'],
};

export default combineReducers({
  form: formReducer,
  login: persistReducer(persistConfig, loginReducer),
});
