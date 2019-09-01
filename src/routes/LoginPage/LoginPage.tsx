import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import "./LoginPage.scss";
import { withRouter } from "react-router-dom";

const LoginPage: React.FC = () => {
    return (
        <div className="main">
            <div className="container d-flex align-items-center justify-content-center h-100">
                <div className="d-flex flex-column align-items-center">
                    <div className="logo"/>
                    <LoginForm/>
                </div>
            </div>
        </div>
    );
};

export default withRouter(LoginPage);