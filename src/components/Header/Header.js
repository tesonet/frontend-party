import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import LogoutIcon from "../Icons/Logout";
import { onLogout } from "../../actions/authActions";
import logoDark from "../../assets/png/logo-dark.png";

const StyledHeader = styled.header`
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 112px;
`;

const StyledLogo = styled.img`
  height: 30px;
  width: 115px;
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
  height: 40px;
  width: 100px;
  border: none;
  border-radius: 5px;
  letter-spacing: 0.35px;
  color: #2f3254;
  transition: background-color 0.3s ease;
  &:hover {
    cursor: pointer;
    background-color: #99cc33;
  }
`;

const Home = () => {
  const dispatch = useDispatch();
  const logout = () => dispatch(onLogout());

  return (
    <StyledHeader>
      <StyledLogo src={logoDark} />
      <StyledButton onClick={logout}>
        <LogoutIcon />
        Log out
      </StyledButton>
    </StyledHeader>
  );
};

export default Home;
