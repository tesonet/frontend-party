import React from 'react';
import AuthForm from './AuthForm'

const AuthPage = ({login, history}) => (
    <div className="home-page">
        <div className="home-page_bg"></div>
        <div className="home-page_overlay"></div>
        <AuthForm history={history} login={login}/>
    </div>
)

export default AuthPage