import {ofType} from 'redux-observable'
import {of, empty} from 'rxjs'
import {switchMap, catchError, distinctUntilChanged, map} from 'rxjs/operators'

import combineEpics from '../../utils/combineEpics'
import * as actionTypes from '../types'
import * as actions from '../actions'
import {getToken} from '../selectors'

const loginUserEpic = (action$, state$, {api}) =>
  action$.pipe(
    ofType(actionTypes.LOGIN_PENDING),
    switchMap(action => {
      const {history, ...other} = action.payload

      return api.auth.login(other).pipe(
        switchMap(response => {
          return of(actions.loginUserFulfilled(response))
        }),
        catchError(error => {
          return of(actions.loginUserFailed(error))
        }),
      )
    }),
  )

const logoutUserEpic = action$ =>
  action$.pipe(
    ofType(actionTypes.LOGOUT),
    switchMap(() => {
      return empty()
    }),
  )

const redirectUserEpic = (action$, state$, {history}) =>
  action$.pipe(
    ofType(actionTypes.LOGIN_SUCCESS),
    switchMap(() => {
      // get last location
      history.push('/')

      return empty()
    }),
  )

const setAuthTokenEpic = (action$, state$, {api}) =>
  state$.pipe(
    map(getToken),
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
