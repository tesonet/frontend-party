import { FETCH_SERVERS } from '../constants/types';

const actionHash = {
  [FETCH_SERVERS]: (state, payload) => payload,
};

export default (state = [], { type, payload }) => (actionHash[type]
  ? actionHash[type](state, payload)
  : state);
