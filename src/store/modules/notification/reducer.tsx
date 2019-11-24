import * as NOTIFICATION_ACTION_TYPES from './constants';
import { NotificationMessage } from './types';

export const DEFAULT_STATE = {
  current: null,
};

interface Action {
  type: string,
  current: NotificationMessage,
}

export interface State {
  current: NotificationMessage | null
}

const setCurrent = (state: State, current: NotificationMessage) => ({
  ...state,
  current,
});

const clearCurrent = (state: State) => ({
  ...state,
  current: null,
});

const notification = (state: State = DEFAULT_STATE, action: Action) => {
  switch (action.type) {
    case NOTIFICATION_ACTION_TYPES.SET_CURRENT:
      return setCurrent(state, action.current);
    case NOTIFICATION_ACTION_TYPES.CLEAR_CURRENT:
      return clearCurrent(state);
    default:
      return state;
  }
};

export default notification;
