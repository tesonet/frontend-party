import {
  setFieldValue,
  signIn,
  validateField
} from 'common/store/modules/sign-in-form/actions';
import { Status } from 'common/store/modules/sign-in-form/types';
import { IAppState } from 'common/store/types';
import { connect } from 'react-redux';
import SignInForm, { IProps } from './component';

type StateProps = Pick<
  IProps,
  | 'usernameError'
  | 'passwordError'
  | 'usernameValue'
  | 'passwordValue'
  | 'isSubmitDisabled'
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
    fields: { username, password },
    status
  }
}: IAppState): StateProps => ({
  usernameError: username.error,
  passwordError: password.error,
  usernameValue: username.value || '',
  passwordValue: password.value || '',
  isSubmitDisabled: status === Status.Loading
});

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  onUsernameChange: value =>
    dispatch(setFieldValue({ key: 'username', value })),
  onUsernameBlur: () => dispatch(validateField('username')),
  onPasswordChange: value =>
    dispatch(setFieldValue({ key: 'password', value })),
  onPasswordBlur: () => dispatch(validateField('password')),
  onSubmit: () => dispatch(signIn())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInForm);
