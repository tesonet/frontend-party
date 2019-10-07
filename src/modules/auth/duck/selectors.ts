import { State } from '@redux/reducer';

export const isAuthLoading = (state: State) => state.auth.isLoading;
export const isUserLoggedIn = (state: State) => state.auth.isLoggedIn;
