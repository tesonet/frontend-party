import React from 'react';
import { connect } from 'react-redux';
import logo from '../../assets/testio-logo-light.png';
import iconProfile from '../../assets/profile.svg';
import iconLock from '../../assets/lock.svg';
import InputText from '../main/InputText';
import auth from '../../store/actions/auth';
import './LoginForm.scss';

class LoginForm extends React.Component {
  sumbit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.props.dispatch(auth.logIn());
  }

  render() {
    return (
      <div className="LoginForm">
        <div className="container">
          <img src={logo} alt="logo" />
          <form onSubmit={this.sumbit}>
            <InputText action={auth.userName} options={{ type: 'text', placeholder: 'Username', icon: iconProfile }} />
            <InputText action={auth.userPassword} options={{ type: 'password', placeholder: 'Password', icon: iconLock }} />
            <div className="button">
              <button className="button-green">Log in</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default connect()(LoginForm);