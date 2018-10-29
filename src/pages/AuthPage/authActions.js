import { push } from 'connected-react-router'
import axios from '../../axios/instance'
import { ASYNC_ACTION_END, ASYNC_ACTION_START } from '../../constants/actions'
import { USER_TOKEN_ENDPOINT } from '../../constants/endpoints'
import routes from '../../constants/routes'

export const AUTHORIZE = '[AUTH]AUTHORIZE'
export const LOGIN_START = '[AUTH]LOGIN_START'
export const LOGIN_SUCCESS = '[AUTH]LOGIN_SUCCESS'
export const LOGIN_ERROR = '[AUTH]LOGIN_ERROR'
export const CLEAR_LOGIN_ERROR = '[AUTH]CLEAR_LOGIN_ERROR'
export const LOGOUT = '[AUTH]LOGOUT'

const login = (user) => (

  async (dispatch) => {
      try {
          dispatch({ type: ASYNC_ACTION_START })
          dispatch({ type: LOGIN_START })

          const response = await axios.post(USER_TOKEN_ENDPOINT, {
              ...user
          })

          if (response.status === 200) {
              dispatch({
                  type: LOGIN_SUCCESS,
                  payload: response.data.token
              })
              dispatch(push(routes.SERVERS))
              dispatch({ type: ASYNC_ACTION_END })
              return
          }

          dispatch({
              type: LOGIN_ERROR,
              payload: response
          })
          dispatch({ type: ASYNC_ACTION_END })

      } catch (e) {
          dispatch({
              type: LOGIN_ERROR,
              payload: e
          })
          dispatch({ type: ASYNC_ACTION_END })
      }
  }
)

const logOut = () => (
  (dispatch) => {
      dispatch({ type: LOGOUT })
      dispatch(push(routes.HOME))
  }
)

const clearLoginError = () => ({
    type: CLEAR_LOGIN_ERROR
})


export { login, logOut, clearLoginError }

