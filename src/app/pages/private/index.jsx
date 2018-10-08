import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'connected-react-router';
import { Container } from 'reactstrap';

import ServersPages from 'app/pages/private/servers/servers';
import sessionActions from 'app/pages/private/session/redux/actions';
import { Button } from 'app/components/button';
import { Header } from 'app/layout';
import { Logo } from 'app/components/logo';

class PrivatePages extends React.PureComponent {
    constructor(props) {
        super(props);

        if (!props.session.token) {
            props.actions.router.push('/public/login');
        }

        this.onClickLogout = this.onClickLogout.bind(this);
    }

    onClickLogout() {
        const {
            actions,
        } = this.props;

        actions.session.logout();
    }

    render() {
        return (
            <Container fluid>
                <Header>
                    <Logo size="small" />
                    <Button
                        title="logout"
                        onClick={ this.onClickLogout }
                    />
                </Header>
                <Switch>
                    <Route path="/servers" component={ ServersPages } />
                    <Redirect to="/servers" />
                </Switch>
            </Container>
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
        session: bindActionCreators(sessionActions, dispatch),
    },
});

PrivatePages.propTypes = {
    session: PropTypes.shape({
        token: PropTypes.string,
    }).isRequired,
    actions: PropTypes.shape({
        router: PropTypes.shape({
            push: PropTypes.func,
        }),
        session: PropTypes.shape({
            logout: PropTypes.func,
        }),
    }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PrivatePages);
