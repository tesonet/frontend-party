import React, { Component } from 'react'
import {Button} from '../styled-components/Button'
import {Input} from '../styled-components/Input'
import {LoginContainer} from '../styled-components/LoginContainer'
import {FormContainer} from '../styled-components/FormContainer'
export default class Login extends Component {
    state = {
        username:'',
        password:''
    }
    handleInput=e=>this.setState({[e.target.name]:e.target.value})
    login = ()=>{
                let config = {
                    method: 'POST',
                    headers: { 'Content-Type':'application/x-www-form-urlencoded' },
                    body: `username=${this.state.username}&password=${this.state.password}`
                }
                // request to http://playground.tesonet.lt/v1/tokens
                fetch('http://playground.tesonet.lt/v1/tokens', config).then(
                    res=>{
                        if(res.ok) {
                         res.json().then(res=>{
                            console.log(res.token);
                            localStorage.setItem('jwt-token', res.token);
                            this.props.history.push('/');
                         })
                        } else {
                          throw Error(`Request rejected with status ${res.status}`);
                        }
                    }).catch((e)=>{
                        console.log(e);         
                    })
    }
    componentWillMount(){
       if (localStorage.getItem('jwt-token')) return this.props.history.push('/');
    }
    render() {
        return (
            <LoginContainer>
                <FormContainer onSubmit={
                    (e) => {e.preventDefault()
                    this.login()
                 }} >
                    <Input autoComplete="new-username" name="username" onChange={this.handleInput} value={this.state.username} type='text'/>
                    <Input autoComplete="new-password" name="password" onChange={this.handleInput} value={this.state.password} type='password'/>
                    <Button
                    onClick={this.login}
                    >Login</Button>
                </FormContainer>
            </LoginContainer>
        )
    }
}
