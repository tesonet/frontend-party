import InputField from "../InputField/InputField";
import Icon from "../Icon/Icon";
import Button from "../Button/Button";
import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import {authService} from "../../services/auth.service";

interface StateInterface {
    username?: string;
    password?: string;
    invalid: boolean;
    submitted: boolean;
    isLoading: boolean;
}

class LoginForm extends Component<any, StateInterface> {
    state: StateInterface = {
        submitted: false,
        invalid: false,
        isLoading: false,
    };

    constructor(props: any) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    login = async (username: string, password: string) => {
        this.setState({
            submitted: true,
            isLoading: true
        });

        authService.login(username, password).then((success: boolean) => {
            if (success) {
                this.props.history.push('/');
            } else {
                this.setState({
                    invalid: true,
                    isLoading: false
                })
            }
        });
    };

    submitFormHandler = async (event: any) => {
        event.preventDefault();
        const {username, password} = this.state;

        this.setState({
            submitted: true
        });

        if (username && password) {
            this.login(username, password);
        }
    };

    handleChange(event: any) {
        if (this.state.submitted) {
            this.setState({
                submitted: false
            })
        }
        const {name, value} = event.target;
        // @ts-ignore
        this.setState({[name]: value});
    }

    render() {
        const {submitted, username, password, invalid} = this.state;
        return (
            <form className="form" onSubmit={this.submitFormHandler}>
                {submitted && invalid ?
                    <div className="alert alert-danger" role="alert">
                        Username or password is incorrect
                    </div>
                    : null
                }
                <InputField type={'text'}
                            name={'username'}
                            placeholder={'Username'}
                            error={submitted && !username ? 'Username is required' : null}
                            onChange={this.handleChange}
                >
                    <Icon name={'username'} color={'#CCC'} width={14} height={16}/>
                </InputField>

                <InputField type={'password'}
                            name={'password'}
                            placeholder={'Password'}
                            extraClasses={'danger'}
                            error={submitted && !password ? 'Password is required' : null}
                            onChange={this.handleChange}
                >
                    <Icon name={'password'} color={'#CCC'} width={14} height={16}/>
                </InputField>

                <Button title={'Log in'}
                        extraClasses="w-100"
                        buttonStyle="success"
                        type="submit"
                        isLoading={this.state.isLoading}
                />
            </form>
        )
    }
}

export default withRouter(LoginForm);