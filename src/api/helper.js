/*
  any helpers here
 */

export const isNonEmptyObject = obj => obj
  && Object.keys(obj).length > 0
  && obj.constructor === Object;

export const sortByTwoColumns = (c1, c2) => {
  if (!c1 || !c2) {
    return null;
  }

  return (a, b) => {
    if (!isNonEmptyObject(a) || !isNonEmptyObject(b)) {
      return null;
    }
    const o1 = (a[c1] || '').toLowerCase();
    const o2 = (b[c1] || '').toLowerCase();
    const p1 = a[c2];
    const p2 = b[c2];
    if (o1 < o2) return -1;
    if (o1 > o2) return 1;
    if (p1 < p2) return -1;
    if (p1 > p2) return 1;
    return 0;
  };
};
