import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Input from '../UI/Input';
import Button from '../UI/Button';
import * as actions from '../../store/actions/index';
import AlertMessage from '../UI/AlertMessage';
import Spinner from '../UI/Spinner/Spinner';

const Auth = props => {

    const [name, setName ] = useState('');
    const [password, setPassword ] = useState('');

    const usernameChange = (event) => {
        setName(event.target.value);
    }

    const passwordChange = (event) => {
        setPassword(event.target.value);
    }

    const authStart = (event) => {
        event.preventDefault();
        props.onAuth(name, password);      
    };

    let errorMessage = null;
        if (props.error) {      
            errorMessage = <AlertMessage message={props.error.response ? props.error.response.data.message : null}/>;
        }

        let authRedirect = null;
        if (props.isAuth) {
            authRedirect = <Redirect to="/servers"/>;
        }

        let form = 
            (<form onSubmit={authStart}>
            <Input type="text" placeholder="Username" className="login-box--input" id="username" icon="person"  value={name} changed={usernameChange}  />
            <Input type="password" placeholder="Password" className="login-box--input" id="password" icon="lock" value={password} changed={passwordChange} />                   
            <Button type="submit" title="Log In" disabled={!name || !password }/>
            </form>); 
        if (props.loading) {
            form = <Spinner/>
        }
        
        return (
            <React.Fragment>
                {authRedirect}
                {errorMessage}
                {form}
            </React.Fragment>
        );
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

Auth.propTypes = {
    error: PropTypes.any,
    isAuth: PropTypes.bool,
    loading: PropTypes.bool
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);