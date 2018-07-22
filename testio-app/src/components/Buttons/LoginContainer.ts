import { connect } from 'react-redux';
import { onSubmit } from '../../features/loginForm/actions';
import { IApp } from '../../types';
import Button from './LoginButton';

const buttonLabel = 'Click me';

const mapStateToProps = (state: IApp) => ({
  label: buttonLabel
});

const mapDispatchToProps = (dispatch: any) => ({
  onClick: () => dispatch(onSubmit())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);
