import browserHistory from 'common/browserHistory';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';

const middleware = [routerMiddleware(browserHistory), thunk];

export default middleware;
