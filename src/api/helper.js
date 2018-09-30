/*
  any helpers here
 */

export const noop = () => null;

export const isNonEmptyObject = obj => obj
  && Object.keys(obj).length > 0
  && obj.constructor === Object;
