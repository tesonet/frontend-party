import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    loading: false,
    accessToken: localStorage.getItem('token') || '',
    error: '',
  },
  reducers: {
    authPending(state) {
      state.loading = true;
      state.accessToken = '';
      state.error = '';
    },
    authSuccess(state, action: PayloadAction<{ token: string }>) {
      state.loading = false;
      state.accessToken = action.payload.token;
    },
    authError(state, action: PayloadAction<{ message: string }>) {
      state.loading = false;
      state.accessToken = '';
      state.error = action.payload.message;
    },
  },
});

export const { authPending, authSuccess, authError } = authSlice.actions;

export default authSlice.reducer;
