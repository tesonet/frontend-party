import { v4 } from 'uuid';

import { ToasterActionType } from './actions';
import { ToasterAction, ToasterManagerState } from './model';

const initialState: ToasterManagerState = {
  toasters: [],
};

export const toasterManagerReducers = (
  state = initialState,
  action: ToasterAction,
): ToasterManagerState => {
  switch (action.type) {
    case ToasterActionType.Show:
      const toaster = { id: v4(), ...action.payload.toaster };

      return {
        ...state,
        toasters: [toaster, ...state.toasters],
      };
    case ToasterActionType.Close:
      const { id } = action.payload;
      return {
        ...state,
        toasters: state.toasters.filter(_ => _.id !== id),
      };
    case ToasterActionType.CloseLast:
      return {
        ...state,
        toasters: [...state.toasters.slice(1, state.toasters.length)],
      };
    case ToasterActionType.CloseAll:
      return { ...state, toasters: [] };
    default:
      return { ...state };
  }
};
