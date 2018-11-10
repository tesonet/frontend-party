import React from 'react';
import styled from 'styled-components';

const LoginButtonContainer = styled.button`
    border-radius: 5px;
    background-color: #9fd533;
    border-color: #9fd533;
    color: white;
    height: 56px;
    line-height: 41px;
    margin-top: 20px;

    &:focus,
    &:hover {
        background-color: #86b300;
        border-color: #86b300;
    }

    &:active {
        background-color: #9fd533;
        border-color: #9fd533;
    }
`;

const LoginButton = () => (
    <LoginButtonContainer type="submit" className="btn btn-sm btn-block">Log In</LoginButtonContainer>
);

export default LoginButton;
