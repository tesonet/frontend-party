import { connect } from 'react-redux';

import { logoutAction } from '../../store/actions/userActions';
import { LogoutButton } from '../../components/LogoutButton/LogoutButton';

export const LogoutButtonContainer = connect(
  null,
  { onClick: logoutAction },
)(LogoutButton);
