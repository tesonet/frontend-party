import React from "react";
import Logo from "../components/Logo";
import Form from "../components/Form";
import { connect } from "react-redux";
import management from "../management";

class AuthorizationPage extends React.Component {
  render() {
    return (
      <div className="authorization-window">
        <Logo />
        <Form />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  token: management.selectors.getToken(state)
});

const mapDispatchToProps = dispatch => ({
  authorizing: (username, password) =>
    dispatch(management.actions.authorizing(username, password))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthorizationPage);
