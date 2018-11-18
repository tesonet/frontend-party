import React, { Component } from "react";
import { Button, Form, FormGroup, Input, Alert } from 'reactstrap';
import { Login } from '../actions/LoginActions';
import { withRouter } from "react-router-dom";

class LoginContainer extends Component {
  constructor() {
    super();
    this.state = { username:"", password:"", message:"" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange (event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    Login(this.state).then(data => {
      if (data.token) {
        localStorage.setItem('auth_token', data.token);        
        this.props.history.push("/dashboard");
      } else {
        this.setState({message: data.message});
      }
    })
  }
  render() {
    return (
      <div id="login">
        <div className="row align-items-center justify-content-center">
          <div className="col-10 col-sm-5 col-md-4 col-lg-3">
            <div className="icon"></div>
            <Form onSubmit={this.handleSubmit} autoComplete="off">
              <FormGroup>
                <div className="inner-addon left-addon">
                  <i className="glyphicon glyphicon-user"/>
                  <Input type="text" name="username" id="username" placeholder="Username" value={this.state.username} onChange={this.handleChange} />
                </div>
              </FormGroup>
              <FormGroup>
                <div className="inner-addon left-addon">
                  <i className="glyphicon glyphicon-lock"/>
                  <Input type="password" name="password" id="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
                </div>
              </FormGroup>
              { this.state.message != "" && <Alert color="danger">{this.state.message}</Alert>}
              <Button className="font-weight-bold" type="submit" color="success" block>Log In</Button>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(LoginContainer);