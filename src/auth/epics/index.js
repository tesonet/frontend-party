import {ofType} from 'redux-observable'
import {of, empty} from 'rxjs'
import {switchMap, catchError, distinctUntilChanged, map} from 'rxjs/operators'

import combineEpics from '../../utils/combineEpics'
import {loginUserFulfilled, loginUserFailed} from '../actions'
import * as ActionTypes from '../types'

const loginUserEpic = (action$, state$, {api}) =>
  action$.pipe(
    ofType(ActionTypes.LOGIN_PENDING),
    switchMap(action => {
      const {history, ...other} = action.payload

      return api.auth.login(other).pipe(
        switchMap(response => {
          return of(loginUserFulfilled(response))
        }),
        catchError(error => {
          return of(loginUserFailed(error))
        }),
      )
    }),
  )

const logoutUserEpic = action$ =>
  action$.pipe(
    ofType(ActionTypes.LOGIN_PENDING),
    switchMap(() => {
      return empty()
    }),
  )

const redirectUserEpic = (action$, state$, {history}) =>
  action$.pipe(
    ofType(ActionTypes.LOGIN_SUCCESS),
    switchMap(() => {
      // get last location
      history.push('/')

      return empty()
    }),
  )

const setAuthTokenEpic = (action$, state$, {api}) =>
  state$.pipe(
    map(state => state.auth.userToken),
    distinctUntilChanged(),
    switchMap(token => {
      api.http.setAuthToken(token)
      return empty()
    }),
  )

export default combineEpics(
  loginUserEpic,
  logoutUserEpic,
  redirectUserEpic,
  setAuthTokenEpic,
)
