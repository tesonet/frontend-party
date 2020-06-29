import React from "react";
import styled from "styled-components";
import UserIcon from "../../images/user.svg";
import PasswordIcon from "../../images/lock.svg";
import PropTypes from "prop-types";

const StyledForm = styled.form`
    width: 360px;
    display: flex;
    flex-direction: column;

    @media (max-width: 992px) {
        width: 70%;
    }
`;

const InputContainer = styled.div`
    display: flex;
    align-items: center;
    border-radius: 5px;
    background: #fff;
    position: relative;
    margin-bottom: 20px;
    overflow: hidden;
`;

const Icon = styled.img`
    position: absolute;
    left: 24px;
    height: 16px;
    width: 16px;
`;

const InputField = styled.input`
    text-indent: 54px;
    height: 56px;
    border: none;
    outline: none;
    width: 100%;
    color: #b3b3b3;
    font-family: Roboto;
    font-size: 16px;
    font-weight: 300;

    &:focus {
        color: #999;
    }
`;

const SubmitButton = styled.input`
    cursor: pointer;
    background-color: #9fd533;
    border-radius: 5px;
    border: none;
    outline: none;
    color: #fff;
    font-family: Roboto;
    font-size: 16px;
    font-weight: bold;
    transition: all 150ms ease;
    height: 56px;

    &:hover {
        background-color: #86b300;
    }
`;

const LoginForm = ({ handleSubmit }) => {
    return (
        <StyledForm onSubmit={handleSubmit}>
            <InputContainer>
                <Icon src={UserIcon} alt="usn" />
                <InputField
                    name="username"
                    type="text"
                    placeholder="Username"
                    maxLength={32}
                />
            </InputContainer>
            <InputContainer>
                <Icon src={PasswordIcon} alt="pass" />
                <InputField
                    name="password"
                    type="password"
                    placeholder="Password"
                    maxLength={32}
                />
            </InputContainer>

            <SubmitButton type="submit" value="Log in" />
        </StyledForm>
    );
};

export default LoginForm;

LoginForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired
};
