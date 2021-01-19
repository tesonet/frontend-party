import React from "react";
import {connect} from "react-redux";
import styled from "styled-components";

import logoImg from "../assets/logo-testio-dark.png";
import logoutIcon from "../assets/logout-icon.svg";
import logoutIconHover from "../assets/logout-icon-hover.svg";
import {setLogged} from "../redux/actions";


const Header = styled.div`
    width: 100%;
    height: 113px;
    border-bottom: 1px solid #e6e6e6;
`;

const Wrapper = styled.div`
    display: flex;
    margin-bottom: 70px;
    padding: 0 15px;
    justify-content: space-between;
    align-items: center;
    height: 100%;
`;

const Logout = styled.button`
    cursor: pointer;
    color: #2f3254;
    font-weight: 300;
    background: white;
    border: none;
    font-size: 16px;
    &:before {
        width: 16px;
        content: url(${logoutIcon});
        position: relative;
        left: -10px;
        top: 2px;
        height: 20px;
    }
    &:hover {
        color: #99cc33;
    }
    &:focus {
        outline: none;
    }
    &:hover:before {
        content: url(${logoutIconHover});
    }
`;

export const ServerListHeader = (props) => {

    const logout = () => {
        props.setLogged(false);
        localStorage.removeItem('token');
    };

    return (
        <Header>
            <Wrapper>
                <img src={logoImg} alt="testio logo"/>
                <Logout onClick={logout}>Logout</Logout>
            </Wrapper>
        </Header>
    );
};

export default connect(
    null,
    {setLogged}
)(ServerListHeader);
