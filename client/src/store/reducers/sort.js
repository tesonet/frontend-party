const servers = (state = 'SORT_NAME', action) => {
  switch (action.type) {
    case 'SORT_NAME':
      return action.type;
    case 'SORT_DISTANCE':
      return action.type;
    default:
      return state;
  }
};

export default { servers };