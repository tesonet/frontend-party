import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './styles/PageNotFoundStyle.css';

class PageNotFound extends Component {

  constructor() {
    super()
    this.state = { redirect: false }
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({ redirect: true })
    }, 5000)
}

  render() {
    if (this.state.redirect) {
      return <Redirect to='/'/>
    }
    return (
      <div className='page'>
        <div className='container'>
          <h1>404 - Page Not Found</h1>
          <p>Sorry, the page you were looking for does not exist.</p>
          <p>You will be redirected to {(this.props.login.token && this.props.login.userAuthenticated) ? "servers" : "login"} page in a few seconds</p>
        </div>
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
