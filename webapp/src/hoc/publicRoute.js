import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect'

// DEBT: redirectPath is hardcoded, because this component was being imported within the
// component the route comes from causing an infinite loop in the modules system

export default connectedRouterRedirect({
  redirectPath: '/servers',
  authenticatedSelector: state => state.auth.isLoggedIn !== true,
  wrapperDisplayName: 'PublicRoute',
  allowRedirectBack: false
});
