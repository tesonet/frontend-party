export const resolveHocParams = (input, props) => {
  if (typeof input === 'function') return input(props);
  return input;
};
