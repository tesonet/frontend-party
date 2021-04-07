import { createSlice } from "@reduxjs/toolkit";
import { SLICE_NAME } from "./constants";

const slice = createSlice({
  name: SLICE_NAME,
  initialState: {
    isLoginInProgress: false,
  },
  reducers: {
    setIsLoginInProgress: (state, action) => {
      state.isLoginInProgress = action.payload;
    }
  },
});

export const { setIsLoginInProgress } = slice.actions;

export default slice;