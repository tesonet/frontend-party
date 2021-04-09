import { createSlice } from "@reduxjs/toolkit";
import { SLICE_NAME } from "./constants";

const slice = createSlice({
  name: SLICE_NAME,
  initialState: {
    isLoginInProgress: false,
    authenticationFailed: false,
  },
  reducers: {
    setIsLoginInProgress: (state, action) => {
      state.isLoginInProgress = action.payload;
    },
    setAuthenticationFailed: (state, action) => {
      state.authenticationFailed = action.payload;
    }
  },
});

export const { setIsLoginInProgress, setAuthenticationFailed } = slice.actions;

export default slice;