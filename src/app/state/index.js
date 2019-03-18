import { createStore } from 'redux';
import mainReducer from './reducers';

import getMiddlewares from './getMiddlewares';

const store = createStore(mainReducer, getMiddlewares);

export default store;
