import React, { useEffect } from "react";
import { connect } from "react-redux";
import { logout } from "../_actions/authActions";
import {
  fetchServers,
  sortByDistance,
  sortByServer
} from "../_actions/serversActions";
import "./Dashboard.scss";
import LoadingSpinner from "../_components/LoadingSpinner";
import testio_logo from "../_assets/testio_logo.png";
import SvgIcon from "../_components/SvgIcon";

const Dashboard = props => {
  useEffect(() => {
    document.title = "Dashboard | Testio";
    props.fetchServers();
    document.getElementById("spinner").style.cssText = "display:none";
  }, []);

  const handleClick = () => {
    props.logout();
  };
  const sortByServer = () => {
    props.sortByServer();
  };
  const sortByDistance = () => {
    props.sortByDistance();
  };
  const fetchServersManually = e => {
    e.preventDefault();
    props.fetchServers();
  };
  return (
    <>
      <div className="dashboard">
        <div id="dashboard_header" className="dashboard__header">
          <div className="dashboard__header__logo">
            <img src={testio_logo} />
          </div>
          <div
            id="logout_button"
            className="logout-button"
            onClick={handleClick}
          >
            <SvgIcon className="logout-button__icon" icon="LOGOUT" />
            <span className="logout-button__text">Log out</span>
          </div>
        </div>
        {props.errorMessage ? (
          <div className="dashboard__errorMessage">
            {props.errorMessage} Click{" "}
            {
              <a href="" onClick={fetchServersManually}>
                here
              </a>
            }{" "}
            to refresh.
          </div>
        ) : (
          ""
        )}
        {props.servers ? (
          <div id="server_list" className="dashboard__serverList">
            <table className="serverList">
              <thead>
                <tr>
                  <th className="serverList__serverName" onClick={sortByServer}>
                    SERVER{" "}
                    {props.sortByServerStatus &&
                      (props.sortDescending ? <>&#9650;</> : <>&#9660;</>)}
                  </th>
                  <th className="serverList__distance" onClick={sortByDistance}>
                    {props.sortByDistanceStatus &&
                      (props.sortDescending ? <>&#9650;</> : <>&#9660;</>)}
                    DISTANCE{" "}
                  </th>
                </tr>
              </thead>
              <tbody>
                {props.servers.map(server => {
                  return (
                    <tr
                      key={server.name + server.distance}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%"
                      }}
                    >
                      <td className="serverList__serverName">{server.name}</td>
                      <td className="serverList__distance">
                        {server.distance} km
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : props.isLoading ? (
          <LoadingSpinner />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    servers: state.serversReducer.servers,
    isLoading: state.serversReducer.isLoading,
    errorMessage: state.serversReducer.errorMessage,
    sortDescending: state.serversReducer.sortDescending,
    sortByServerStatus: state.serversReducer.sortByServer,
    sortByDistanceStatus: state.serversReducer.sortByDistance
  };
};

export default connect(mapStateToProps, {
  fetchServers,
  sortByServer,
  sortByDistance,
  logout
})(Dashboard);
