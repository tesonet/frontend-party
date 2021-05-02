import storageSession from 'redux-persist/lib/storage/session'
import { persistReducer } from 'redux-persist'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { serversReducer } from './reducers/server'
import { authReducer } from './reducers/auth'

declare module 'react-redux' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultRootState extends AppState {}
}

const persistConfig = {
  key: 'testio-boilerplate',
  storage: storageSession,
}

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({ servers: serversReducer, auth: authReducer }),
)
const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)))
export const configStore = () => {
  return {
    store,
    // persistor: persistStore(store),
  }
}

export type AppStore = typeof store
export type AppState = ReturnType<typeof persistedReducer>
