import { setLoginInput } from 'features/loginForm/actions';
import { connect } from 'react-redux';
import { IApp } from 'types';
import Input from './Input';

const usernamePlaceholder = 'username';
const type = 'text';

const mapStateToProps = (state: IApp) => ({
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
