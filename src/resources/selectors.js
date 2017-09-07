import {moduleStateGetter} from '~/common/redux';

import {NAME} from './constants';
import {DEFAULT_RESOURCE_STATE} from './reducer';


const moduleState = moduleStateGetter(NAME);

const getValueFromType = (state, name, field) => (moduleState(state)[name] || DEFAULT_RESOURCE_STATE)[field];


export const isLoading = (state, name) => getValueFromType(state, name, 'loading');

export const hasLoaded = (state, name) => getValueFromType(state, name, 'loaded');

export const data = (state, name) => getValueFromType(state, name, 'data');

