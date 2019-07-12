import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Dispatch } from 'redux';
import { Sizes, Icons } from '../../common/constants';
import { actions as authActions } from '../../ducks/auth.duck';
import { RootState } from '../../root.reducer';
import formStateValidator, { maxLength, required } from '../../utils/validator';
import { screens } from '../../utils/helpers';
import FormButton from '../common/FormButton';
import FormInput from '../common/FormInput';
import { colors } from '../../theme';

const Form = styled.form`
    width: 100%;

    & > *:not(:first-child) {
        margin-top: 19px;
    }

    @media ${screens[Sizes.XS]} {
        & > *:not(:first-child) {
            margin-top: 10px;
        }

        svg {
            width: 10px;
        }
    }
`;

const FormError = styled.div`
    position: relative;
    background: ${colors.red1};
    padding: 8px 10px;
    font-size: 14px;
    border-radius: 5px;
    color: ${colors.light1};
    font-weight: 700;

    @media ${screens[Sizes.XS]} {
        font-size: 12px;
    }
`;

const Arrow = styled.div`
    position: absolute;
    bottom: 0;
    right: 20px;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid ${colors.red1};
    transform: translateY(100%);

    @media ${screens[Sizes.XS]} {
        border-width: 5px;
    }
`;

type StateProps = {
    loading: boolean;
    errorMessage: string | null;
};

type DispatchProps = {
    login: typeof authActions.login;
};

type ErrorsType = {
    username?: string;
    password?: string;
};

const validate = formStateValidator({
    username: [required, maxLength(30)],
    password: [required],
});

const LoginForm = ({ loading, errorMessage, login }: StateProps & DispatchProps) => {
    const [values, setValues] = useState({
        username: '',
        password: '',
    });

    const [errors, setErrors] = useState({} as ErrorsType);
    const [shouldSubmit, setShouldSubmit] = useState(false);

    useEffect(() => {
        if (Object.keys(errors).filter(key => !!errors[key]).length === 0 && shouldSubmit) {
            login({ ...values });
        }

        setShouldSubmit(false);
    }, [errors]);

    const handleSubmit = e => {
        e.preventDefault();
        setErrors(validate(values, errors));
        setShouldSubmit(true);
    };

    const handleChange = e => {
        const { name, value } = e.target;

        setValues({
            ...values,
            [name]: value,
        });

        setErrors(validate({ [name]: value }, errors));
    };

    return (
        <Form data-testid="login-form" onSubmit={handleSubmit}>
            {errorMessage && (
                <FormError data-testid="login-form-error">
                    {errorMessage}
                    <Arrow />
                </FormError>
            )}
            <FormInput
                data-testid="form-input-username"
                icon={Icons.USER}
                name="username"
                value={values.username}
                placeholder="Username"
                onChange={handleChange}
                error={errors.username}
            />
            <FormInput
                data-testid="form-input-password"
                icon={Icons.LOCK}
                name="password"
                value={values.password}
                placeholder="Password"
                type="password"
                onChange={handleChange}
                error={errors.password}
            />
            <FormButton data-testid="form-button" value="Log In" loading={loading} />
        </Form>
    );
};

const mapStateToProps = (state: RootState): StateProps => ({
    loading: state.session.loading,
    errorMessage: state.session.errorMessage,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    login: ({ username, password }) => dispatch(authActions.login({ username, password })),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm);
