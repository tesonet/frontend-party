import LoginIcon from 'resources/svg/username-icon.svg';
import PasswordIcon from 'resources/svg/password-icon.svg';
import React from 'react';
import styles from './Form.module.scss';
import { action, decorate } from 'mobx';
import { authStore, ILoginData } from '../../authentication/store';
import { Button } from 'common/components/form/button/button';
import { observer } from 'mobx-react';
import { Input } from 'common/components/form/input/input';
import { SvgImage } from 'common/icon';

interface IProps {
    onSubmit?: (e: any) => void;
    value?: string;
}

export const LoginForm = observer(class LoginForm extends React.Component<IProps> {
    private loginData: ILoginData;

    constructor(props: IProps) {
        super(props)

        this.loginData = {
            username: '',
            password: ''
        }
    }

    public render() {
        return (
            <form onSubmit={this.handleSubmit} className={styles.form} noValidate>
                <Input
                    placeholder="Username"
                    type="text"
                    name="username"
                    onChange={this.handleChange}
                >
                    <SvgImage path={LoginIcon} className={styles.icon}/>
                </Input >
                <Input
                    placeholder="Password"
                    type="password"
                    name="password"
                    onChange={this.handleChange}
                >
                    <SvgImage path={PasswordIcon} className={styles.icon}/>
                </Input>
                <Button type="submit" className={styles.button}>
                    Log In
                </Button>
            </form>
        )
    }

    handleSubmit = (event: any) => {
        event.preventDefault();
        authStore.loginUser(this.loginData)
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

