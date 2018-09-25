import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
  import Servers from "./Servers";
  import Login from "./Login";
class Header extends Component {

    constructor(props){
        super(props);
        this.state ={
        loggedIn: false
        }
    }

    componentWillMount() {
        if (localStorage.getItem("token")) {
            
            this.setState({loggedIn: true});
        }
        else {
            console.log("You need to login")
        }
    }

  render() {
    if (this.state.loggedIn) {
        return (
            <HashRouter>
            <div>
              <ul className="header">
                    {/* <li><NavLink to="/">Servers</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li> */}
              </ul>
              <div className="content">
                    <Route exact path="/" component={Servers}/>
                    <Route path="/login" component={Login}/>  
              </div>
            </div>
            </HashRouter>
        );
      }

    else {
        return (
            <HashRouter>
            <div>
              <ul className="header">
                    {/* <li><NavLink to="/">Servers</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li> */}
              </ul>
              <div className="content">
                    <Route exact path="/" component={Servers}/>
                    <Route path="/login" component={Login}/>  
              </div>
            </div>
            </HashRouter>
        );
     }  
  }
}
 
export default Header;