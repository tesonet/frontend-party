import React from 'react';

// React router
import { withRouter } from 'react-router-dom';

/**
 * Redirecting to login
 */
class Home extends React.Component {
    render() {
        return null;
    }

    componentDidMount() {
        const { history } = this.props;
        history.replace('/dashboard')
    }
}

export default withRouter(Home)
