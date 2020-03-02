import React, { Component } from 'react';
import bg from '../../images/bg-image.jpg';
import "./sign-in.scss";

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
    console.log(this.state);
  }
  render() {
    return (
        <div className="container">
            <div className="bg-cover" style={ bgStyle }></div>
            <div className="bg-overlay"></div>
            <div className="form-container">
                <div className="logo">
                    <img src={require('../../images/testio.png')} alt="logo"/>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <i className="fas fa-user icon"></i>
                        <input type="text" id='username' onChange={this.handleChange} placeholder="Username"/>
                    </div>
                    <div className="input-field">
                        <i className="fas fa-lock icon"></i>
                        <input type="password" id='password' onChange={this.handleChange} placeholder="Password"/>
                    </div>
                    <div className="input-field">
                        <button className="btn">Log In</button>
                    </div>
                </form>
            </div>
        </div>
    )
  }
}

export default SignIn;