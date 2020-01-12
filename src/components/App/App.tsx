import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../Login/Login";
import Servers from "../Servers/Servers";

const App: React.FC = () => (
  <Router>
    <div>Testio</div>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/servers" component={Servers} />
    </Switch>
  </Router>
);

export default App;
