import { Actions } from "./actions";

export interface UserState {
  token: string | null;
}

const initialState: UserState = {
  token: null
};

export const userReducer = (
  state: UserState = initialState,
  action: Actions
): UserState => {
  switch (action.type) {
    default:
      return state;
  }
};
