import { connect } from 'react-redux';
import { logout } from '../../features/logout/actions';
import { IApp } from '../../types';
import Button from './LoginButton';

const buttonLabel = 'Click me';

const mapStateToProps = (state: IApp) => ({
    label: buttonLabel
})
  
const mapDispatchToProps = (dispatch: any) => ({
    onClick: () => dispatch(logout())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Button);