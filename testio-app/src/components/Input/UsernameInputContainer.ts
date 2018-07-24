import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { setLoginInput } from 'features/loginForm/actions';
import { connect } from 'react-redux';
import { IApp } from 'types';
import Input from './Input';

const usernamePlaceholder = 'username';
const type = 'text';
const icon = 'user' as IconProp;

const mapStateToProps = (state: IApp) => ({
  icon,
  props: {
    placeholder: usernamePlaceholder,
    type,
    value: state.form.username
  }
});

const mapDispatchToProps = (dispatch: any) => ({
  onChange: (value: string) => dispatch(setLoginInput(value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);
