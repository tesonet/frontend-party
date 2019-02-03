import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import LoginLayout from './LoginLayout';
import FormField from '../utils/form/FormField';
import FormButton from '../utils/form/FormButton';
import {
    updateField,
    generateData,
    isFormValid
} from '../utils/form/formActions';
import { login } from '../../actions/authActions';

class Login extends Component {
    state = {
        formError: false,
        formErrorMessage: '',
        formdata: {
            username: {
                element: 'input',
                value: '',
                config: {
                    name: 'username',
                    type: 'text',
                    placeholder: 'Username'
                },
                icon: true,
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                errorMessage: ''
            },
            password: {
                element: 'input',
                value: '',
                config: {
                    name: 'password',
                    type: 'password',
                    placeholder: 'Password'
                },
                icon: true,
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                errorMessage: ''
            }
        }
    };

    updateForm = element => {
        const newFormdata = updateField(element, this.state.formdata);
        this.setState({
            formError: false,
            formErrorMessage: '',
            formdata: newFormdata
        });
    };

    onSubmit = e => {
        e.preventDefault();

        let dataToSubmit = generateData(this.state.formdata);
        let formIsValid = isFormValid(this.state.formdata);

        if (formIsValid) {
            this.props.login(dataToSubmit).then(() => {
                if (this.props.auth.message) {
                    this.setState({
                        formError: true,
                        formErrorMessage: this.props.auth.message
                    });
                }
            });
        } else {
            this.setState({
                formError: true,
                formErrorMessage: 'Something went wrong'
            });
        }
    };

    renderError = () =>
        this.state.formError && (
            <div className="form__error">{this.state.formErrorMessage}</div>
        );

    render() {
        if (this.props.auth.token) return <Redirect to="/servers" />;

        return (
            <LoginLayout>
                <form onSubmit={e => this.onSubmit(e)} className="form">
                    <FormField
                        id={'username'}
                        fieldData={this.state.formdata.username}
                        change={element => this.updateForm(element)}
                    />

                    <FormField
                        id={'password'}
                        fieldData={this.state.formdata.password}
                        change={element => this.updateForm(element)}
                    />

                    <FormButton type="submit" value="Log in" />
                    {this.renderError()}
                </form>
            </LoginLayout>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { login }
)(Login);
