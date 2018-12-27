import React, { Component } from 'react';
import { BrowserRouter , Route, Switch, Redirect } from 'react-router-dom';
import './assets/css/main.css';
import LoginPage from './containers/LoginPage/LoginPage';
import LoggedPage from './containers/LoggedPage/LoggedPage';
import { connect } from 'react-redux';

class App extends Component {
    render() {
        let routes = (
            <Switch>
                <Route path="/" exact component={LoginPage} />
                <Redirect to="/"/>
            </Switch>
        );

        if (this.props.isAuth){
            routes = (
                <Switch>
                    <Route path="/" exact component={LoginPage} />
                    <Route path="/logged" exact component={LoggedPage} />
                    <Redirect to="/"/>
                </Switch>
            );
        }

        return (
            <BrowserRouter>   
              {routes}
            </BrowserRouter>
        );
      }
}

const mapStateToProps = state => {
    return {
        isAuth: state.token !== null
    };
}

export default connect(mapStateToProps)(App);
