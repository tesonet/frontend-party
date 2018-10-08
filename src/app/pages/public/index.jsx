import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'connected-react-router';

import LoginPage from 'app/pages/public/login/login';
import { Logo } from 'app/components/logo';

import styles from './index.scss';

class PublicPages extends React.Component {
    constructor(props) {
        super(props);

        if (props.session.token) {
            props.actions.router.push('/servers');
        }
    }

    render() {
        return (
            <div className={ styles['public-pages'] }>
                <Container className={ styles['public-pages-container'] }>
                    <Row className={ styles['content'] }>
                        <Col
                            xs="12"
                            sm={{ size: 10, offset: 1 }}
                            md={{ size: 8, offset: 2 }}
                            lg={{ size: 6, offset: 3 }}
                        >
                            <React.Fragment>
                                <div className={ styles['logo-wrapper'] }>
                                    <Logo />
                                </div>
                                <Switch>
                                    <Route exact path="/public/login" component={ LoginPage } />
                                    <Redirect to="/public/login" />
                                </Switch>
                            </React.Fragment>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    session: state.session,
});

const mapDispatchToProps = (dispatch) => ({
    actions: {
        router: {
            push: bindActionCreators(push, dispatch),
        },
    },
});

PublicPages.propTypes = {
    session: PropTypes.shape({
        token: PropTypes.string,
    }).isRequired,
    actions: PropTypes.shape({
        router: PropTypes.shape({
            push: PropTypes.func,
        }),
    }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PublicPages);
