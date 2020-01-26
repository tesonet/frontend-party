import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {createEpicMiddleware} from 'redux-observable'
import {createBrowserHistory} from 'history'
import authEpic from '../auth/epics'
import authReducer from '../auth/reducer'
import serversEpic from '../servers/epics'
import serversReducer from '../servers/reducer'
import * as api from '../api'
import combineEpics from '../utils/combineEpics'
import {name} from '../../package.json'

const history = createBrowserHistory()

const rootReducer = combineReducers({
  auth: authReducer,
  servers: serversReducer,
})

const persistRootReducer = persistReducer(
  {
    key: `${name}:root`,
    storage,
  },
  rootReducer,
)

const epicMiddleware = createEpicMiddleware({
  dependencies: {
    api,
    history,
  },
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
  const store = createStore(
    persistRootReducer,
    composeEnhancers(applyMiddleware(epicMiddleware)),
  )

  const persistor = persistStore(store)

  epicMiddleware.run(combineEpics(authEpic, serversEpic))

  return {store, persistor, history}
}
