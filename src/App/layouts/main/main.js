import React, { Component } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import { Button, Glyphicon } from 'react-bootstrap';
import Api from '../../utils/api';
import Keys from '../../utils/keys';
import { Label } from '../../components';

class Main extends Component {
  constructor(props) {
    super(props);

    this.onLogout = this.onLogout.bind(this);
    
    this.state = {
      redirectToLogin: false,
      showError: false,
    }
  }

  async componentDidMount() {
    try {
      const response = await Api.getServers(); 
      this.setState({ servers: response.data });
    } catch(e) {
      console.log(e);
      this.setState({ showError: true })
    }
  }

  onLogout() {
    localStorage.setItem(Keys.TOKEN, '')
    this.setState({ redirectToLogin: true })
  }

  renderServers() {
    const { servers, showError } = this.state;
    console.log(showError)

    if(showError) {
      return (
        <ErrorContainer>
          <h1>Sorry. Something went wrong...</h1>
        </ErrorContainer>
      )
    } else if (!servers) {
      return null;
    }

    return (
      <List>
        {servers
          .sort((a, b) => a.distance - b.distance || a.name.localeCompare(b.name))
          .map((item, i) => {
            return (
              <ListItem key={i}>
                <span>{item.name}</span>
                <span>{item.distance} km</span>
              </ListItem>
            )
          }
        )}
      </List>
    )
  }

  render() {
    if(this.state.redirectToLogin) {
      return <Redirect to='/' />
    }

    return (
      <div>
        <HeaderContainer>
          <Header>
            <Label size="small" />
            <LogoutButton onClick={this.onLogout}>
              Logout <Glyphicon glyph="log-out"/>
            </LogoutButton>
          </Header>
          <ListHeader>
            <span>SERVER</span>
            <span>DISTANCE</span>
          </ListHeader>
        </HeaderContainer>
        {this.renderServers()}
      </div>
    );
  }
}

const MainStyle = `
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid rgb(235, 235, 235) 1px;
`;

const MainItem = styled.div`${MainStyle}`;

const ListItem = styled.li`${MainStyle}
  padding: 14px 8px;
  color: rgb(170, 170, 170);
`;

const Header = styled(MainItem)`
  padding: 16px;
  background: white;
`;

const LogoutButton = styled(Button)`
  &:hover {
    background-color: #99cc33;
  }
`;

const List = styled.ul`
  margin-top: 123px;
  margin-left: -40px;
`;

const ListHeader = styled(MainItem)`
  font-size: 12px;
  font-weight: 500;
  color: rgb(170, 170, 170);
  padding: 14px 8px;
  background-color: rgb(244, 243, 244);
`;

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100%;
  width: 100%;
  color: rgb(166, 166, 166);
  z-index: -1;
`;

export default Main;
