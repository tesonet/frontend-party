import validator from 'validator';

export const isRequired = val => !!val;

export const isEmail = val => validator.isEmail(val);
