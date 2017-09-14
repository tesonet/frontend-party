import {action} from '~/common/redux';

import * as t from './actionTypes';
import * as s from './selectors';


const startLoading = type => action(t.LOADING_STARTED, type);

const finishLoading = ({type, data}) => action(t.LOADING_FINISHED, {type, data});


// async
export const loadData = (type, requestData) => async (dispatch, getState) => {
  if (!type) throw new Error('No type given');
  const isLoading = s.isLoading(getState(), type);
  if (isLoading) return;
  await dispatch(startLoading(type));
  try {
    const data = await requestData();
    await dispatch(finishLoading({type, data}));
  } catch (err) {
    await dispatch(finishLoading({type}));
    throw err;
  }
};
