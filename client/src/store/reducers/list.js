const servers = (state = [], action) => {
  switch (action.type) {
    case 'LIST_SERVERS':
      return action.payload;
    default:
      return state;
  }
};

export default { servers };