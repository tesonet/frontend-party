import React, { useEffect, useState } from "react";
import { css } from "emotion";
import { commonStyles } from "components/common.style";
import Table from "react-bootstrap/Table";
import { serverListStyles } from "./serverList.style";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { Scrollbars } from "react-custom-scrollbars";
import { TESONET_BASE_URL, SERVER_LIST_URI } from "components/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { withRouter, RouteComponentProps } from "react-router";

interface IServer {
  name: string;
  distance: number;
}

const sortByDistAndName = (a: IServer, b: IServer) => {
  if (a.distance === b.distance) {
    return a.name < b.name ? -1 : 1;
  }
  return a.distance - b.distance;
};

export const ServerListComponent = (props: RouteComponentProps) => {
  const [list, setList] = useState<IServer[]>([]);
  const effectHandler = () => {
    axios.defaults.headers.common["Authorization"] = localStorage.getItem(
      "accessToken"
    );
    axios
      .get(`${TESONET_BASE_URL}${SERVER_LIST_URI}`)
      .then((response: { data: IServer[] }) => {
        setList(response.data.sort(sortByDistAndName));
      });
  };

  useEffect(effectHandler, []);
  return (
    <div className={css(commonStyles.container as any)}>
      <div className={css(serverListStyles.pageHeader)}>
        <div className={css(serverListStyles.darkLogo)} />

        <Button
          className={css(serverListStyles.logoutButton as any)}
          variant="light"
          onClick={() => {
            localStorage.removeItem("accessToken");
            props.history.push("/server-list");
          }}
        >
          <FontAwesomeIcon
            className={css(serverListStyles.logoutIcon)}
            icon={faSignOutAlt}
          />
          Logout
        </Button>
      </div>
      <div className={css(serverListStyles.listContainer)}>
        <Scrollbars style={{ paddingLeft: "10px" }}>
          <Table>
            <thead className={css(serverListStyles.tableHeader)}>
              <tr>
                <th className={css(serverListStyles.serverColumn)}>SERVER</th>
                <th>DISTANCE</th>
              </tr>
            </thead>
            <tbody>
              {list.length > 0 &&
                list.map((server, index) => (
                  <tr key={index}>
                    <td>{server.name}</td>
                    <td>{server.distance} km</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Scrollbars>
      </div>
    </div>
  );
};

export const ServerList = withRouter(ServerListComponent);
