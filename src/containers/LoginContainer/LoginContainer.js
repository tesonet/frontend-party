import { connect } from 'react-redux';

import { LoginForm } from '../../components/LoginForm/LoginForm';
import { loginAction } from '../../store/actions/LoginAction';

export const LoginContainer = connect(
  null,
  { onSubmit: loginAction },
)(LoginForm);
