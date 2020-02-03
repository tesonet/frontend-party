import {catchError} from 'rxjs/operators'
import {combineEpics} from 'redux-observable'

export default (...epics) => (action$, store$, dependencies) =>
  combineEpics(...epics)(action$, store$, dependencies).pipe(
    catchError((error, source) => {
      // eslint-disable-next-line
      console.error(error)
      return source
    }),
  )
