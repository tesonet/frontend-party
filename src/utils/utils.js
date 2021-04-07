export const joinTruthy = (items, delimiter = ' ') =>
  (items || []).filter(item => !!item).join(delimiter);
