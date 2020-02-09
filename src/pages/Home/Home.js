import React, { useEffect } from "react";
import Button from "../../components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { onLogout } from "../../actions/authActions";
import { onFetchServerList } from "../../actions/serversActions";

const Home = () => {
  const dispatch = useDispatch();
  const servers = useSelector(({ servers }) => servers.data);

  const logout = () => dispatch(onLogout());
  useEffect(() => {
    dispatch(onFetchServerList());
  }, []);

  return (
    <div>
      <Button onClick={logout} buttonText="Log out" />
      <div>Servers</div>
      {servers.map(server => (
        <div>
          {server.name} {server.distance}
        </div>
      ))}
    </div>
  );
};

export default Home;
