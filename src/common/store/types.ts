import { RouterState } from 'connected-react-router';
import { ThunkAction } from 'redux-thunk';
import reducer from './reducer';

export type IAppState = ReturnType<typeof reducer> & { router: RouterState };

export type Thunk<R = void> = ThunkAction<R, IAppState, any, any>;
