import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import GlobalStyle from "./utils/globalStyles";

import Login from "./pages/Login";

const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;

class App extends React.Component {
  state = {
    isAuthenticated: false
  };

  render() {
    const { isAuthenticated } = this.state;
    return (
      <Router>
        <Fragment>
          <GlobalStyle />
          <Route path="/" exact component={Login} />
          {isAuthenticated ? <Route path="/list" component={About} /> : null}
        </Fragment>
      </Router>
    );
  }
}

export default App;
