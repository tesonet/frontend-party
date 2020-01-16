import React from "react";


import { TableServerList, Navigation } from "../components";

const ServersPage = ({ history }) => {
  return (
    <div>
      <Navigation history={history} />
      <main>
        <TableServerList/>
      </main>
    </div>
  );
};

export default ServersPage;
