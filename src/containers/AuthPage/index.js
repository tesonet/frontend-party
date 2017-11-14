/**
 * AuthPage
 */
import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Glyphicon, Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { createStructuredSelector } from 'reselect';
import { authorize } from './actions';
import { makeSelectToken, makeSelectError, makeSelectLoading } from './selectors';
import {
  Brand,
  Wrapper,
  StyledGrid as Grid,
  StyledButton as LoginButton,
  StyledAddon as Addon,
  StyledFormControl as FormControl,
  StyledInputGroup as InputGroup,
} from './components';

export class AuthPage extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.checkAuthentication = this.checkAuthentication.bind(this);
  }

  componentWillMount() {
    this.checkAuthentication(this.props.token);
  }

  componentWillReceiveProps(newProps) {
    this.checkAuthentication(newProps.token);
  }

  checkAuthentication(token) {
    if (token) {
      this.props.redirect('/');
    }
  }

  handleClick(e) {
    e.preventDefault();
    this.props.login(this.username.value, this.password.value);
  }

  render() {
    const { error, isLoading } = this.props;
    const hasError = error !== null;

    return (
      <Wrapper>
        <Grid>
          <Brand alt="Testio" />
          {hasError &&
            <Alert bsStyle="danger">{error}</Alert>
          }
          <FormGroup>
            <InputGroup>
              <Addon>
                <Glyphicon glyph="user" />
              </Addon>
              <FormControl inputRef={(input) => { this.username = input; }} autoFocus type="text" placeholder="Username" />
            </InputGroup>
          </FormGroup>

          <FormGroup>
            <InputGroup>
              <Addon>
                <Glyphicon glyph="lock" />
              </Addon>
              <FormControl inputRef={(input) => { this.password = input; }} type="password" placeholder="Password" />
            </InputGroup>
          </FormGroup>
          <LoginButton
            onClick={this.handleClick}
            disabled={isLoading}
            block
          >
            Log In
          </LoginButton>
        </Grid>
      </Wrapper>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  token: makeSelectToken(),
  isLoading: makeSelectLoading(),
  error: makeSelectError(),
});

const mapDispatchToProps = (dispatch) => ({
  login: (username, password) => dispatch(authorize(username, password)),
  redirect: (path) => dispatch(push(path)),
});

AuthPage.propTypes = {
  login: PropTypes.func.isRequired,
  redirect: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  token: PropTypes.string,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);
