import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { setPasswordInput } from 'features/loginForm/actions';
import { connect } from 'react-redux';
import { IApp } from 'types';
import Input from './Input';

const passwordPlaceholder = 'password';
const type = 'password';
const icon = 'lock' as IconProp;

const mapStateToProps = (state: IApp) => ({
  icon,
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
