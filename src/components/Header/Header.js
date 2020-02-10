import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import LogoutIcon from "../Icons/Logout";
import { onLogout } from "../../actions/authActions";
import logoDark from "../../assets/png/logo-dark.png";
import * as styles from "../../constants/styles";

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

const StyledHeader = styled.header`
  ${styles.align.vertical}
  justify-content: space-between;
  height: 112px;
  padding: 0 20px;
`;

const StyledLogo = styled.img`
  height: 30px;
  width: 115px;
`;

const StyledButton = styled.button`
  ${styles.align.vertical}
  justify-content: space-between;
  height: 40px;
  width: 100px;
  padding: 0px 10px;
  border: none;
  border-radius: 5px;
  color: ${styles.colors.blue};
  transition: background-color 0.3s ease;
  ${styles.letterSpacing.small}
  &:hover {
    cursor: pointer;
    background-color: #99cc33;
  }
`;

export default Home;
