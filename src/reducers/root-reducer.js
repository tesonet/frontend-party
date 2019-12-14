import currentUser from './current-user'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    currentUser,
})

export default rootReducer