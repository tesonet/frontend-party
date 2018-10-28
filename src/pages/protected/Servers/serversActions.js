import axios from '../../../axios/instance'
import { ASYNC_ACTION_END, ASYNC_ACTION_START } from '../../../constants/actions'
import { SERVER_LIST_ENDPOINT } from '../../../constants/endpoints'

export const FETCH_LIST_START = '[ASYNC]FETCH_LIST_START'
export const FETCH_LIST_SUCCESS = '[ASYNC]FETCH_LIST_SUCCESS'
export const FETCH_LIST_ERROR = '[ASYNC]FETCH_LIST_ERROR'

export const SORT_BY_DISTANCE = '[SERVER_LIST]SORT_BY_DISTANCE'
export const SORT_BY_NAME = '[SERVER_LIST]SORT_BY_NAME'


export const ADD_TO_FAVOURITES = '[SERVER_LIST]ADD_TO_FAVOURITES'
export const REMOVE_FROM_FAVOURITES = '[SERVER_LIST]REMOVE_FROM_FAVOURITES'

const fetchList = () => (

  async (dispatch) => {
      try {
          dispatch({ type: ASYNC_ACTION_START })

          const response = await axios.get(SERVER_LIST_ENDPOINT)

          if (response.status === 200) {
              dispatch({
                  type: FETCH_LIST_SUCCESS,
                  payload: response.data
              })
              dispatch({ type: ASYNC_ACTION_END })
              return
          }

          dispatch({
              type: FETCH_LIST_ERROR,
              payload: response
          })
          dispatch({ type: ASYNC_ACTION_END })

      } catch (e) {
          dispatch({
              type: FETCH_LIST_ERROR,
              payload: e
          })
          dispatch({ type: ASYNC_ACTION_END })
      }
  }
)

const sortByDistance = () => ({
    type: SORT_BY_DISTANCE
})

const sortByName = () => ({
    type: SORT_BY_NAME
})

const addToFavourites = server => ({
    type: ADD_TO_FAVOURITES,
    server
})

const removeFromFavourites = server => ({
    type: REMOVE_FROM_FAVOURITES,
    server
})

export { addToFavourites, removeFromFavourites, sortByDistance, sortByName, fetchList }
