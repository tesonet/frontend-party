import {handleActions} from 'redux-actions'
import {fetchServersFulfilled} from '../actions'

const initialState = {
  list: [],
}

export default handleActions(
  {
    [fetchServersFulfilled]: (state, action) => ({
      ...state,
      list: action.payload,
    }),
  },
  initialState,
)
