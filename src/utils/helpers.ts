import { css } from 'styled-components';
import { BREAKPOINTS } from '../common/constants';

export const screens = Object.keys(BREAKPOINTS).reduce(
    (acc: Object, label) => ({
        ...acc,
        [label]: (...args) => css`
            @media (max-width: ${BREAKPOINTS[label]}) {
                ${css(...args)};
            }
        `,
    }),
    {}
);

export const sortBy = key => (a, b) => (a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0);
