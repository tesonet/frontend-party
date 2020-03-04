import React, { Component } from 'react';
import bg from '../../images/bg-image.jpg';
import "./sign-in.scss";
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';
import username from '../../images/username.svg';
import password from '../../images/password.svg';

const bgStyle = {
    backgroundImage: `url(${bg})`
};

class SignIn extends Component {
  state = {
    username: '',
    password: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
  }
  render() {
    const { authError, authToken } = this.props;
    if (authToken !== null) return <Redirect to='/' />

    return (
        <div className="container">
            <div className="bg-cover" style={ bgStyle }></div>
            <div className="bg-overlay"></div>
            <div className="form-container">
                <div className="logo">
                    <img src={require('../../images/testio.png')} alt="logo"/>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-field input-flex">
                        <span className="icon"><img src={username} alt="Username icon" /></span>
                        <input type="text" id='username' onChange={this.handleChange} placeholder="Username"/>
                    </div>
                    <div className="input-field input-flex">
                        <span className="icon"><img src={password} alt="Password icon" /></span>
                        <input type="password" id='password' onChange={this.handleChange} placeholder="Password"/>
                    </div>
                    <div className="input-field">
                        <button className="btn">Log In</button>
                        <div className="red-text">
                          { authError ? <p className="para-red">{ authError }</p> : null }
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    authToken: state.auth.authToken
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (credentials) => dispatch(signIn(credentials))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);