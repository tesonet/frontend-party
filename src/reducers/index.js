import {combineReducers} from 'redux'
import authReducer from '../pages/AuthPage/authReducer'
import serversReducer from '../pages/protected/Servers/serversReducer'

export default combineReducers({
    authReducer,
    serversReducer
})
