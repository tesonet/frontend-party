import { RouterState } from 'connected-react-router';
import { Store } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import reducer from './reducer';

export type IAppState = ReturnType<ReturnType<typeof reducer>> & {
  router: RouterState;
};

export interface IAppStore<S> extends Store<S> {
  dispatch: ThunkDispatch<S, void, any>;
}

export type Thunk<R = void> = ThunkAction<R, IAppState, any, any>;
