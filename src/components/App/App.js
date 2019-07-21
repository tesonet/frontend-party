import React from "react";
import { Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import PropTypes from "prop-types";
import { createBrowserHistory as createHistory } from "history";

//Components.
import LoginForm from "../LoginForm/LoginForm";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ServerList from "../ServerList/ServerList";

const App = ({ store }) => {
  const history = createHistory();

  return (
    <Router history={history}>
      <Provider store={store}>
        <div className="App">
          <Route path="/login" component={LoginForm} />
          <PrivateRoute exact path="/" component={ServerList} />
        </div>
      </Provider>
    </Router>
  );
};

App.propTypes = {
  store: PropTypes.object.isRequired
};

export default App;
