import {NAME} from './constants';
import {DEFAULT_RESOURCE_STATE} from './reducer';


const getValueFromType = (state, name, field) =>
  state[NAME][name] ? state[NAME][name][field] : DEFAULT_RESOURCE_STATE[field];


export const isLoading = (state, name) => getValueFromType(state, name, 'loading');

export const hasLoaded = (state, name) => getValueFromType(state, name, 'loaded');

export const data = (state, name) => getValueFromType(state, name, 'data');

