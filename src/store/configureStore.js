import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import {createEpicMiddleware} from 'redux-observable'
import {createBrowserHistory} from 'history'
import authEpic from '../modules/auth/epics'
import authReducer from '../modules/auth/reducer'
import serversEpic from '../modules/servers/epics'
import serversReducer from '../modules/servers/reducer'
import * as api from '../api'
import combineEpics from '../utils/combineEpics'
import * as storage from './localStorage'

const history = createBrowserHistory()

const rootReducer = combineReducers({
  auth: authReducer,
  servers: serversReducer,
})

const epicMiddleware = createEpicMiddleware({
  dependencies: {
    api,
    history,
    storage,
  },
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
  const persistedState = storage.loadState()
  const store = createStore(
    rootReducer,
    persistedState,
    composeEnhancers(applyMiddleware(epicMiddleware)),
  )

  epicMiddleware.run(combineEpics(authEpic, serversEpic))

  return {store, history}
}
