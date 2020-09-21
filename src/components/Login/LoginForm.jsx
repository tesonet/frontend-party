import React, {
    Fragment, useRef, memo,
} from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Overlay, Tooltip } from 'react-bootstrap';
import LoginSubmitButton from './LoginSubmitButton';
import PasswordFieldWrapper from './Fields/PasswordFieldWrapper';
import UsernameFieldWrapper from './Fields/UsernameFieldWrapper';
import validate from '../../utils/validate';

const Form = (props) => {
    const { handleSubmit, error } = props;
    const submitted = useSelector((state) => state.auth.submitted);
    const formRef = useRef(null);

    return (
        <Fragment>
            <form
                onSubmit={handleSubmit}
                ref={formRef}
            >
                <Field
                    name="username"
                    component={UsernameFieldWrapper}
                    label="Username"
                />
                <Field
                    name="password"
                    component={PasswordFieldWrapper}
                    label="Password"
                />
                <LoginSubmitButton
                    disabled={!submitted}
                    className="login-button"
                />
            </form>
            <Overlay target={formRef.current} show={!!error} placement="bottom">
                {(tooltipProps) => (
                    <Tooltip id="button-tooltip" {...tooltipProps}>
                        {error}
                    </Tooltip>
                )}
            </Overlay>
        </Fragment>
    );
};

Form.defaultProps = {
    error: null,
};

Form.propTypes = {
    error: PropTypes.string,
    handleSubmit: PropTypes.func.isRequired,
};

const LoginForm = reduxForm({
    form: 'login',
    validate,
})(Form);

export default memo(LoginForm);
