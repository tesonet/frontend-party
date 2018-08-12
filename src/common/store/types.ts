import { ThunkAction } from 'redux-thunk';
import reducer from './reducer';

export type IAppState = ReturnType<typeof reducer>;

export type Thunk<R = void> = ThunkAction<R, IAppState, any, any>;
