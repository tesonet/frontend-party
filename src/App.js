import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './components/Login/Login';
import Servers from './components/Servers/Servers';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" render={() => (
                        this.props.isLoggedIn ? <Servers/> : <Redirect to="/login"/>
                    )}/>
                    <Route path="/login" component={Login}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn
    }
};

export default connect(mapStateToProps, null)(App);
