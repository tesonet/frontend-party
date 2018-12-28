import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import * as actions from '../../store/actions/index';
import AlertMessage from '../AlertMessage/AlertMessage';
import Spinner from '../Spinner/Spinner';

export class Auth extends Component {

    constructor(props) {
        super(props);
        this.state = {name: '', password: ''};  
        this.usernameChange = this.usernameChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
    }       
      
    usernameChange(event) {
        this.setState({name: event.target.value});
    }

    passwordChange(event) {
        this.setState({password: event.target.value});
    }

    authStart = (event) => {
        event.preventDefault();
        this.props.onAuth(this.state.name, this.state.password);      
    };

    render() {
        let errorMessage = null;
        if (this.props.error) {      
            errorMessage = <AlertMessage message={this.props.error.response ? this.props.error.response.data.message : null}/>;
        }

        let authRedirect = null;
        if (this.props.isAuth) {
            authRedirect = <Redirect to="/logged"/>;
        }

        let form = 
            (<form onSubmit={this.authStart}>
            <Input type="text" placeholder="Username" className="login-box--input" id="username" icon="person"  value={this.state.name} changed={this.usernameChange}  />
            <Input type="password" placeholder="Password" className="login-box--input" id="password" icon="lock" value={this.state.password} changed={this.passwordChange} />                   
            <Button type="submit" title="Log In" disabled={!this.state.name || !this.state.password }/>
            </form>); 
        if (this.props.loading) {
            form = <Spinner/>
        }
        
        return (
            <>
                {authRedirect}
                {errorMessage}
                {form}
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        error: state.auth.error,
        isAuth: state.auth.token !== null,
        loading: state.auth.loading
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password) => dispatch(actions.auth(email, password))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);