import * as NOTIFICATION_ACTION_TYPES from './constants';

export const setCurrent = (current: any) => ({
  type: NOTIFICATION_ACTION_TYPES.SET_CURRENT,
  current,
});

export const clearCurrent = () => ({
  type: NOTIFICATION_ACTION_TYPES.CLEAR_CURRENT,
});
