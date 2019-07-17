import { connect } from "react-redux";
import { submitLoginForm } from "../../_actions/auth";

import Login from "./login";

const mapStateToProps = state => ({
  authenticated: state.authReducer.authenticated
});

const mapDispatchToProps = {
  submitLoginForm
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
