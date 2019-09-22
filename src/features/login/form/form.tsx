import React from 'react';
import { observable } from 'mobx';

interface IProps {
    onSubmit: () => void;
}

@observable class LoginForm extends React.Component<IProps> {
    public render() {
        return(
            <form onSubmit={this.props.onSubmit} noValidate>
                
            </form>
        )
    }
}

export default LoginForm;
