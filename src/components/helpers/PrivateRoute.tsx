import React from "react";
import { useSelector } from "react-redux";
// import Login from "@components/pages/Login";
import { State } from "../../reducers";
import { Redirect } from '@reach/router';

const PrivateRoute = ({ as: Component, ...props }) => {
  const { token } = useSelector((state: State) => state.login);
  return <>{token ? <Component {...props} /> : <Redirect to="/login" noThrow/>}</>;
};

export default PrivateRoute;
