import React, { Component } from 'react'

export default class Login extends Component {
    state = {
        username:'tesonet',
        password:'partyanimal'
    }
    login = ()=>{
                let config = {
                    method: 'POST',
                    headers: { 'Content-Type':'application/x-www-form-urlencoded' },
                    body: `username=tesonet&password=partyanimal`
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
            <div>
                Login
                <button
                onClick={this.login}
                >Login</button>
            </div>
        )
    }
}
