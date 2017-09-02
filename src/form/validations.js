import _ from 'lodash';


// ---------------------------------------------------------------------------------------------------------------------
// All validations have to return TRUE when conditions are met (field is not valid).
// ---------------------------------------------------------------------------------------------------------------------

export const required = value => !(
  value == null ||
  value === '' ||
  (_.isPlainObject(value) && Object.getOwnPropertyNames(value).length === 0) ||
  (Array.isArray(value) && value.length === 0)
);
