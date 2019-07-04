import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { authenticationReducer, AuthenticationSliceShape } from './authentication';
import { entitiesReducer, EntitiesSliceShape } from './entities';
import { spinnerReducer } from './spinner';

export type StoreShape = { 
  authentication: AuthenticationSliceShape,
  entities: EntitiesSliceShape,
  spinner: boolean;
};

const rootReducer = (state: StoreShape = {} as StoreShape, action: any) => {
  return {
    authentication: authenticationReducer(state.authentication, action),
    entities: entitiesReducer(state.entities, action),
    spinner: spinnerReducer(state.spinner, action),
  };
};

export default createStore(rootReducer, applyMiddleware(thunk));