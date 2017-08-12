import * as types from './actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
  isFetching: false,
  errorMessage: false,
  servers: []
});

export default function servers(state=initialState, action={}){
  const { payload = {}, type } = action;

  switch (type) {
    case types.FETCH:
      return Object.assign({}, state, {
        isFetching: true
      });
    case types.SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: false,
        servers: payload
      });
    case types.FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: 'Something went horibly wrong, please try later!'
      });

    default:
      return state;
  }
}
