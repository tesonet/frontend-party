export const serverListActions = {
  setServers: 'set-servers',
  sortServers: 'sort-servers',
};

const serverList = (state = {servers: []}, action) => {
  switch(action.type) {
    case serverListActions.setServers:
      return {
        ...state,
        servers: [...action.payload]
      };
    case serverListActions.sortServers:
      const sortByType = sortByFieldName(action.payload)
      return {
        ...state,
        servers: [...state.servers.sort(sortByType)]
      }
    default:
      return state;
  }
};

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