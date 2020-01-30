import {ofType} from 'redux-observable'
import {of, empty} from 'rxjs'
import {
  switchMap,
  catchError,
  distinctUntilChanged,
  map,
  delay,
} from 'rxjs/operators'
import combineEpics from '../../../utils/combineEpics'
import * as actionTypes from '../types'
import * as actions from '../actions'
import {getToken} from '../selectors'

const loginUserEpic = (action$, state$, {api}) =>
  action$.pipe(
    ofType(actionTypes.LOGIN_PENDING),
    delay(1000), // for ux
    switchMap(action => {
      const {history, ...other} = action.payload

      return api.auth.login(other).pipe(
        // TODO: retry strategy
        switchMap(response => {
          return of(actions.loginUserFulfilled(response))
        }),
        catchError(() => {
          return of(
            actions.loginUserFailed(
              'Unable to log in. Please check the login details.',
            ),
          )
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
      // aaand not sure if needed
      history.push('/')

      return empty()
    }),
  )

const setAuthTokenEpic = (action$, state$, {api, storage}) =>
  state$.pipe(
    map(getToken),
    distinctUntilChanged(),
    switchMap(token => {
      api.http.setAuthToken(token)

      storage.saveState({
        auth: {
          userToken: getToken(state$.value),
        },
      })

      return empty()
    }),
  )

export default combineEpics(
  loginUserEpic,
  logoutUserEpic,
  redirectUserEpic,
  setAuthTokenEpic,
)
