import * as validations from './validations';


export const required = value => validations.required(value) ? undefined : {$required: 'Required'};
