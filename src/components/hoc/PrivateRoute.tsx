import React from "react";
import { useSelector } from "react-redux";
import Login from "@components/pages/Login";
import { State } from "../../reducers";

const PrivateRoute = ({ as: Component, ...props }) => {
  const { token } = useSelector((state: State) => state.login);
  return <>{token ? <Component {...props} /> : <Login />}</>;
};

export default PrivateRoute;
