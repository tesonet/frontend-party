import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  render() {
    return <div>Testio</div>;
  }
}

var rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
