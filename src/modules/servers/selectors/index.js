import orderBy from 'lodash/orderBy'
import {createSelector} from 'reselect'

export const getServerList = state => state.servers.list
export const getIsLoading = state => state.servers.loading
export const getError = state => state.servers.error
export const getServerSortParams = state => state.servers.sortParams

export const getSortedSeverList = createSelector(
  getServerList,
  getServerSortParams,
  (serverList, sortParams) => {
    return orderBy(serverList, [sortParams.key], [sortParams.order])
  },
)
