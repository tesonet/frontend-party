import React from 'react';
import store from '../store/index'
import { usernameValue, passwordValue, loginError } from '../store/actions'
import axios from 'axios'
import { connect } from 'react-redux';

class Login extends React.Component {

    // Get username input value
    getUsername = (event) => {
        let usernameInput = event.target.value;
       store.dispatch(usernameValue(usernameInput));
    }

    // Get password input value
    getPassword = (event) => {
        let passwordInput = event.target.value;
        store.dispatch(passwordValue(passwordInput));
    }

    // Send authorization and handle actions from responts
    handleSubmit = () => {
        let storeUsername = store.getState().login.username;
        let storePassword = store.getState().login.password;

        axios.post(
            'http://playground.tesonet.lt/v1/tokens', 
            {'username': storeUsername, 'password': storePassword}
        ).then((response) => {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('logged', true)
            store.dispatch(loginError(false));
            this.props.history.push('/servers');
        })
        .catch(() => {
            store.dispatch(loginError(true));
        })
    }
    // Submits when press ENTER key
    enterPress = (event) => {
        if(event.key === 'Enter'){
            this.handleSubmit();
        }
    }

    render(){
        const status = this.props.status
        return(
            <div className='background'>
                <div className='logo'>
                    <img src={require('../media/logo-testio.svg')} alt='logo' />
                </div>
                <div className='loginForm'>
                    <div className={status === false ? 'loginForm__wrapper' : 'loginForm__wrapper--alert'}>
                        <span>
                            <img 
                                className='loginForm__loginIcon' 
                                src={require('../media/user-icon.svg')} 
                                alt='Username icon'
                             />
                        </span>
                        <input 
                            className='loginForm__input' 
                            type='text' 
                            placeholder='Username' 
                            onChange={this.getUsername}
                            onKeyDown={this.enterPress}
                        />
                        <img 
                            className={status === false ? 'loginForm__disable' : 'loginForm__alert-icon'} 
                            src={require('../media/alert-icon.svg')} 
                            alt='alert' 
                        />
                    </div>
                    <div className={status === false ? 'loginForm__wrapper' : 'loginForm__wrapper--alert'}>
                        <img 
                            className='loginForm__loginIcon' 
                            src={require('../media/password-icon.svg')} 
                            alt='Password icon'
                         />
                        <input 
                            className='loginForm__input' 
                            type='password' 
                            placeholder='Password'
                            onChange={this.getPassword}
                            onKeyDown={this.enterPress}
                         />
                         <img 
                            className={status === false ? 'loginForm__disable' : 'loginForm__alert-icon'} 
                            src={require('../media/alert-icon.svg')} 
                            alt='alert' 
                        />
                    </div>
                    <div className='loginForm__button' onClick={this.handleSubmit}><span>log in</span></div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {status: state.error.value}
}

export default connect(mapStateToProps)(Login);