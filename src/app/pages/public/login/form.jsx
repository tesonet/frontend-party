import React from 'react';
import {
    reduxForm,
    Field,
    Form,
    formPropTypes,
} from 'redux-form';
import { Alert } from 'reactstrap';
import {
    MdPerson as PersonIcon,
    MdVpnKey as KeyIcon,
} from 'react-icons/md';

import {
    TextField,
    validations,
} from 'app/components/inputs';
import { Button } from 'app/components/button';

const LoginForm = ({ handleSubmit, submitting, error }) => (
    <Form onSubmit={ handleSubmit }>
        { error && <Alert color="danger">{ error }</Alert>}

        <Field
            name="username"
            component={ TextField }
            placeholder="Username"
            addon={ PersonIcon }
            disabled={ submitting }
            validate={
                [
                    validations.required,
                ]
            }
        />

        <Field
            name="password"
            component={ TextField }
            placeholder="Password"
            addon={ KeyIcon }
            disabled={ submitting }
            validate={
                [
                    validations.required,
                ]
            }
        />

        <Button
            title="login"
            type="submit"
            size="lg"
            disabled={ submitting }
            block
        />
    </Form>
);

LoginForm.propTypes = {
    ...formPropTypes,
};

export default reduxForm({
    form: 'login-form',
})(LoginForm);
