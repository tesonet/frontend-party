import axios from 'axios'
import { ASYNC_ACTION_END, ASYNC_ACTION_START } from '../../constants/actions'

export const AUTHORIZE = '[AUTH]AUTHORIZE'
export const LOGIN_START = '[AUTH]LOGIN_START'
export const LOGIN_SUCCESS = '[AUTH]LOGIN_SUCCESS'
export const LOGIN_ERROR = '[AUTH]LOGIN_ERROR'
export const CLEAR_LOGIN_ERROR = '[AUTH]CLEAR_LOGIN_ERROR'
export const LOGOUT = '[AUTH]LOGOUT'

const TOKEN_URL = 'http://playground.tesonet.lt/v1/tokens'

const login = (user) => (
  async (dispatch) => {
      try {
          dispatch({ type: ASYNC_ACTION_START })
          dispatch({ type: LOGIN_START })

          const config = {
              method: 'post',
              url: TOKEN_URL,
              data: user
          }

          const response = await axios(config)

          if (response.status === 200) {
              dispatch({
                  type: LOGIN_SUCCESS,
                  payload: response.data.token
              })
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

const clearLoginError = () => ({
    type: CLEAR_LOGIN_ERROR
})

const logOut = () => ({
    type: LOGOUT
})

export { login, logOut, clearLoginError }

