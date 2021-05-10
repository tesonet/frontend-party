declare module 'react-redux' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultRootState extends AppState {}
}

import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { serversReducer } from './reducers/server'
import { authReducer } from './reducers/auth'

const rootReducer = combineReducers({ servers: serversReducer, auth: authReducer })

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
export default store

export type AppStore = typeof store
export type AppState = ReturnType<typeof rootReducer>
