import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as tesonetAPI from '../tesonetAPI';
import { AppThunk } from '../rootReducer';

const serversSlice = createSlice({
  name: 'servers',
  initialState: {
    loading: false,
    items: [] as tesonetAPI.Server[],
    error: '',
  },
  reducers: {
    fetchServersPending(state) {
      state.loading = true;
      state.items = [];
      state.error = '';
    },
    fetchServersSuccess(state, action: PayloadAction<{ items: tesonetAPI.Server[] }>) {
      state.loading = false;
      state.items = action.payload.items;
    },
    fetchServersError(state, action: PayloadAction<{ message: string }>) {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export const { fetchServersPending, fetchServersSuccess, fetchServersError } = serversSlice.actions;

export const fetchServers = (accessToken: string): AppThunk => async dispatch => {
  dispatch(fetchServersPending());
  try {
    const servers = await tesonetAPI.fetchServers(accessToken);
    dispatch(fetchServersSuccess({ items: servers }));
  } catch (e) {
    dispatch(fetchServersError(e.response.data));
  }
};

export default serversSlice.reducer;
