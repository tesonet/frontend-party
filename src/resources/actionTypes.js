import {actionTypeBuilder} from '~/common/redux';

import {NAME} from './constants';


const type = actionTypeBuilder(NAME);


export const LOADING_STARTED = type('LOADING_STARTED');
export const LOADING_FINISHED = type('LOADING_FINISHED');
