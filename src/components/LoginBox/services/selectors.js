import slice from "./slice";
import { createSelector } from "@reduxjs/toolkit";

export const selectSlice = (state) => state[slice.name];

export const selectIsLoginInProgress = createSelector(
  [selectSlice],
  (slice) => slice.isLoginInProgress
);