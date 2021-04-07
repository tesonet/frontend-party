import { createSlice } from "@reduxjs/toolkit";
import { SLICE_NAME } from "./constants";

const slice = createSlice({
  name: SLICE_NAME,
  initialState: {
    serversList: [],
  },
  reducers: {
    setServersList: (state, action) => {
      state.serversList = action.payload;
    }
  },
});

export const { setServersList } = slice.actions;

export default slice;