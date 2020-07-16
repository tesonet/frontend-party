import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <div className="testio-app">
      <Router>
        <Switch>
          {/* <Route exact path="/login" component={Login} /> */}
          {/* <Route exact path="/server-list" component={ServerList} /> */}
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
