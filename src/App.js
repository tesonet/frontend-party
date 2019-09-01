import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "./themes/theme";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./components/Home";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";
import initStorageClient from "./utils/storageClient";
import { AUTH_USER } from "./actions/index";
import thunk from "redux-thunk";

function App() {

  const storageClient = initStorageClient();
  const middlewareThunk = applyMiddleware(
    thunk.withExtraArgument({ storageClient })
  );
  let store = createStore(reducers,undefined,middlewareThunk);
  const token = storageClient.get("token");

  if (token) {
    store.dispatch({ type: AUTH_USER });
  }
 
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route exact path={"/"} component={Login} />
            <Route exact path={"/dashboard"} component={PrivateRoute(Home)} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
    </Provider>
  );
}

export default App;
