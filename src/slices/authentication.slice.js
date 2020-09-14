import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  authLoading: false,
  authSuccess: false,
  authFailure: false,
};

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    startAuthentication: (state) => {
      state.authLoading = true;
    },
    authenticationSuccess: (state) => {
      state.authSuccess = true;
      state.authLoading = false;
    },
    authenticationFailure: (state) => {
      state.authFailure = true;
      state.authLoading = false;
    },
    clearAuthenticationState: (state) => {
      state.authLoading = false;
      state.authSuccess = false;
      state.authFailure = false;
    },
  },
});

export const {
  startAuthentication,
  authenticationSuccess,
  authenticationFailure,
  clearAuthenticationState,
} = authenticationSlice.actions;

export default authenticationSlice.reducer;
