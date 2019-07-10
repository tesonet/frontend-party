import React from "react";
import "./App.css";
import Login from "./components/Login";
import { Route, Switch, Redirect } from "react-router-dom";
import ServerList from "./components/ServerList";
import Logout from "./components/Logout";
import { connect } from "react-redux";

const ProtectedRoute = ({ isAllowed, ...props }) =>
  localStorage.getItem('token') ? <Route {...props} /> : <Redirect to="/login" />;

const App = props => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />
        <ProtectedRoute
          isAllowed={props.isAuthenticated}
          exact
          path="/server-list"
          component={ServerList}
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  };
};

export default connect(mapStateToProps)(App);
