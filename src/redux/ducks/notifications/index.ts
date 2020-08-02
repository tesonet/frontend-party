import { createAction, createReducer, ActionType } from 'typesafe-actions';

export interface NotificationState {
  message: string;
  type?: 'error' | 'warning' | 'success';
}

enum NotificationActionTypes {
  SET_NOTIFICATION = '@notifications/SET_NOTIFICATION',
  REMOVE_NOTIFICATION = '@notifications/REMOVE_NOTIFICATION',
}

const initialState: NotificationState = {
  message: '',
};

export const actions = {
  setNotification: createAction(NotificationActionTypes.SET_NOTIFICATION)<NotificationState>(),
  removeNotification: createAction(NotificationActionTypes.REMOVE_NOTIFICATION)(),
};

const reducer = createReducer(initialState)
  .handleAction(
    actions.setNotification,
    (_state: NotificationState, { payload }: ActionType<typeof actions.setNotification>) => ({
      ...payload,
    }),
  )
  .handleAction(actions.removeNotification, () => initialState);

export default reducer;
