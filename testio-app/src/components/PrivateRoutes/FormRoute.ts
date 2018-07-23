import Form from 'components/FormPage/Form';
import { isUserLoggedIn } from 'features/user/selectors';
import { connect } from 'react-redux';
import { App_Routes } from 'Routes';
import { IApp } from 'types';
import PrivateRoute from './PrivateRoute';

const mapStateToProps = (state: IApp) => ({
  component: Form,
  path: App_Routes.FORM_PAGE,
  redirectTo: App_Routes.LOGIN_PAGE,
  shouldRedirect: !isUserLoggedIn(state)
});

export default connect(mapStateToProps)(PrivateRoute);
