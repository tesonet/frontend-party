import React, {Component} from 'react'
import axios from 'axios'
import logo from '../../../assets/images/logo.png'

const tokenUrl = 'http://playground.tesonet.lt/v1/tokens'

class AuthForm extends Component {

    state = {
        username: '',
        password: ''
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    formSubmit = async (e) => {
        e.preventDefault()

        const {password, username} = this.state

        try {
            const response = await axios(
                {
                    method: 'post',
                    url: tokenUrl,
                    data: {
                        password,
                        username
                    }
                })
            this.props.login(response.data.token)
            this.props.history.push('servers')


        } catch (e) {
            console.error('No token, no entry !')
        }
    }

    render() {

        const {
            username,
            password,
        } = this.state;

        const isInvalid =
            password === '' ||
            username === '';

        return (
            <div className="auth-form">
                <img className="logo" src={logo} alt="logo"/>
                <form className="auth-form_form" onSubmit={this.formSubmit}>
                    <input
                        className="auth-form_input user-inp"
                        onChange={this.onInputChange}
                        placeholder="Username"
                        name="username"
                        value={this.state.username}
                        type="text"
                    />
                    <input
                        className="auth-form_input pass-inp"
                        onChange={this.onInputChange}
                        placeholder="Password"
                        name="password"
                        type="text"
                        value={this.state.password}
                    />
                    <button
                        className="auth-form_btn btn"
                        type="submit"
                        disabled={isInvalid}
                    >
                        Log In
                    </button>
                </form>
            </div>
        );
    }
}

export default AuthForm