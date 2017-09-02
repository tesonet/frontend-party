import i18n from '~/i18n';

import * as validations from './validations';


export const required = value => validations.required(value) ? undefined : {$required: i18n.t('errors.field.required')};
