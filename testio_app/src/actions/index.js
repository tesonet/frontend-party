export const authorize = (username, password) => ({
  type: "AUTH_REQUEST",
  payload: { username, password }
});

export const fetchServers = () => ({
  type: "FETCH_SERVERS_LIST_BEGIN",
});

export const fetchServersSuccess = (serversList) => ({
  type: "FETCH_SERVERS_LIST_SUCCESS",
  payload: {serversList}
});