const initialState = {
  list: null,
  listLoading: false,
  listError: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'API_FETCH_SERVERS': {
      return { ...state, listLoading: true, listError: null };
    }
    case 'API_FETCH_SERVERS_SUCCESS': {
      const { data } = action.payload;

      const sortedList = data
        .sort((serverA, serverB) => {
          return serverA.name.localeCompare(serverB.name, { sensitivity: 'base' });
        })
        .sort((serverA, serverB) => serverA.distance - serverB.distance);
      return { ...state, listLoading: false, list: sortedList };
    }
    case 'API_FETCH_SERVERS_FAILED': {
      const { error } = action.payload;
      return { ...state, listLoading: false, listError: error };
    }

    case 'LOG_OUT': {
      return { ...state, list: null };
    }

    default:
      return state;
  }
}
