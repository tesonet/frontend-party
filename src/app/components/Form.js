import React from "react";
import { connect } from "react-redux";
import management from "../management";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", password: "" };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangePsw = this.handleChangePsw.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    const { authorizing } = this.props;
    const { name, password } = this.state;
    authorizing(name, password);
  };

  handleChangeName = e => {
    this.setState({ name: e.target.value });
  };
  handleChangePsw = e => {
    this.setState({ password: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          className="form-username"
          name="username"
          onChange={this.handleChangeName}
        />
        <input
          type="password"
          placeholder="Password"
          className="form-password"
          name="password"
          onChange={this.handleChangePsw}
        />
        <button className="btn btn-authorization" type="submit">
          Log In
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  token: management.selectors.getToken(state)
});

const mapDispatchToProps = dispatch => ({
  authorizing: (name, password) =>
    dispatch(management.actions.authorizing(name, password))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
