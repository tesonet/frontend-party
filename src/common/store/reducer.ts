import { combineReducers } from 'redux';

const reducer = combineReducers({
  device: (state = { test: true }) => state
});

export default reducer;
