import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup } from 'react-bootstrap';
import { Box, Button, Field, Logo, Wrapper } from './styled-components';
import Error from './Error';

const usernameIcon = require('./images/person.svg');
const passwordIcon = require('./images/lock.svg');

const Login = ({ loginFailed, handleSubmit }) => (
  <Wrapper>
    <Box>
      <Logo />
      <form onSubmit={handleSubmit}>
        <Field
          icon={usernameIcon}
          name="username"
          type="text"
          size="large"
          placeholder="Username"
        />
        <Field
          icon={passwordIcon}
          name="password"
          type="password"
          size="large"
          placeholder="Password"
        />
        <FormGroup>
          <Button type="submit" bsStyle="success" bsSize="large" block>
            Log In
          </Button>
        </FormGroup>
      </form>
      {loginFailed && <Error />}
    </Box>
  </Wrapper>
);

Login.propTypes = {
  loginFailed: PropTypes.bool,
  handleSubmit: PropTypes.func.isRequired,
};

export default Login;
