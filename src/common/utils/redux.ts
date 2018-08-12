interface IAction<T> {
  type: string;
  payload?: T;
}

type Reducer<S, P> = (state: S, action: IAction<P>) => S;

export const createActionCreator = <P = any>(type: string) => (
  payload: P
): IAction<P> => ({ type, payload });

interface IReducersMap<S> {
  [actionType: string]: Reducer<S, any>;
}

export const createReducer = <S>(
  reducersMap: IReducersMap<S>,
  defaultState: S
) => (state = defaultState, action: IAction<any>): S =>
  reducersMap.hasOwnProperty(action.type)
    ? reducersMap[action.type](state, action)
    : state;
