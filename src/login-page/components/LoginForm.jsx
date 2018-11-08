import React from 'react';
import styled from 'styled-components';

const LoginFormPage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    background-color: #0b0f27;

    &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0.2;
        background: url("../../../../images/bg.png");
        background-size: cover;
      }
`;

const LoginFormContainer = styled.div`
    position: absolute;
    max-width: 360px;
    width: 100%;
`;

const TestioLogo = styled.div`
    height: 64px;
    background: url("../../../../images/logotype-testio.png") no-repeat center center;
    max-width: 286px;
    background-size: contain;
    margin: 0 auto 70px
`;

const StyledFormGroup = styled.div`
      margin-bottom: 20px
`;

const StyledInput = styled.input`
    height: 56px;

    background: #ffffff url(../../../../images/${props => props.iconName}.png) no-repeat scroll 24px 18px;
    padding-left: 54px;

    &:focus,
    &:active {
        color: #999;
    }

    ::placeholder {
        color: #999
    }
`;

const LoginButtonContainer = styled.button`
    border-radius: 5px;
    background-color: #9fd533;
    border-color: #9fd533;
    color: white;
    height: 56px;
    line-height: 41px;

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

const LoginForm = () => (
    <LoginFormPage>
        <LoginFormContainer>
            <TestioLogo />
            <StyledFormGroup className="form-group">
                <StyledInput iconName="ico-username" className="form-control" id="nameField" placeholder="Username" />
            </StyledFormGroup>
            <StyledFormGroup className="form-group">
                <StyledInput iconName="ico-lock" className="form-control" id="passField" type="password" placeholder="Password" />
            </StyledFormGroup>
            <LoginButtonContainer type="button" className="btn btn-sm btn-block">Log In</LoginButtonContainer>
        </LoginFormContainer>
    </LoginFormPage>
);

export default LoginForm;
