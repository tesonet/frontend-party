import React from "react";
import { PropTypes } from "prop-types";
import {
    Button,
    Form,
    FormGroup,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup
} from "reactstrap";
import userIcon from "../../assets/icons/ico-user.svg";
import passwordIcon from "../../assets/icons/ico-password.svg";
import "./LoginForm.scss";

const LoginForm = ({ onSubmit, onUsernameChange, onPasswordChange }) => (
    <Form onSubmit={event => onSubmit(event)} className="login-form">
        <FormGroup>
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                        <img src={userIcon} />
                    </InputGroupText>
                </InputGroupAddon>
                <Input
                    required
                    type="text"
                    name="username"
                    id="username"
                    className="form-input"
                    placeholder="Username"
                    onChange={event => onUsernameChange(event.target.value)}
                />
            </InputGroup>
        </FormGroup>
        <FormGroup>
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                        <img src={passwordIcon} />
                    </InputGroupText>
                </InputGroupAddon>
                <Input
                    required
                    type="password"
                    name="password"
                    id="password"
                    className="form-input"
                    placeholder="Password"
                    onChange={event => onPasswordChange(event.target.value)}
                />
            </InputGroup>
        </FormGroup>
        <Button className="submit-button">Log In</Button>
    </Form>
);

export default LoginForm;

LoginForm.propTypes = {
    onSubmit: PropTypes.func,
    onUsernameChange: PropTypes.func,
    onPasswordChange: PropTypes.func
};
