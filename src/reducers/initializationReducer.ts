import { createAction, handleActions } from 'redux-actions';

export interface IInitializationReducer {
  initializing: boolean;
}

const initialState: IInitializationReducer = {
  initializing: true,
};

export const initialize = createAction('initialize',
  () => null);

export const initializationReducer = handleActions<any>({
  [initialize.toString()](
    state: IInitializationReducer,
  ): IInitializationReducer {
    return {
      ...state,
      initializing: false,
    };
  },
}, initialState);
