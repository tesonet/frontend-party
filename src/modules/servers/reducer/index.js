import {handleActions} from 'redux-actions'
import {fetchServersFulfilled, updateServersSortParams} from '../actions'

const initialState = {
  list: [],
  sortParams: {key: 'distance', order: 'asc'},
}

export default handleActions(
  {
    [fetchServersFulfilled]: (state, action) => ({
      ...state,
      list: action.payload,
    }),
    [updateServersSortParams]: (state, action) => ({
      ...state,
      sortParams: action.payload,
    }),
  },
  initialState,
)
