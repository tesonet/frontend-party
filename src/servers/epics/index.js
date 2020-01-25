import {ofType} from 'redux-observable'
import {of} from 'rxjs'
import {mergeMap, catchError} from 'rxjs/operators'

import combineEpics from '../../utils/combineEpics'
import * as actions from '../actions'
import * as actionTypes from '../types'

const fetchServersEpic = (action$, state$, {api}) =>
  action$.pipe(
    ofType(actionTypes.FETCH_SERVERS_PENDING),
    mergeMap(() => {
      return api.servers.fetch().pipe(
        mergeMap(response => {
          return of(actions.fetchServersFulfilled(response))
        }),
        catchError(error => of(actions.fetchServersFailed(error))),
      )
    }),
  )

export default combineEpics(fetchServersEpic)
