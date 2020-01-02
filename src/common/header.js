import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  StyledHeader,
  HeaderLogo,
  IconContainer,
  LogoutIcon,
} from './styles';
import iconLogout from '../assets/icon-logout.svg';
import { logout as logoutUser } from '../pages/login/actions';
import { TOKEN } from '../server/constants';

const Header = ({ logout, history }) => {
  const handleLogout = () => {
    logout();
    localStorage.removeItem(TOKEN);
    history.push('/');
  };

  return (
    <StyledHeader>
      <HeaderLogo />
      <IconContainer onClick={handleLogout}>
        <LogoutIcon src={iconLogout} />
        Logout
      </IconContainer>
    </StyledHeader>
  );
};

const mapDispatchToProps = {
  logout: () => logoutUser(),
};

Header.propTypes = {
  logout: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(connect(
  null,
  mapDispatchToProps,
)(Header));
