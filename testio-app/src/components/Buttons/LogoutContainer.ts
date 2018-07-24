import { logout } from 'features/user/actions';
import { connect } from 'react-redux';
import { IApp } from 'types';
import Button from './LogoutButton';

const label = 'logout';

const mapStateToProps = (state: IApp) => ({
  label
});

const mapDispatchToProps = (dispatch: any) => ({
  onClick: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);
