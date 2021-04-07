import React from "react";
import { Redirect } from "react-router-dom";

import ServersList from "../../components/ServersList/ServersList";
import InternalPageHeader from "../../components/InternalPageHeader/InternalPageHeader";
import "./Servers.scss";

export const Servers = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Redirect to="/" />
  }

  return (
    <div>
      <InternalPageHeader />
      <ServersList />
    </div>
  );
};

export default Servers;