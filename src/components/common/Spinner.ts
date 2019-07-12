import styled, { css } from 'styled-components';
import { Sizes } from '../../common/constants';
import { colors } from '../../theme';

type Props = {
    size: Sizes;
};

const Spinner = styled.div<Props>`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    border: solid rgba(0, 0, 0, 0.05);
    font-size: 10px;
    border-left-color: ${colors.green1};
    transform: translateZ(0);
    animation: loader-animation 1.1s infinite linear;

    &,
    &:after {
        border-radius: 50%;
    }

    ${({ size }) =>
        size === Sizes.XS &&
        css`
            border-width: 0.4em;

            &,
            &:after {
                width: 3em;
                height: 3em;
            }
        `}

    ${({ size }) =>
        size === Sizes.LG &&
        css`
            border-width: 1.1em;

            &,
            &:after {
                width: 10em;
                height: 10em;
            }
        `}

    @keyframes loader-animation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

export default Spinner;
