import React from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import management from "../management";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

class ServersList extends React.Component {
  constructor(props) {
    super(props);
    this.sortingName = this.sortingName.bind(this);
    this.sortingDistance = this.sortingDistance.bind(this);
  }

  componentDidMount() {
    const { fetchServers, token } = this.props;
    if (token) {
      fetchServers();
    }
  }

  sortingName = () => {
    const { servers, sortByName } = this.props;
    sortByName(servers);
  };

  sortingDistance = () => {
    const { servers, sortByDistance } = this.props;
    sortByDistance(servers);
  };

  render() {
    const { servers, logout } = this.props;
    return (
      <div className="servers-page">
        <header className="servers-page__header">
          <h1>
            testio<span>.</span>
          </h1>
          <Button className="btn btn-transparent" onClick={logout}>
            <FontAwesomeIcon icon="sign-out-alt" /> Logout
          </Button>
        </header>
        <div className="servers">
          <ul className="servers-list">
            <li>
              <p onClick={() => this.sortingName()} className="sorting">
                Servers
              </p>
              <p onClick={() => this.sortingDistance()} className="sorting">
                Distance
              </p>
            </li>
            {servers &&
              servers.map((val, index) => {
                return (
                  <li key={index}>
                    <p>{val.name}</p>
                    <p>{val.distance}</p>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  token: management.selectors.getToken(state),
  servers: management.selectors.getServers(state)
});

const mapDispatchToProps = dispatch => ({
  fetchServers: () => dispatch(management.actions.fetchServers()),
  logout: () => dispatch(management.actions.logout()),
  sortByName: servers => dispatch(management.actions.sortByName(servers)),
  sortByDistance: servers =>
    dispatch(management.actions.sortByDistance(servers))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServersList);
