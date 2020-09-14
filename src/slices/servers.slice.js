import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  servers: [],
  serversLoading: false,
  serversAuthFailure: false,
  serversGlobalFailure: false,
};

const serversSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    startFetchingServers: (state) => {
      state.serversLoading = true;
    },
    setServersSuccess: (state, { payload }) => {
      state.servers = payload;
      state.serversLoading = false;
    },
    setAuthFailure: (state) => {
      state.serversLoading = false;
      state.serversAuthFailure = true;
    },
    setGlobalFailure: (state) => {
      state.serversLoading = false;
      state.serversGlobalFailure = true;
    },
    clearServersState: (state) => {
      state.servers = [];
      state.serversLoading = false;
      state.serversAuthFailure = false;
      state.serversAuthFailure = false;
    },
  },
});

export const {
  startFetchingServers,
  setServersSuccess,
  setAuthFailure,
  setGlobalFailure,
  clearServersState,
} = serversSlice.actions;

export default serversSlice.reducer;
