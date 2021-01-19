import React from "react";
import styled from "styled-components";

import LoginForm from "../components/login-form";
import logoImg from "../assets/logo-testio-light.png";
import backgroundImg from "../assets/login-page-background.jpg";


const BackgroundDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    flex-direction: column;
    background-image: url(${backgroundImg});
    position: relative;
    background-position: left;
    background-repeat: no-repeat;
    background-size: cover;
    `;


const Logo = styled.img`
    margin-bottom: 70px;
    `;


export default function LoginPage() {

    return (
        <BackgroundDiv>
            <Logo src={logoImg} alt="testio logo"/>
            <LoginForm/>
        </BackgroundDiv>
    );
}
