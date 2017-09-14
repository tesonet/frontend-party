import {createAction} from 'redux-actions';


export const action = (type, payload, meta) => createAction(type)(payload, meta);

export const actionType = (prefix, type) => `${prefix}/${type}`;

export const actionTypeBuilder = prefix => type => actionType(prefix, type);

export const moduleStateGetter = name => state => state && state[name] != null ? state[name] : {};
