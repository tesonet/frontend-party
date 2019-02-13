import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import history from './history';
import _ from 'lodash';

import { fetchServers } from '../actions'
import Header from './Header';

class ResultPage extends React.Component{

  componentDidMount(){
    if(this.props.isSignedIn){
      this.props.fetchServers(this.props.credentials);
    } else {
      history.push("/");
    }
  };

  renderList(){
    const myData = _.orderBy(this.props.list, ['name', 'distance']);

    return myData.map(server => {
      return(
        <Container key={server.name+server.distance}>
          <ContainerPart left>{server.name}</ContainerPart>
          <ContainerPart>{`${server.distance} km`}</ContainerPart>
        </Container>
      );
    });
  };

  render(){
    return(
      <div>
        <Header />
        <div>
          <Container header>
            <ContainerPart left>Server</ContainerPart>
            <ContainerPart>Distance</ContainerPart>
          </Container>
          {this.renderList()}
        </div>
      </div>
    );
  };
};

//Styled components
const containerBorder = '1px solid #e6e6e6';

const Container = styled.div`
  width: 100%;
  display: table;
  padding: 20px 15px;
  background: ${props => props.header ? "#f5f5f5" : "#fff"};
  color: ${props => props.header ? "#a5a5a5" : "#666666"};
  text-transform: ${props => props.header ? "uppercase" : "inherit"};
  font-size: ${props => props.header ? "14px" : "16px"};
  border-top: ${containerBorder};
  line-height: 16px;
  &:last-child{
    border-bottom: ${containerBorder};
  }
`;
const ContainerPart = styled.div`
  float: ${props => props.left ? "left" : "right"};
  text-align: ${props => props.left ? "left" : "right"};
`;
//END Styled components

const mapStateToProps = (state) => {
  return({
    list: state.list.servers,
    credentials: state.auth.credentials,
    isSignedIn: state.auth.isSignedIn
  });
}

export default connect(mapStateToProps, {
  fetchServers: fetchServers
})(ResultPage);
