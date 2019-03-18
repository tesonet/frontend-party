import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const midlewares = [thunk];

export default applyMiddleware(...midlewares);
