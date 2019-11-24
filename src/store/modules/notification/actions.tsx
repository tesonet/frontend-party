import * as NOTIFICATION_ACTION_TYPES from './constants';
import { NotificationMessage } from './types';

export const setCurrent = (current: NotificationMessage) => ({
  type: NOTIFICATION_ACTION_TYPES.SET_CURRENT,
  current,
});

export const clearCurrent = () => ({
  type: NOTIFICATION_ACTION_TYPES.CLEAR_CURRENT,
});
