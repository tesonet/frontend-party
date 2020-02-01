import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import styled from 'styled-components'
import {
  List,
  ListHeader,
  ListHeaderItem,
  ListHeaderText,
  ListItem,
  ListItemText,
  Icon,
  Spinner,
  Button,
  Alert,
  Box,
} from '../../../ui'
import * as selectors from '../../../modules/servers/selectors'
import * as serverActions from '../../../modules/servers/actions'

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

const ServerList = ({loading, error, items, sortParams, actions}) => {
  const {key: sortKey, order} = sortParams

  const handleRequestSort = property => {
    let sortDirection = getSortDirection(property, sortKey, order)

    if (property === sortKey) {
      sortDirection = sortDirection === 'asc' ? 'desc' : 'asc'
    }

    actions.updateServersSortParams({
      key: property,
      order: sortDirection,
    })
  }

  useEffect(() => {
    actions.fetchServers()
  }, [actions])

  const renderContent = () => {
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
        {items.map(item => {
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

  const renderError = () => {
    return (
      <Box maxWidth={300} p={3} mx="auto">
        <Alert variant="danger" mb={2}>
          {error?.response?.message || error?.message}
        </Alert>
        <Button fullWidth onClick={actions.fetchServers}>
          Reload list
        </Button>
      </Box>
    )
  }

  if (loading) {
    return <Spinner size="large" mt={3} mx="auto" />
  }

  if (error) {
    return renderError()
  }

  return renderContent()
}

ServerList.propTypes = {
  loading: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  error: PropTypes.object,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      distance: PropTypes.number,
    }),
  ),
  sortParams: PropTypes.shape({
    key: PropTypes.string,
    order: PropTypes.oneOf(['asc', 'desc']),
  }).isRequired,
  actions: PropTypes.shape({
    fetchServers: PropTypes.func,
    updateServersSortParams: PropTypes.func,
  }).isRequired,
}

ServerList.defaultProps = {
  loading: false,
  error: null,
  items: [],
}

const mapStateToProps = state => ({
  loading: selectors.getIsLoading(state),
  error: selectors.getError(state),
  items: selectors.getSortedSeverList(state),
  sortParams: selectors.getServerSortParams(state),
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(serverActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(ServerList)
