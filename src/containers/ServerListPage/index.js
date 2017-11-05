/**
 * Server list page
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { push } from 'react-router-redux';
import { Glyphicon } from 'react-bootstrap';
import { makeSelectToken } from '../AuthPage/selectors';
import { serverListFetch } from './actions';
import { logout } from '../AuthPage/actions';
import { makeSelectServerList, makeSelectLoading } from './selectors';
import {
  Navigation,
  List,
  ListHead,
  ListBody,
  ListRow,
  Brand,
  StyledButton,
  Wrapper,
} from './components';

const mapRow = (row, i) => (
  <ListRow key={i}>
    <span>{row.name}</span>
    <span>{row.distance} km</span>
  </ListRow>
);

export class ServerListPage extends React.Component {
  constructor() {
    super();
    this.handleLogout = this.handleLogout.bind(this);
    this.checkAuthentication = this.checkAuthentication.bind(this);
  }

  componentWillMount() {
    this.checkAuthentication(this.props.token);
  }

  componentDidMount() {
    this.props.fetchServerList(this.props.token);
  }

  componentWillReceiveProps(newProps) {
    this.checkAuthentication(newProps.token);
  }

  checkAuthentication(token) {
    if (!token) {
      this.props.redirect('/login');
    }
  }

  handleLogout() {
    this.props.logout();
  }

  render() {
    const list = !this.props.isLoading ? this.props.list.map((row, i) => mapRow(row, i)) : [];

    return (
      <Wrapper>
        <Helmet>
          <title>Server list Page</title>
        </Helmet>
        <Navigation>
          <Brand />
          <StyledButton onClick={this.handleLogout}>
            <Glyphicon glyph="log-out" /> Logout
          </StyledButton>
        </Navigation>
        <List>
          <ListHead>
            <span>Name</span>
            <span>Distance</span>
          </ListHead>
          <ListBody>
            {list}
          </ListBody>
        </List>
      </Wrapper>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isLoading: makeSelectLoading(),
  token: makeSelectToken(),
  list: makeSelectServerList(),
});

const mapDispatchToProps = (dispatch) => ({
  redirect: (path) => dispatch(push(path)),
  fetchServerList: (token) => dispatch(serverListFetch(token)),
  logout: () => dispatch(logout()),
});

ServerListPage.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  token: PropTypes.string,
  redirect: PropTypes.func.isRequired,
  fetchServerList: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired,
  logout: PropTypes.func.isRequired,

};

export default connect(mapStateToProps, mapDispatchToProps)(ServerListPage);
