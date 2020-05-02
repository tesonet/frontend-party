import React from "react";
import styled from "@emotion/styled";
import { RouteComponentProps } from "@reach/router";
import { useDispatch } from "react-redux";
import logo2 from "../../assets/logo-testio-2.svg";
import { logout } from "../../actions/loginActions";
import Icon, { Icons } from "../../assets/icons";
import Colors from "../../constants/colors";

const SpacedGrid = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledWrapper = styled(SpacedGrid)`
  padding: 20px 10px 20px 0;
  width: 100%;
  height: 110px;
`;

const StyledLogo = styled.img`
  width: 150px;
  height: 30px;
`;

const StyledIcon = styled(Icon)`
  margin-right: 10px;
  display: inline-block;
`;

const StyledLogoutWrapper = styled(SpacedGrid)`
  padding: 10px;
  color: ${Colors.darkBlue};
  transition: color 300ms;
  cursor: pointer;
  &:hover {
    color: ${Colors.green400};
  }
`;

const Header: React.FC<RouteComponentProps> = ({ children }) => {
  const dispatch = useDispatch();
  return (
    <>
      <StyledWrapper>
        <StyledLogo src={logo2} />
        <StyledLogoutWrapper
          onClick={() => logout(dispatch)}
          data-test-id="Logout-Icon"
        >
          <StyledIcon type={Icons.logout} />
          Logout
        </StyledLogoutWrapper>
      </StyledWrapper>
      {children}
    </>
  );
};

export default Header;
