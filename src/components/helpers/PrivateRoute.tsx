import React, { ComponentType } from "react";
import { useSelector } from "react-redux";
import { Redirect, RouteComponentProps } from "@reach/router";
import { State } from "../../reducers";

interface Props {
  as: ComponentType;
}

const PrivateRoute: React.FC<Props & RouteComponentProps> = ({ as: Component, ...props }) => {
  const { token } = useSelector((state: State) => state.login);
  return (
    <>{token ? <Component {...props} /> : <Redirect to="/login" noThrow />}</>
  );
};

export default PrivateRoute;
