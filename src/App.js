import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import { IntlProvider } from "react-intl";

import Login from "./pages/Login/Login";
import Servers from "./pages/Servers/Servers";
import { ROUTES } from "./app/routes";

// Hardcoded locale and translations for basic implementation of react-intl.
export const MOCK_LOCALE = "en";
export const MOCK_MESSAGES = { [MOCK_LOCALE]: {} };

const App = () => {
  return (
    <BrowserRouter>
      <IntlProvider
        locale={MOCK_LOCALE}
        defaultLocale={MOCK_LOCALE}
        messages={MOCK_MESSAGES}
      >
        <div className="App">
          <Switch>
            <Route path={ROUTES.servers.path}>
              <Servers />
            </Route>
            <Route path={ROUTES.login.path}>
              <Login />
            </Route>
          </Switch>
        </div>
      </IntlProvider>
    </BrowserRouter>
  );
}

export default App;
