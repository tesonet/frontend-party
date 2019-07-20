import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Components
import LoginForm from "../LoginForm/LoginForm";

const App = () => (
  <Router>
    <div className="App">
      <Route path="/login" component={LoginForm} />
    </div>
  </Router>
);

export default App;
