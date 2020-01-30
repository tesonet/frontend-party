import {orderBy} from 'lodash'
import {createSelector} from 'reselect'

export const getServerList = state => state.servers.list
export const getServerSortParams = state => state.servers.sortParams

export const getSortedSeverList = createSelector(
  getServerList,
  getServerSortParams,
  (serverList, sortParams) => {
    return orderBy(serverList, [sortParams.key], [sortParams.order])
  },
)
