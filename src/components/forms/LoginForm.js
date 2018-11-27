import React from 'react';
import PropTypes from 'prop-types';
import { Col, Button, Form, FormGroup, Label, Input, FormText, InputGroup, InputGroupAddon } from 'reactstrap';
import InlineError from '../messages/InlineError';
import { css } from 'react-emotion';
import { ClipLoader } from 'react-spinners';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
    position: absolute;
    left: 47%;
    top: 45%;
    z-index: 1;
`;

const sectionStyle = {
    backgroundImage: "url(images/log_bg.jpg)"
};

const sectionUser = {
    height: 'inherit',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundImage: "url(images/username.svg)"
};

const sectionPass = {
    height: 'inherit',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundImage: "url(images/password.svg)"
};

const logoStyle = {
    height: '60px',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundImage: "url(images/log_logo.png)"
};

class LoginForm extends React.Component {
    state = {
        data: {
            username: 'tesonet',
            password: 'partyanimal'
        },
        loading: false,
        errors: []
    };

    onChange = e => {
        this.setState({
            data: {
                ...this.state.data,
                [e.target.name]: e.target.value
            }
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const errors = this.validate(this.state.data);
        this.setState({ errors });

        if (Object.keys(errors).length === 0) {
            this.setState({ loading: true });
            this.props.submit(this.state.data).catch(
                error => this.setState({ errors: { global: error.response.data.message }, loading: false })
            );
        }
    }

    validate = (data) => {
        const errors = {};
        if (!data.username) errors.username = "Can't be blanc";
        if (!data.password) errors.password = "Can't be blanc";
        return errors;
    }

    render() {
        const { data, errors, loading } = this.state;
        return (
            <Col className="vertical-center" style={sectionStyle}>
                <Form onSubmit={this.onSubmit} className={loading ? 'loading' : ''} className="form-login m-auto">
                    <ClipLoader
                        className={override}
                        sizeUnit={"px"}
                        size={80}
                        color={'#123abc'}
                        loading={!!loading}
                    />
                    {errors.global && <InlineError text={errors.global} />}
                    <FormGroup row>
                        <Col sm={12} style={logoStyle} className="mb-4"></Col>
                        <Col sm={12}>
                            <div className="d-flex tes-input">
                                <Col sm={1} style={sectionUser}>
                                </Col>
                                <Col sm={11} className="pl-0">
                                    <Input
                                        invalid={!!errors.username}
                                        type="username"
                                        id="username"
                                        name="username"
                                        placeholder="Username"
                                        value={data.username}
                                        onChange={this.onChange}
                                    />
                                </Col>
                            </div>
                            {errors.username && <InlineError text={errors.username} />}
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col sm={12}>
                            <div className="d-flex tes-input">
                                <Col sm={1} style={sectionPass}>
                                </Col>
                                <Col sm={11} className="pl-0">
                                    <Input
                                        invalid={!!errors.password}
                                        type="password"
                                        id="password"
                                        name="password"
                                        placeholder="Password"
                                        value={data.password}
                                        onChange={this.onChange}
                                    />
                                </Col>
                            </div>
                            {errors.password && <InlineError text={errors.password} />}
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col sm={12}>
                            <Button id="tes-submit" disabled={!!loading} color="success" className="w-100">Log In</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </Col>
        );
    }
}

LoginForm.propTypes = {
    submit: PropTypes.func.isRequired
}

export default LoginForm;