import { createSlice } from "@reduxjs/toolkit";
import { SLICE_NAME } from "./constants";

const slice = createSlice({
  name: SLICE_NAME,
  initialState: {
    serversList: [],
    isServersListLoading: false,
    serversListLoadingFailed: false,
  },
  reducers: {
    setServersList: (state, action) => {
      state.serversList = action.payload;
    },
    setIsServersListLoading: (state, action) => {
      state.isServersListLoading = action.payload;
    },
    setServersListLoadingFailed: (state, action) => {
      state.serversListLoadingFailed = action.payload;
    },
  },
});

export const { setServersList, setIsServersListLoading, setServersListLoadingFailed } = slice.actions;

export default slice;