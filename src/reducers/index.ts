import {combineReducers} from 'redux';
import {serverListReducer} from '../views/ServerList/reducers/serverListReducer';
import {IServer} from '../views/ServerList/actions/serverListActions';

export interface IReduxState {
  servers: Array<IServer>;
}

export const rootReducer = combineReducers<IReduxState>({
  servers: serverListReducer
});
