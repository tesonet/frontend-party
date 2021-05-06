import { Server } from 'types/server'
import { SortBy } from 'reducers/server'

type SortTypeValues = -1 | 0 | 1

export const addKmToDistance = (distance: number): string => {
  return `${distance} km`
}

export const serverSortCompare = (
  key: SortBy,
): ((serverA: Server, serverB: Server) => SortTypeValues) | 0 => {
  if (key === null) return 0
  return (serverA: Server, serverB: Server): SortTypeValues => {
    if (serverA[key] > serverB[key]) return 1
    if (serverA[key] < serverB[key]) return -1
    return 0
  }
}
