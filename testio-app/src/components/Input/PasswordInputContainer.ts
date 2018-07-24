import { setPasswordInput } from 'features/loginForm/actions';
import { connect } from 'react-redux';
import { IApp } from 'types';
import Input from './Input';

const passwordPlaceholder = 'password';
const type = 'password';

const mapStateToProps = (state: IApp) => ({
  props: {
    placeholder: passwordPlaceholder,
    type,
    value: state.form.password
  }
});

const mapDispatchToProps = (dispatch: any) => ({
  onChange: (value: string) => dispatch(setPasswordInput(value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);
