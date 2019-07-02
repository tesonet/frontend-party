import React from 'react'
import { inject } from 'mobx-react'
import { LoginWrap, Input, Button, BgImg, Validator } from './styled'
import Logo from '../../Assets/logo.svg'
import { email as validatorId, password as validatorPsw } from '../../validators'

const url = 'http://playground.tesonet.lt/v1/tokens'

export default @inject('app') class Login extends React.Component {
    state = {
        username: 'tesonet',
        password: 'partyanimal'
    }
    onTextChange = (e, field) => {
        this.setState({
            [field]: e.target.value
        })
    }

    logIn = () => {
        const { logIn } = this.props.app
        const { username, password } = this.state
        fetch( url, {
            headers: {"content-type": "application/json; charset=UTF-8"},
            body: JSON.stringify({
                username: username, password: password
            }),
            method: "POST"
        }).then(data => data.json())
            .then(res => {
                localStorage.setItem('token', res.token);
                logIn();
                this.props.history.push('/');
            })
    }

    render() {
        const { username, password } = this.state
        return (
            <LoginWrap>
                <div>
                    <img src={Logo} alt="logo" />
                    <Input value={username} onChange={e => this.onTextChange(e, 'username')} placeholder='Username' />
                    <Input type="password" value={password} onChange={e => this.onTextChange(e, 'password')} placeholder='Password' />
                    <Button onClick={this.logIn}>Log in</Button>
                    <Validator username>{validatorId(username)}</Validator>
                    <Validator>{validatorPsw(password)}</Validator>
                </div>
                <BgImg />
            </LoginWrap>
        )
    }
}