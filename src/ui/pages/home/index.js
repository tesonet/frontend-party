import React from 'react';

// React router
import {
    Redirect,
} from 'react-router-dom';

export default class Home extends React.Component {
    render() {
        return (
            <Redirect to={'/dashboard'} push/>
        );
    }
}
