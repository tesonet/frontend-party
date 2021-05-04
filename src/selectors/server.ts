import { serverSortCompare } from 'libs/utils'
import { createSelector } from 'reselect'
import { AppState } from 'store'

const serverSelector = (state: AppState) => state.servers.servers
const sortBySelector = (state: AppState) => state.servers.sortBy

export const serverSortSelector = createSelector(
  serverSelector,
  sortBySelector,
  (servers, sortBy) => {
    const unsortedItems = [...servers]
    const compareBy = serverSortCompare(sortBy)
    if (sortBy === null || compareBy === 0) return servers
    return unsortedItems.sort(compareBy)
  },
)
