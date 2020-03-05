import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

export const initialPageState = {};

const pageReducer = (state = initialPageState, action) => {
  return state;
};

export const initialRootState = {
  page: initialPageState
};

export const rootReducer = combineReducers({
  page: pageReducer,
  form: formReducer
});
