export const serverListActions = {
  setServers: 'set-servers',
  sortServers: 'sort-servers',
  resetServers: 'reset-servers',
};

const initialState = {
  servers: [],
  sortField: 'name',
  order: 1,
};

const serverList = (state = initialState, action) => {
  switch(action.type) {
    case serverListActions.setServers:
      return {
        ...initialState,
        servers: sort({
          ...initialState,
          servers: action.payload
        })
      };
    case serverListActions.sortServers:
      const newState = {
        ...state,
        sortField: action.payload,
        order: action.payload === state.sortField ? -state.order : initialState.order
      };
      return {
        ...newState,
        servers: sort(newState)
      }
    case serverListActions.resetServers:
      return {
        ...initialState
      };
    default:
      return state;
  }
};

function sort({servers, sortField, order}) {
  const sortByType = sortByFieldName(sortField);
  const sorted = [...servers.sort(sortByType)];
  return order > 0 ? sorted : sorted.reverse();
}

function parseNumber(v) {
  return parseInt(v, 10);
}

function isNumeric(v) {
  return `${parseNumber(v)}` === `${v}`;
}

function sortByFieldName(fieldName) {
  return function sortByType(a, b) {
    const aVal = a[fieldName];
    const bVal = b[fieldName];
    if (isNumeric(aVal) && isNumeric(bVal)) {
      return parseNumber(aVal) - parseNumber(bVal);
    }
    return String(aVal).localeCompare(String(bVal));
  }
}

export default serverList;