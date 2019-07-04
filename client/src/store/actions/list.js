const servers = (list) => {
  return {
    type: 'LIST_SERVERS',
    payload: list
  }
};

export default { servers };