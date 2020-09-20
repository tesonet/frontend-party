import React, {
    Fragment, useRef, useEffect, memo,
} from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import ReactTooltip from 'react-tooltip';
import LoginSubmitButton from './LoginSubmitButton';
import PasswordFieldWrapper from './Fields/PasswordFieldWrapper';
import UsernameFieldWrapper from './Fields/UsernameFieldWrapper';
import validate from '../../utils/validate';

const Form = (props) => {
    const { handleSubmit, error } = props;
    const submitted = useSelector((state) => state.auth.submitted);
    const formRef = useRef(null);

    useEffect(() => {
        if (error) {
            ReactTooltip.show(formRef.current);
            setTimeout(() => ReactTooltip.hide(formRef.current), 2000);
        }
    });

    return (
        <Fragment>
            <form
                onSubmit={handleSubmit}
                ref={formRef}
                data-tip={error}
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
            <ReactTooltip
                effect="solid"
                place="bottom"
                offset={{ left: 4, bottom: 5 }}
            />
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
