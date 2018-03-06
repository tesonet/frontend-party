import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Helmet from 'react-helmet';
import { Container, Col } from 'reactstrap';

import { authLogout } from '../../state/actions/auth';
import { serverListRequest } from '../../state/actions/serverList';
import { ROUTE_LOGIN } from '../../constants/routes';
import {
  Header,
  SignOutButton,
  StyledContainer as TopContainer,
  StyledListContainer as ListContainer,
  StyledListHeading as ListHeading,
  StyledList as List,
  StyledRow as Row,
  StyledLogo as Logo,
} from './styled';
import { serverList as copy } from '../../assets/copy/global.json';

class ServerList extends Component {
  constructor(props) {
    super(props);

    this.checkAuthToken = this.checkAuthToken.bind(this);
  }

  componentWillMount() {
    this.checkAuthToken(this.props.token);
  }

  componentDidMount() {
    this.props.retrieveServerList(this.props.token);
  }

  componentWillReceiveProps(nextProps) {
    this.checkAuthToken(nextProps.token);
  }

  checkAuthToken(token) {
    if (!token) {
      this.props.push(ROUTE_LOGIN);
    }
  }

  render() {
    const { list } = this.props;

    return (
      <TopContainer>
        <Container fluid>
          <Helmet>
            <title>{copy.pageTitle}</title>
          </Helmet>
          <Header>
            <Logo />
            <SignOutButton onClick={this.props.logout} />
          </Header>
        </Container>

        <ListHeading>
          <span>{copy.server}</span>
          <span>{copy.distance}</span>
        </ListHeading>

        <ListContainer>
          <List>
            {list.map(({ name, distance }) => (
              <Row key={`${name}-${distance}`}>
                <Col>{name}</Col>
                <Col>{distance} {copy.distanceUnits}</Col>
              </Row>
            ))}
          </List>
        </ListContainer>
      </TopContainer>
    );
  }
}

ServerList.propTypes = {
  retrieveServerList: PropTypes.func.isRequired,
  push: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  token: PropTypes.string,
  list: PropTypes.array,
};

const mapStateToProps = store => {
  const {
    auth: { token },
    serverList: { list },
  } = store;

  return { token, list };
};

const mapDispatchToProps = dispatch => ({
  retrieveServerList: token => dispatch(serverListRequest(token)),
  push: path => dispatch(push(path)),
  logout: () => dispatch(authLogout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ServerList);
