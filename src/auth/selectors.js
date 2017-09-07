import {moduleStateGetter} from '~/common/redux';

import {NAME} from './constants';


const moduleState = moduleStateGetter(NAME);


export const isAuthenticated = state => moduleState(state).isAuthenticated;
