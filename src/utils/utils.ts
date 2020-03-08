/**
 * Allows using class names conditionally inside the classNames property
 * @example className={classNames('class1', props.isSomeThingTrue && 'class2')}
 * // returns 'class1' if isSomeThingTrue is false and 'class1 class2' if it is true
 * @returns {Number} Returns concatenated string with all truthy arguments separated by whitespace.
 */
export const classNames = (...args: Array<string | number | boolean | undefined | null>) =>
  args.filter(Boolean).join(' ');
