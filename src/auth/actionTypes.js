import {actionTypeBuilder} from '~/common/redux';

import {NAME} from './constants';


const type = actionTypeBuilder(NAME);


export const LOGGED_IN = type('LOGGED_IN');
export const LOGGED_OUT = type('LOGGED_OUT');
export const AUTHENTICATION_SET = type('AUTHENTICATION_SET');
