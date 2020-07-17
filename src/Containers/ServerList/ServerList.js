import React, { Component } from "react";
import { Header } from "../../Components/Header/Header";
import { fetchServers } from "../../api/servers";
import { handleError } from "../../api";
import { connect } from "react-redux";
import { setServers } from "../../actions/servers.actions";
import { Table } from "../../Components/Table/Table";
import { setUserLogout } from "../../actions/user.actions";
import { Spinner } from "../../Components/Spinner/Spinner";

class ServerList extends Component {
  state = {
    isLoading: false,
  };

  componentDidMount() {
    //TODO: make HOC with loggedIn checking
    const loggedIn = localStorage.getItem("token");
    if (!loggedIn) {
      this.props.history.push("/login");
    } else {
      this.loadData();
    }
  }

  loadData() {
    this.setState({ isLoading: true });
    fetchServers()
      .then((res) => {
        if (res && res.data) {
          const servers = res.data.sort(
            (a, b) => a.distance - b.distance || a.name.localeCompare(b.name)
          );
          this.props.setServers(servers);
        }
      })
      .catch((error) => {
        handleError(error, "Error loading servers!");
      })
      .finally(() => this.setState({ isLoading: false }));
  }

  handleLogout() {
    localStorage.removeItem("token");
    this.props.setUserLogout();
    this.props.history.push("/login");
  }

  render() {
    const { isLoading } = this.state;
    const { servers } = this.props;

    return (
      <div className="server-list-page">
        {isLoading && <Spinner />}
        <Header logout={() => this.handleLogout()} />
        <Table headings={["SERVER", "DISTANCE"]} items={servers} />
      </div>
    );
  }
}

function bindActions(dispatch) {
  return {
    setServers: (data) => dispatch(setServers(data)),
    setUserLogout: () => dispatch(setUserLogout()),
  };
}

const mapStateToProps = (state) => ({
  servers: state.servers,
});

export default connect(mapStateToProps, bindActions)(ServerList);
