import React from 'react';
import PropTypes from "prop-types";
import {
    Router,
    Route,
    Redirect,
    withRouter
} from "react-router-dom";
import { Provider } from "react-redux";
import {PrivateRoute} from '../Components/PrivateRoute';
import {createBrowserHistory as browserHistory} from 'history';
import Login from '../Components/Login/';
import ServersList from '../Components/List/';

export default class Routes extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Router history={browserHistory()}>
                <Provider store={this.props.store}>
                    <Route  path="/login" component={Login}/>
                    <PrivateRoute exact path="/" component={ServersList}/>
                </Provider>
            </Router>
        )
    }
}

Router.propTypes = {
  store: PropTypes.object
};

