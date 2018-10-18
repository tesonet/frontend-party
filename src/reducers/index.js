import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import authReducer from '../pages/AuthPage/authReducer'
import serversReducer from '../pages/protected/Servers/serversReducer'

export default combineReducers({
    authReducer,
    serversReducer,
    routing: routerReducer
})
