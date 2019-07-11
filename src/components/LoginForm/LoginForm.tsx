import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Dispatch } from 'redux';
import Input from '../Input/Input';
import { Breakpoints, Icons } from '../../common/constants';
import { actions as authActions } from '../../ducks/auth.duck';
import { RootState } from '../../root.reducer';
import formStateValidator, { maxLength, required } from '../../utils/validator';
import screens from '../../utils/screens';

const Form = styled.form`
    width: 100%;

    & > *:not(:last-child) {
        margin-bottom: 19px;
    }

    ${screens[Breakpoints.XS]`
        & > *:not(:last-child) {
            margin-bottom: 10px;
        }
        
        svg {
            left: 17px;
            width: 10px;
        }
        
        input, input[type='submit'] {
            padding: 10px 40px;
            font-size: 12px;
        }
    `}
`;

const ErrorMessage = styled.div`
    position: relative;
    background-color: ${({ theme }) => theme.colors.danger};
    padding: 8px 10px;
    font-size: 14px;
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.light};
    font-weight: 700;

    ${screens[Breakpoints.XS]`
        font-size: 12px;
    `}
`;

const Arrow = styled.div`
    position: absolute;
    bottom: 0;
    right: 20px;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid ${({ theme }) => theme.colors.danger};
    transform: translateY(100%);

    ${screens[Breakpoints.XS]`
        border-left-width: 5px;
        border-right-width: 5px;
        border-top-width: 5px;
    `}
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
        <Form onSubmit={handleSubmit}>
            {errorMessage && (
                <ErrorMessage>
                    {errorMessage}
                    <Arrow />
                </ErrorMessage>
            )}
            <Input
                icon={Icons.USER}
                name="username"
                value={values.username}
                placeholder="Username"
                onChange={handleChange}
                error={errors.username}
            />
            <Input
                icon={Icons.LOCK}
                name="password"
                value={values.password}
                placeholder="Password"
                type="password"
                onChange={handleChange}
                error={errors.password}
            />
            <Input type="submit" value="Log In" loading={loading} />
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
