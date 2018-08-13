import { routerMiddleware } from 'connected-react-router';
import { History } from 'history';
import thunk from 'redux-thunk';

const createMiddleware = (history: History) => [
  routerMiddleware(history),
  thunk
];

export default createMiddleware;
