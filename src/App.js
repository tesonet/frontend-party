import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Login from "./Containers/Login/Login";
import ServerList from "./Containers/ServerList/ServerList";

function App() {
  return (
    <div className="testio-app">
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/server-list" component={ServerList} />
          <Redirect to="/login" />
        </Switch>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
