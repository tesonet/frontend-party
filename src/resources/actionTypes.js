import {actionBuilder} from '~/common/redux';

import {NAME} from './constants';


const action = actionBuilder(NAME);


export const LOADING_STARTED = action('LOADING_STARTED');
export const LOADING_FINISHED = action('LOADING_FINISHED');
export const RELOAD_REQUESTED = action('RELOAD_REQUESTED');
