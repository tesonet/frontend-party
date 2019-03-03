export const apiFetchServers = () => ({
  type: 'API_FETCH_SERVERS',
});

export const apiFetchServersFailed = (errorMessage) => ({
  type: 'API_FETCH_SERVERS_FAILED',
  payload: { error: errorMessage },
});

export const apiFetchServersSuccess = (data) => ({
  type: 'API_FETCH_SERVERS_SUCCESS',
  payload: {
    data: data,
  },
});
