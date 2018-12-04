import React from 'react';
import PropTypes from 'prop-types';
import { Col, Form, FormGroup } from 'reactstrap';
import InlineError from '../messages/InlineError';
import { css } from 'react-emotion';
import { ClipLoader } from 'react-spinners';
import TSButton from './form-components/TSButton';
import TSInput from './form-components/TSInput';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
    position: absolute;
    left: 43%;
    top: 42%;
    z-index: 1;
`;

const sectionStyle = {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: "url(images/log_bg.webp)"
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
                <Form onSubmit={this.onSubmit} className={loading ? 'loading' : ''} className="form-login col-sm-12 col-lg-6 m-auto">
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
                    </FormGroup>
                    <FormGroup row className="form-inputs">
                        <Col sm={12}>
                            <TSInput
                                inputImgStyle={sectionUser}
                                inputInvalid={!!errors.username}
                                inputType="username"
                                inputPlaceholder="Username"
                                inputValue={data.username}
                                inputChange={this.onChange}
                            />
                            {errors.username && <InlineError text={errors.username} />}
                        </Col>
                    </FormGroup>
                    <FormGroup row className="form-inputs">
                        <Col sm={12}>
                            <TSInput
                                inputImgStyle={sectionPass}
                                inputInvalid={!!errors.password}
                                inputType="password"
                                inputPlaceholder="Password"
                                inputValue={data.password}
                                inputChange={this.onChange}
                            />
                            {errors.password && <InlineError text={errors.password} />}
                        </Col>
                    </FormGroup>
                    <FormGroup row className="form-inputs">
                        <Col sm={12}>
                            <TSButton
                                buttonClass="w-100 h-100"
                                color="success"
                                loading={!!loading}
                                buttonText="Log In"
                            />
                        </Col>
                    </FormGroup>
                </Form>
            </Col>
        );
    }
}

export default LoginForm;