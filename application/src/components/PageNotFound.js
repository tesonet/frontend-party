import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


class PageNotFound extends Component {

  constructor() {
    super()
    this.state = { redirect: false }
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({ redirect: true })
    }, 6000)
}

  render() {
    if (this.state.redirect) {
      console.log('yis')
      return <Redirect to='/'/>
    }
    return (
      <div>
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you were looking for does not exist.</p>
        <p>You will be redirected to {(this.props.login.token && this.props.login.userAuthenticated) ? "servers" : "login"} page in a few seconds</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.LoginReducer
  }
}



export default connect(mapStateToProps)(PageNotFound);
