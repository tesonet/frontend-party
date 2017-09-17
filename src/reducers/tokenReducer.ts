import { createAction, handleActions, Action } from 'redux-actions';

export interface ITokenReducer {
  authorized: boolean;
  authorizing: boolean;
  error: boolean;
  token: string | null;
  username: string | null;
}

export interface IPayloadAuthorizeReq {
  password: string;
  username: string;
}

export interface IPayloadAuthorizeRes {
  token: string;
}

const initialState: ITokenReducer = {
  authorized: false,
  authorizing: false,
  error: false,
  token: null,
  username: null,
};

const PREFIX = 'tokenReducer';

export const authorizeReq = createAction(`${PREFIX}/authorizeReq`,
  (payload: IPayloadAuthorizeReq) => payload);
export const authorizeRes = createAction(`${PREFIX}/authorizeRes`,
  (payload: IPayloadAuthorizeRes) => payload);
export const authorizeRehydrate = createAction(`${PREFIX}/authorizeRehydrate`,
  () => null);
export const authorizeErr = createAction(`${PREFIX}/authorizeErr`,
  () => null);
export const destroy = createAction(`${PREFIX}/destroy`,
  () => null);

export const tokenReducer = handleActions<any>({
  [authorizeReq.toString()](
    state: ITokenReducer,
    action: Action<IPayloadAuthorizeReq>,
  ): ITokenReducer {
    return {
      ...state,
      authorizing: true,
      error: false,
      username: action.payload!.username,
    };
  },
  [authorizeRes.toString()](
    state: ITokenReducer,
    action: Action<IPayloadAuthorizeRes>,
  ): ITokenReducer {
    return {
      ...state,
      authorized: true,
      authorizing: false,
      token: action.payload!.token,
    };
  },
  [authorizeErr.toString()](
    state: ITokenReducer,
  ): ITokenReducer {
    return {
      ...state,
      authorizing: false,
      error: true,
      username: null,
    };
  },
  [authorizeRehydrate.toString()](
    state: ITokenReducer,
  ): ITokenReducer {
    return {
      ...state,
      authorizing: false,
      error: false,
    };
  },
  [destroy.toString()](
    state: ITokenReducer,
  ): ITokenReducer {
    return {
      ...state,
      authorized: false,
      authorizing: false,
      error: false,
      token: null,
      username: null,
    };
  },
}, initialState);
