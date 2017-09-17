import { combineReducers, Store } from 'redux';
import { serversReducer, IServersReducer } from './serversReducer';
import { tokenReducer, ITokenReducer } from './tokenReducer';
import { initializationReducer, IInitializationReducer } from './initializationReducer';
import { Reducer } from 'redux-actions';

export type IStore = Store<IState>;
export interface IState {
  initialization: IInitializationReducer;
  servers: IServersReducer;
  token: ITokenReducer;
}

export default combineReducers<IState>({
  initialization: initializationReducer as Reducer<IInitializationReducer, any>,
  servers: serversReducer as Reducer<IServersReducer, any>,
  token: tokenReducer as Reducer<ITokenReducer, any>,
});
