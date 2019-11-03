import React from 'react';

// React router
import {
    Redirect,
} from 'react-router-dom';

export default class DashboardHome extends React.Component {
    render() {
        return (
            <Redirect to={'/dashboard/servers'}/>
        )
    }
}
