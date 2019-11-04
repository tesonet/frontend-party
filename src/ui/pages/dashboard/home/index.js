import React from 'react';

// React router
import {
    withRouter,
} from 'react-router-dom';

/**
 * Since we are thinking to scale this application in the future
 * I'm creating this home page for dashboard which redirects to servers for now
 */
class DashboardHome extends React.Component {
    render() {
        return null;
    }

    componentDidMount() {
        const { history } = this.props;
        history.replace('/dashboard/servers')
    }
}

export default withRouter(DashboardHome);
