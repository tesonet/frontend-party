import { combineReducers, ThunkAction, Action } from '@reduxjs/toolkit';
import authReducer from './slices/auth.slice';
import serversReducer from './slices/servers.slice';

const rootReducer = combineReducers({
  auth: authReducer,
  servers: serversReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export default rootReducer;
