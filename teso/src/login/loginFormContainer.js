import React, { PureComponent } from 'react';
import { Form, Field } from 'react-final-form';
import PropTypes from 'prop-types';

class LoginForm extends PureComponent {
    render() {
        return (
            <Form
                onSubmit={this.props.onSubmit}
                render={({ handleSubmit }) => (
                    <form className="flex justify-center flex-wrap" onSubmit={handleSubmit}>
                        <Field 
                            name="username" 
                            className="w-full h-full login-form__field" 
                            component="input" 
                            type="text"
                            required
                            maxLength={25}
                            placeholder="&#xf007;  Username" />
                        <Field 
                            name="password" 
                            className="w-full h-full login-form__field" 
                            component="input" 
                            type="password"
                            maxLength={25}
                            required
                            placeholder="&#xf023;  Password" />

                        <button className="w-full login-form__button" type="submit">Log In</button>
                    </form>
                )}
            />
        );
    }
}

LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default LoginForm;
