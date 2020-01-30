import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import styled from 'styled-components'
import List from '../../../ui/List'
import ListHeader from '../../../ui/ListHeader'
import ListHeaderItem from '../../../ui/ListHeaderItem'
import ListHeaderText from '../../../ui/ListHeaderText'
import ListItem from '../../../ui/ListItem'
import ListItemText from '../../../ui/ListItemText'
import Icon from '../../../ui/Icon'
import {
  getSortedSeverList,
  getServerSortParams,
} from '../../../modules/servers/selectors'
import {
  fetchServers,
  updateServersSortParams,
} from '../../../modules/servers/actions'

const SortIcon = styled(Icon)`
  fill: currentColor;
  opacity: ${props => (props.show ? 1 : 0)};
  transition: transform 0.3s, opacity 0.3s;
  transform: rotate(
    ${props => {
      return props.direction === 'down' ? 180 : 0
    }}deg
  );
`

const SortableHeaderItem = styled(ListHeaderItem)`
  cursor: pointer;
  &:hover ${SortIcon} {
    opacity: 1;
  }
`

const getSortDirection = (key, currentKey, order) => {
  if (key === currentKey) {
    return order
  }

  return 'asc'
}

export default () => {
  const dispatch = useDispatch()
  const data = useSelector(getSortedSeverList)
  const sortParams = useSelector(getServerSortParams)

  const {key: sortKey, order} = sortParams

  useEffect(() => {
    dispatch(fetchServers())
  }, [dispatch])

  const handleRequestSort = property => {
    let sortDirection = getSortDirection(property, sortKey, order)

    if (property === sortKey) {
      sortDirection = sortDirection === 'asc' ? 'desc' : 'asc'
    }

    dispatch(
      updateServersSortParams({
        key: property,
        order: sortDirection,
      }),
    )
  }

  return (
    <List>
      <ListHeader>
        <SortableHeaderItem
          onClick={() => {
            handleRequestSort('name')
          }}>
          <ListHeaderText>
            Server
            <SortIcon
              name="arrow-up"
              ml={1}
              direction={
                getSortDirection('name', sortKey, order) === 'desc'
                  ? 'down'
                  : 'up'
              }
              show={sortKey === 'name'}
            />
          </ListHeaderText>
        </SortableHeaderItem>

        <SortableHeaderItem
          onClick={() => {
            handleRequestSort('distance')
          }}>
          <ListHeaderText>
            <SortIcon
              name="arrow-up"
              mr={1}
              direction={
                getSortDirection('distance', sortKey, order) === 'desc'
                  ? 'down'
                  : 'up'
              }
              show={sortKey === 'distance'}
            />
            Distance
          </ListHeaderText>
        </SortableHeaderItem>
      </ListHeader>
      {data.map(item => {
        return (
          <ListItem key={`${item.name}-${item.distance}`}>
            <ListItemText>{item.name}</ListItemText>
            <ListItemText>{item.distance}</ListItemText>
          </ListItem>
        )
      })}
    </List>
  )
}
