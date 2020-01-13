import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Login from "../Login/Login";
import Servers from "../Servers/Servers";
import { Provider } from "react-redux";
import store from "../../store/store";

const App: React.FC = () => (
  <Router>
    <Provider store={store}>
      <div>Testio</div>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/login" />} />
        <Route path="/login" component={Login} />
        <Route path="/servers" component={Servers} />
      </Switch>
    </Provider>
  </Router>
);

export default App;
