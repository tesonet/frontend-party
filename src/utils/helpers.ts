import { BREAKPOINTS } from '../common/constants';

export const screens = Object.keys(BREAKPOINTS).reduce(
    (acc: Object, label) => ({
        ...acc,
        [label]: `(${Object.keys(acc).length ? 'min' : 'max'}-width: ${BREAKPOINTS[label]})`,
    }),
    {}
);

// eslint-disable-next-line no-nested-ternary
export const sortBy = key => (a, b) => (a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0);
