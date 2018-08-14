export const TYPE_LOG_IN = 'TYPE_LOG_IN';
export const TYPE_LOG_OUT = 'TYPE_LOG_OUT';

export function doLogin() {
  return { type: TYPE_LOG_IN };
}

export function doLogout() {
  return { type: TYPE_LOG_OUT };
}
