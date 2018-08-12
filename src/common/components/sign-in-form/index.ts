import {
  setValue,
  signIn,
  validateField
} from 'common/store/modules/sign-in-form/actions';
import { IAppState } from 'common/store/types';
import { connect } from 'react-redux';
import SignInForm, { IProps } from './component';

type StateProps = Pick<
  IProps,
  'usernameError' | 'passwordError' | 'usernameValue' | 'passwordValue'
>;
type DispatchProps = Pick<
  IProps,
  | 'onUsernameChange'
  | 'onUsernameBlur'
  | 'onPasswordChange'
  | 'onPasswordBlur'
  | 'onSubmit'
>;

const mapStateToProps = ({
  signInForm: {
    fields: { username, password }
  }
}: IAppState): StateProps => ({
  usernameError: username.error,
  passwordError: password.error,
  usernameValue: username.value || '',
  passwordValue: password.value || ''
});

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  onUsernameChange: value => dispatch(setValue({ key: 'username', value })),
  onUsernameBlur: () => dispatch(validateField('username')),
  onPasswordChange: value => dispatch(setValue({ key: 'password', value })),
  onPasswordBlur: () => dispatch(validateField('password')),
  onSubmit: () => dispatch(signIn())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInForm);
