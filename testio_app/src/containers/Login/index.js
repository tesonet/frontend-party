import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  handleInput = event => {
    const { name, value } = event.target;
    this.setState({[name]: value});
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.submit(this.state.username, this.state.password);
  }

  render() {
     const { username, password } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
            type='text'
            name='username'
            onChange= {this.handleInput}
            value = {username}
            />
          </div>
          <div>
            <input
            type='text'
            name='password'
            onChange= {this.handleInput}
            value = {password}
            />
          </div>
          <div>
            <button
              type='submit'
            >Log In</button>
          </div>
        </form>
      </div>
    );
  }
}

Login.propTypes= {
 submit:PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
   username: state.username,
   password: state.password,
})

const mapDispatchToProps = dispatch => {
  return {
    submit: (username, password) =>
      dispatch({
        type: "AUTH_REQUEST",
        payLoad: {username, password}
      })
  };
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);


export default compose(
withRouter,
withConnect,
)(Login);