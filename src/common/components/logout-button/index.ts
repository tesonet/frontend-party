import { logOut } from 'common/store/modules/auth/actions';
import { connect } from 'react-redux';
import LogOutButton from './component';

export default connect(
  null,
  {
    onClick: logOut
  }
)(LogOutButton);
