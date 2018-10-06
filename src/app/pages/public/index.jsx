import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import LoginPage from 'app/pages/public/login/login';
import { Logo } from 'app/components/logo';

import styles from './index.scss';

const PublicPages = () => (
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

export default PublicPages;
