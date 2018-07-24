import { onSubmit } from 'features/loginForm/actions';
import { connect } from 'react-redux';
import { IApp } from 'types';
import Button from './LoginButton';

const buttonLabel = 'Log In';

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
