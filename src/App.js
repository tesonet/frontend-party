import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import UserRoute from "./components/routes/UserRoute"
import PropTypes from 'prop-types';
import runtime from 'serviceworker-webpack-plugin/lib/runtime';

if ('serviceWorker' in navigator) {
    runtime.register();
}

const App = ({ location }) => (
    <div>
        <UserRoute location={location} path="/" exact component={HomePage}></UserRoute>
        <Route location={location} path="/login" exact component={LoginPage}></Route>
    </div>
);

App.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired
    }).isRequired
}
export default App;
