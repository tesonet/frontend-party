import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { withCookies } from "react-cookie";
import Login from "../Login/Login";
import { useCookies } from "react-cookie";
import HomePage from "../HomePage/HomePage";

const App = () => {
  const [cookies, setCookie, removeCookie] = useCookies([`tes0`]);
  const [isAuthenticated, userHasAuthenticated] = useState(cookies[`tes0`]);

  const setTokenCookie = (token) => {
    setCookie(`tes0`, token, { path: `/` });
    userHasAuthenticated(true);
  };

  const handleLogOut = () => {
    removeCookie(`tes0`);
    userHasAuthenticated(false);
  };
  debugger;

  return (
    <Switch>
      {isAuthenticated ? (
        <>
          <Route
            path="/"
            render={() => (
              <HomePage handleLogout={handleLogOut} token={cookies[`tes0`]} />
            )}
          />
        </>
      ) : (
        <>
          <Route
            path="/"
            render={() => (
              <Login
                setTokenCookie={setTokenCookie}
                cookies={cookies}
                userHasAuthenticated={userHasAuthenticated}
              />
            )}
          />
        </>
      )}
    </Switch>
  );
};

export default withCookies(App);
