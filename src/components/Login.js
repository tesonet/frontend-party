import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { PostData } from '../services/PostData';

class Login extends Component {

  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
      redirectToReferrer: false,

    };

    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    document.body.className = "body-component-login";
  }

  login() {

    let URL = 'http://playground.tesonet.lt/v1/tokens';

    if (this.state.username && this.state.password) {
      PostData(URL, this.state).then((result) => {
        let responseJson = result;

        if (responseJson.token) {

          localStorage.setItem('token', JSON.stringify(responseJson));
          sessionStorage.setItem('userData', JSON.stringify(responseJson));

          this.setState({ redirectToReferrer: true });
        }
      });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {

    if (this.state.redirectToReferrer) {
      return (<Redirect to={'/'} />)
    }

    if (localStorage.getItem('token')) {
      return (<Redirect to={'/'} />)
    }

    return (

      <div className="login">
        <h2></h2>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1"><i className="fa fa-user"></i></span>
          </div>
          <input type="text" name="username" placeholder="Username" className="form-control" onChange={this.onChange} />
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1"><i className="fa fa-lock"></i></span>
          </div>
          <input type="password" name="password"  placeholder="Password" className="form-control" onChange={this.onChange}/>
        </div>

        <input type="submit" className="btn btn-primary" value="Login" onClick={this.login} />

      </div>

    );
  }
}
export default Login;   
