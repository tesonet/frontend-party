import { connect } from 'react-redux';

import { LoginForm } from '../../components/LoginForm/LoginForm';
import { loginAction } from '../../store/actions/userActions';

export const LoginContainer = connect(
  null,
  { onSubmit: loginAction },
)(LoginForm);
