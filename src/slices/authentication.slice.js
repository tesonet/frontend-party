import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  authLoading: false,
  authSuccess: false,
  authFailure: false,
}

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    startAuthentication: state => {
      state.authLoading = true;
      state.authLoading = false;
      state.authFailure = false;
    },
    authenticationSuccess: state => {
      state.authSuccess = true;
      state.authLoading = false;
      state.authFailure = false;
    },
    authenticationFailure: state => {
      state.authSuccess = false;
      state.authLoading = false;
      state.authFailure = true;
    },
    clearAuthenticationState: state => {
      state.authLoading = false;
      state.authSuccess = false;
      state.authFailure = false;
    }
  },
})

export const {
  startAuthentication,
  authenticationSuccess,
  authenticationFailure,
  clearAuthenticationState,
} = authenticationSlice.actions;
export default authenticationSlice.reducer