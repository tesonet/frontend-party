import Form from 'components/FormPage/Form';
import { isUserLoggedIn } from 'features/user/selectors';
import { connect } from 'react-redux';
import { APP_ROUTES } from 'Routes';
import { IApp } from 'types';
import PrivateRoute from './PrivateRoute';

const mapStateToProps = (state: IApp) => ({
  component: Form,
  path: APP_ROUTES.FORM_PAGE,
  redirectTo: APP_ROUTES.LOGIN_PAGE,
  shouldRedirect: !isUserLoggedIn(state)
});

export default connect(mapStateToProps)(PrivateRoute);
