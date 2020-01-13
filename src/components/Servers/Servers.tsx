import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Server, getServers } from "../../store/servers/actions";
import { State } from "../../store/store";

const Servers: React.FC = () => {
  const serverList = useSelector(({ servers }: State) =>
    servers ? servers.servers : null
  );

  const dispatch = useDispatch();
  const token = useSelector(({ user }: State) => user.token);

  useEffect(() => {
    if (token) {
      dispatch(getServers(token));
    }
  }, [token]);

  return (
    <>
      <div>Servers</div>
      {serverList ? (
        <div data-test="servers">
          {serverList.map(({ name, distance }: Server) => (
            <div key={name} data-test="server">
              <span data-test="server-name">{name}</span>&nbsp;
              <span data-test="server-distance">{distance}</span>
            </div>
          ))}
        </div>
      ) : (
        "Loading..."
      )}
    </>
  );
};

export default Servers;
