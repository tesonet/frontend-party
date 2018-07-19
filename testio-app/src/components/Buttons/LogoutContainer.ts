import { connect } from 'react-redux';
import { logout } from '../../features/user/actions';
import { IApp } from '../../types';
import Button from './LoginButton';

const buttonLabel = 'logout';

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