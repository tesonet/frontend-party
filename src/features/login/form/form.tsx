import React from 'react';
import { action, decorate } from 'mobx';
import { observer, inject } from 'mobx-react';
import Input from '../../../common/form/input/input';
import Button from '../../../common/form/button/button';
import LoginIcon from '../../../resources/svg/username-icon.svg';
import PasswordIcon from '../../../resources/svg/password-icon.svg';
import { ILoginData, AuthStore } from '../../authentication/store';

interface IProps {
    onSubmit?: (e: any) => void;
    value?: string;
    authStore?: AuthStore;
}

const LoginForm = observer(class LoginForm extends React.Component<IProps> {
    private loginData: ILoginData;

    constructor(props: IProps) {
        super(props)

        this.loginData = {
            username: '',
            password: ''
        }
    }

    public render() {
        const { isLoggingIn } = this.props.authStore!;

        return (
            <form onSubmit={this.handleSubmit} noValidate>
                <Input
                    placeholder="Username"
                    type="text"
                    name="username"
                    onChange={this.handleChange}
                >
                    <img src={LoginIcon} height={16} width={16}></img>
                </Input>
                <Input
                    placeholder="Password"
                    type="password"
                    name="password"
                    onChange={this.handleChange}
                >
                    <img src={PasswordIcon} height={16} width={16}></img>
                </Input>
                <Button type="submit" disabled={isLoggingIn}>
                    Log In
                </Button>
            </form>
        )
    }

    handleSubmit = (event: any) => {
        event.preventDefault();
        this.props.authStore!.loginUser(this.loginData)
    }

    handleChange = (event: any) => {
        const { name, value } = event.target;
        this.loginData[name] = value;
    }
});

decorate(LoginForm, {
    handleSubmit: action,
    handleChange: action
});

export default inject('authStore')(LoginForm);

