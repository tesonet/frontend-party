import * as constants from './constants';
import reducer from './reducer';
import * as actions from './actions';
import * as actionTypes from './actionTypes';
import * as selectors from './selectors';
import * as utils from './utils';


const init = async ({dispatch}) => {
  await dispatch(actions.syncAuth());
};

export default {init, constants, reducer, actions, actionTypes, selectors, utils};
