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
    const { dispatch, username, password } = this.props;

    if (!username || !password) {
      dispatch(auth.loginError(true));
      return setTimeout(() => dispatch(auth.loginError(false)), 400);
    }
    dispatch(auth.logIn());
  }

  render() {
    return (
      <div className="LoginForm">
        <div className={this.props.shake ? 'container shake' : 'container'}>
          <img src={logo} alt="logo" />
          <form onSubmit={this.sumbit}>
            <InputText action={auth.username} options={{ type: 'text', placeholder: 'Username', icon: iconProfile }} />
            <InputText action={auth.password} options={{ type: 'password', placeholder: 'Password', icon: iconLock }} />
            <div className="button">
              <button className="button-green">Log in</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    username: state['login:username'],
    password: state['login:password'],
    shake: state['login:error']
  }
}

export default connect(mapStateToProps)(LoginForm);