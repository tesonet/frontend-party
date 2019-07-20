import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Components
import LoginForm from "../LoginForm/LoginForm";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ServerList from "../ServerList/ServerList";

const App = () => {
  const isLoggedIn = localStorage.getItem("loggedIn");

  return (
    <Router>
      <div className="App">
        <Route path="/login" component={LoginForm} />
        <PrivateRoute
          isLoggedIn={!!isLoggedIn}
          path="/"
          component={ServerList}
        />
      </div>
    </Router>
  );
};

export default App;
