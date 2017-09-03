import {actionBuilder} from '~/common/redux';

import {NAME} from './constants';


const action = actionBuilder(NAME);


export const LOGGED_IN = action('LOGGED_IN');
export const LOGGED_OUT = action('LOGGED_OUT');
export const AUTHENTICATION_SET = action('AUTHENTICATION_SET');
