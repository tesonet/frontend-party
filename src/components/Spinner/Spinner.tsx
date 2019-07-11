import React from 'react';
import styled from 'styled-components';

const Spinner = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    font-size: 10px;
    border-top: 0.4em solid rgba(0, 0, 0, 0.05);
    border-right: 0.4em solid rgba(0, 0, 0, 0.05);
    border-bottom: 0.4em solid rgba(0, 0, 0, 0.05);
    border-left: 0.4em solid ${({ theme }) => theme.colors.light};
    transform: translateZ(0);
    animation: loader-animation 1.1s infinite linear;

    &,
    &:after {
        border-radius: 50%;
        width: 3em;
        height: 3em;
    }

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
