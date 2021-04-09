import slice from "./slice";
import { createSelector } from "@reduxjs/toolkit";

export const selectSlice = (state) => state[slice.name];

export const selectIsLoginInProgress = createSelector(
  [selectSlice],
  (slice) => slice.isLoginInProgress
);

export const selectAuthenticationFailed = createSelector(
  [selectSlice],
  (slice) => slice.authenticationFailed
);