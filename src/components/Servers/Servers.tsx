import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getServers } from "../../store/servers/actions";
import { State } from "../../store/store";
import { logOut } from "../../store/user/actions";
import { Table } from "../Table/Table";
import { ServersContainer, Header, ButtonText } from "./Servers.style";
import Logo from "../Logo/Logo";
import { PlainButton } from "../Button/Button";
import Icon from "../Icon/Icon";

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

  const handleLogout = (): void => {
    dispatch(logOut());
  };

  return (
    <ServersContainer>
      <Header>
        <Logo variation="dark" align="left" />
        <PlainButton data-test="logout" onClick={handleLogout}>
          <Icon name="exit" />
          <ButtonText>Log Out</ButtonText>
        </PlainButton>
      </Header>
      {serverList ? (
        <Table
          data={serverList}
          columns={[
            { key: "name", display: "SERVER" },
            { key: "distance", display: "DISTANCE" }
          ]}
        />
      ) : (
        "Loading..."
      )}
    </ServersContainer>
  );
};

export default Servers;
