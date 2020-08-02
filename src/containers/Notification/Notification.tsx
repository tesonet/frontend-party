import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actions } from '@redux/ducks/notifications';
import { Notification } from '@components/Notification/Notification';
import { State } from '@redux/reducer';

export const NotificationContainer = () => {
  const dispatch = useDispatch();
  const { message, type } = useSelector((state: State) => state.notification);

  const removeNotification = () => {
    dispatch(actions.removeNotification());
  };

  return message && type ? <Notification onClose={removeNotification} message={message} type={type} /> : null;
};

export default NotificationContainer;
