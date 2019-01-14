import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Input from '../../components/Input';
import LoginLogo from '../../components/LoginLogo';
import LoginBtn from '../../components/LoginBtn';
import './styles.scss'

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  handleOnChange = event => {
    const { name, value } = event.target;
    this.setState({[name]: value});
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.submit(this.state.username, this.state.password);
  }


  handleSuccessAuth = () => {
    this.props.history.push("/servers");
  }

  render() {
     const { username, password } = this.state;

     if(this.props.auth_success){
        this.handleSuccessAuth();
     }

    return (
      <div className='login-container row justify-content-center align-items-center'>
         <form onSubmit={this.handleSubmit} className='login-form'>
           <LoginLogo />
           <div className='form-group'>
             <Input
               path='data/images/user-ico.svg'
               type='text'
               value={username}
               name='username'
               placeholder='Username'
               onChange={this.handleOnChange}
             />
           </div>
           <div className='form-group'>
             <Input
               path='data/images/lock-ico.svg'
               type='password'
               value={password}
               name='password'
               placeholder='Password'
               onChange={this.handleOnChange}
             />
           </div>
           <div className='form-group'>
            <LoginBtn username={username} password={password}/>
           </div>
         </form>
      </div>
    );
  }
}

Login.propTypes= {
 submit:PropTypes.func.isRequired,
 auth_success: PropTypes.bool,
};

const mapStateToProps = (state) => ({
   username: state.username,
   password: state.password,
   auth_success: state.auth_success,
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