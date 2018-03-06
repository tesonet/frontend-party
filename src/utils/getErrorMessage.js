import get from 'lodash.get';

/**
 * Helper for getting the error message out of the Error object.
 * Fallbacks to fallbackMessage when doesn't succeed to retrieve the message.
 *
 * @param  {Error} error
 * @param  {fallbackMessage} password
 *
 * @return {string} resulting error message
 */
export default ({ error, fallbackMessage }) => get(
  error, 'message', error || fallbackMessage
);
