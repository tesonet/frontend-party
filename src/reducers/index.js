import { combineReducers } from 'redux'

import user from './fetchReducer'
import { reducer as form } from 'redux-form'

export default combineReducers({
  user,
  form
})
