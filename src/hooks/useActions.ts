/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { bindActionCreators, ActionCreatorsMapObject } from 'redux'
import { useDispatch } from 'react-redux'
import { useMemo } from 'react'

export function useActions<A, M extends ActionCreatorsMapObject<A>>(actions: M) {
  const dispatch = useDispatch()
  return useMemo(() => bindActionCreators(actions, dispatch), [dispatch, actions])
}
