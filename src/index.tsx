import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import styled from "@emotion/styled";
import GlobalStyle from "./constants/globalStyle";
import { Router } from "@reach/router";
import ReduxState from "./reducers";
import Login from "@components/pages/Login";
import Header from "@components/organisms/header";
import Servers from "@components/pages/Servers";
import PrivateRoute from "@components/hoc/PrivateRoute";

const Root = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
`;

const store = createStore(
  ReduxState,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <Router component={Root}>
          <PrivateRoute as={Header} path="/">
            <PrivateRoute as={Servers} path="/" />
          </PrivateRoute>
          <Login path="/login" />
        </Router>
      </Provider>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
