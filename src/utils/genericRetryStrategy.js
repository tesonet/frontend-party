import {timer, throwError, never} from 'rxjs'
import {mergeMap, finalize, takeUntil} from 'rxjs/operators'

export default ({
  maxRetryAttempts = 3,
  scalingDuration = 1000,
  excludedStatusCodes = [],
  multiplyDurationByAttempt = false,
  useSchedule = false,
  schedule = [100, 500, 200, 1000],
  until = () => never(),
} = {}) => attempts =>
  attempts.pipe(
    mergeMap((error, i) => {
      const retryAttempt = i + 1
      // if maximum number of retries have been met
      // or response is a status code we don't wish to retry, throw error
      if (
        (maxRetryAttempts && retryAttempt > maxRetryAttempts) ||
        excludedStatusCodes.find(e => e === error.status)
      ) {
        return throwError(error)
      }
      let retryIn = scalingDuration
      if (useSchedule) {
        retryIn = schedule[i] || schedule[schedule.length - 1]
      } else if (multiplyDurationByAttempt) {
        retryIn *= retryAttempt
      }
      // retry after 1s, 2s, etc...
      return timer(retryIn)
    }),
    takeUntil(until()),
    finalize(() => {
      // log this?
    }),
  )
