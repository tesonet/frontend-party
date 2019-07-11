import { css } from 'styled-components';
import { BREAKPOINTS } from '../common/constants';

const screens = Object.keys(BREAKPOINTS).reduce(
    (acc: Object, label) => ({
        ...acc,
        [label]: (...args) => css`
            @media (max-width: ${BREAKPOINTS[label]}) {
                ${css(args[0])};
            }
        `,
    }),
    {}
);

export default screens;
