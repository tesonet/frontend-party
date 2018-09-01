import React from 'react';
import {Form,Button,Input,Message} from 'semantic-ui-react';
import Validator from 'validator';
import PropTypes from 'prop-types';
import ErrorMessage from '../messages/ErrorMessage';




class LoginForm extends React.Component{

    state = {
        data : {
            email : '',
            password : ''
        },
        loading : false,
        errors : {}
    }

    onChange = e => this.setState({
        data : {...this.state.data, [e.target.name] : e.target.value }
    });

    onSubmit = () => {
        const errors = this.validate(this.state.data);
        this.setState({
            errors
        });
        if (Object.keys(errors).length === 0){
            this.setState({ loading : true});
            this.props
            .submit(this.state.data)
            .catch(err => this.setState({
                errors : err.response.data.errors, loading: false
            }));
            
        } 
    };

    validate = data => {
        const errors = {};
        if (!Validator.isEmail(data.email)) errors.email = "Invalid Email"
        if (!data.password) errors.password = "This can not be empty";
        return errors;
    }

    render(){

        let ButtonStyle = {
            width: "360px",
            height: "56px",
            borderRadius: "5px",
            backgroundColor: "#9fd533",
            color : "#ffff",
        }  
        
        const { data, errors, loading } = this.state;

        return(
            <Form onSubmit={this.onSubmit} loading= {loading}>   
                {errors.global && (
                    <Message negative>
                <Message.Header>Something went wrong :(</Message.Header>
                <p>{errors.global}</p>
                </Message>  
                

            )}
                <Form.Field error = {!!errors.email} >
                    <Input
                        icon='user' 
                        iconPosition='left'
                        type = "email"
                        id = "email"
                        name = "email"
                        value = {data.email}
                        placeholder = "Username"
                        onChange = {this.onChange}
                    />
                    {errors.email && <ErrorMessage text = { errors.email } />}
                </Form.Field>

                <Form.Field error = {!!errors.password}>
                    <Input
                        icon='lock' 
                        iconPosition='left'
                        type = "password"
                        id = "password"
                        name = "password"
                        value = {data.password}
                        placeholder = "Password"
                        onChange = {this.onChange}
                    />
                    {errors.password && <ErrorMessage text = { errors.password } />}
                </Form.Field>
                 <Button style = {ButtonStyle}>Login</Button>
            </Form>
        );
    }
}

LoginForm.propTypes = {
    submit : PropTypes.func.isRequired
}

export default LoginForm;