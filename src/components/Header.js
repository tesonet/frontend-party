import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { signOut } from '../actions';
import history from './history';

class Header extends React.Component{

  onSignOutClick = () => {
    this.props.signOut();
    history.push('/');
  };

  render(){
    return(
      <HeaderContainer className="header">
          <HeaderPart>
            <SmallLogo src="./img/small-logo.png" alt="testio" title="testio" />
          </HeaderPart>
          <HeaderPart right>
            <LogOutButton onClick={this.onSignOutClick}>Logout</LogOutButton>
          </HeaderPart>
      </HeaderContainer>
    );
  };
};

//Styled components
const HeaderContainer = styled.div`
  margin: 40px 0px;
  padding: 0px 15px;
`;
const HeaderPart = styled.div`
  display: inline-block;
  vertical-align: top;
  float: ${props => props.right ? "right" : "none"};
`;
const SmallLogo = styled.img`
  width: 100%;
  max-width: 115px;
  margin: 0;
  display: block;
`;
const LogOutButton = styled.button`
  border: none;
  background: url('./img/logout.png') no-repeat left center;
  background-size: 16px;
  text-decoration: none;
  cursor: pointer;
  font-size: 14px;
  padding: 0px 0px 0px 26px;
  color: #2f3254;
  line-height: 30px;
  &:hover{
    color: #99cc33;
  }
`;
//END Styled components

const mapStateToProps = (state) => {
  return({
    isSignedIn: state.auth.isSignedIn,
    credentials: state.auth.credentials
  });
}

export default connect( mapStateToProps, {
    signOut: signOut
})(Header);
