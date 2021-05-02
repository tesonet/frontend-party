/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { bindActionCreators, ActionCreatorsMapObject, AnyAction } from 'redux'
import { useDispatch } from 'react-redux'
import { useMemo, useCallback } from 'react'

export function useActions<A, M extends ActionCreatorsMapObject<A>>(actions: M) {
  const dispatch = useDispatch()
  return useMemo(() => bindActionCreators(actions, dispatch), [dispatch, actions])
}

export function useAction<A extends AnyAction>(action: A) {
  const dispatch = useDispatch()
  return useCallback(() => dispatch(action), [dispatch, action])
}
