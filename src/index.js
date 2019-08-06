import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route } from "react-router-dom";

import LoginPage from './components/LoginPage'
import Cms from './components/Cms'

import './global.css'; // webpack does not handle scss files! use OS tools

class App extends Component {
    constructor(){
        super()
    }

    render() {
        return (<Router>
            <Route exact path="/" component={LoginPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route path="/cms/:module" component={Cms} />
        </Router>)
    }
}

ReactDOM.render(<App />, document.getElementById('party-animal-app'))
