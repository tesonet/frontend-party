import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup } from 'react-bootstrap';
import { Box, Button, Field, Logo, Wrapper } from './styled-components';

const usernameIcon = require('./images/person.svg');
const passwordIcon = require('./images/lock.svg');

const Login = ({ handleSubmit }) => (
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
    </Box>
  </Wrapper>
);

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default Login;
