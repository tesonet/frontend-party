import { createReducer, set } from 'common/utils/redux';
import { IById } from 'common/utils/types';
import { combineReducers } from 'redux';
import { SET_BY_ID, SET_IDS, SET_ORDER_BY } from './constants';
import { IServer, IState, OrderBy } from './types';

const byIdReducer = createReducer<IById<IServer>>(
  {
    [SET_BY_ID]: set
  },
  {}
);

const idsReducer = createReducer<string[]>(
  {
    [SET_IDS]: set
  },
  []
);

const orderByReducer = createReducer<OrderBy>(
  {
    [SET_ORDER_BY]: set
  },
  OrderBy.Distance
);

const reducer = combineReducers<IState>({
  byId: byIdReducer,
  ids: idsReducer,
  orderBy: orderByReducer
});

export default reducer;
