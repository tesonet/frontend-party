import React, { Component } from 'react'
import {Button} from '../styled-components/Button'
import {Input} from '../styled-components/Input'
import {LogoLg} from '../styled-components/LogoLg'
import ICOUser from '../assets/img/ico-username.svg'
import ICOPass from '../assets/img/ico-lock.svg'
import LogoLgFile from '../assets/img/logo.png'
import {LoginContainer} from '../styled-components/LoginContainer'
import {FormContainer} from '../styled-components/FormContainer'
import {Wrapper} from '../styled-components/Wrapper'
export default class Login extends Component {
    state = {
        username:'',
        password:''
    }
    focus() {
        this.textInput.focus();
      }
    
    handleInput=(e) => {
        this.setState({[e.target.name]: e.target.value})
    };
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
    onFormSubmit = (e)=>{
        e.preventDefault()
        this.login()
    }
    componentDidMount(){
        this.focus();
    }
    componentWillMount(){
       if (localStorage.getItem('jwt-token')) return this.props.history.push('/');
    }
    render() {
        return (
            <LoginContainer>
                <Wrapper className="row">
                <FormContainer className="col-lg-4 col-md-6 col-sm-10 col-xs-10" onSubmit={this.onFormSubmit} >
                    <LogoLg src={LogoLgFile}></LogoLg>
                    <Input  ref={(input) => { this.textInput = input; }} icon={ICOUser} placeholder="Username" autoComplete="new-username" name="username" onChange={this.handleInput} value={this.state.username} type='text'/>
                    <Input icon={ICOPass} placeholder="Password" autoComplete="new-password" name="password" onChange={this.handleInput} value={this.state.password} type='password'/>
                    <Button
                    onClick={this.login}
                    >Log in</Button>
                </FormContainer>
                </Wrapper>
            </LoginContainer>
        )
    }
}
