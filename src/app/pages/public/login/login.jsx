import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'connected-react-router';
import { SubmissionError } from 'redux-form';
import { Card, CardBody } from 'reactstrap';

import sessionActions from 'app/pages/private/session/redux/actions';
import LoginForm from './form';
import api from './api';

class LoginPage extends React.PureComponent {
    constructor(props) {
        super(props);

        this.onSubmitLogin = this.onSubmitLogin.bind(this);
    }

    onSubmitLogin({ username, password }) {
        const {
            actions,
        } = this.props;

        return api.login({ username, password })
            .then(({ token }) => {
                actions.session.setToken(token);
                actions.router.push('/servers');
            })
            .catch((error) => {
                // TODO check error
                throw new SubmissionError({
                    _error: 'Invalid credentials',
                });
            });
    }

    render() {
        return (
            <Card>
                <CardBody>
                    <LoginForm
                        onSubmit={ this.onSubmitLogin }
                        initialValues={{
                            username: 'tesonet',
                            password: 'partyanimal',
                        }}
                    />
                </CardBody>
            </Card>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    actions: {
        session: bindActionCreators(sessionActions, dispatch),
        router: {
            push: bindActionCreators(push, dispatch),
        },
    },
});

LoginPage.propTypes = {
    actions: PropTypes.shape({
        session: PropTypes.shape({
            getToken: PropTypes.func,
        }),
        router: PropTypes.shape({
            push: PropTypes.func,
        }),
    }).isRequired,
};

export default connect(null, mapDispatchToProps)(LoginPage);
