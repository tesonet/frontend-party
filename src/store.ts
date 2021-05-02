import storageSession from 'redux-persist/lib/storage/session'
import { persistReducer, persistStore } from 'redux-persist'
import { AnyAction, combineReducers, createStore, Store, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { serversReducer } from './reducers/servers'

declare module 'react-redux' {
  export interface DefaultRootState extends AppState {}
}

const persistConfig = {
  key: 'quiz-flow-boilerplate',
  storage: storageSession,
}

const persistedReducer = persistReducer(persistConfig, combineReducers({ servers: serversReducer }))
let store: Store<{}, AnyAction> = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk)),
)
export const configStore = () => {
  return {
    store,
    persistor: persistStore(store),
  }
}

export type AppStore = typeof store
export type AppState = ReturnType<typeof persistedReducer>
