import React from "react";
import { getFromLocalStorage } from "../utils/localStorage";
import { TableServerList, Navigation } from "../components";

const ServersPage = ({ history }) => {
  const isAuth = getFromLocalStorage("isAuth");
  const authToken = getFromLocalStorage("authToken");
  !isAuth && !authToken && history.push("/");

  return (
    <div>
      <Navigation history={history} />
      <main>
        <TableServerList />
      </main>
    </div>
  );
};

export default ServersPage;
