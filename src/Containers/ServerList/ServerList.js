import React, { Component } from "react";
import { Header } from "../../Components/Header/Header";
import { fetchServers } from "../../api/servers";
import { handleError } from "../../api";
import { connect } from "react-redux";
import { setServers } from "../../actions/servers.actions";
import { Table } from "../../Components/Table/Table";

class ServerList extends Component {
  state = {
    isLoading: false,
  };

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    this.setState({ isLoading: true });
    fetchServers()
      .then((res) => {
        const servers = res.data.sort(
          (a, b) => a.distance - b.distance || a.name - b.name
        );
        //console.log("res", res.data);
        this.props.setServers(servers);
      })
      .catch((error) => {
        handleError(error, "Error loading servers!");
      })
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    const { isLoading } = this.state;
    const { servers } = this.props;

    console.log("servers", servers);

    return (
      <div className="server-list-page">
        <Header />
        <Table headings={["SERVER", "DISTANCE"]} items={servers} />
      </div>
    );
  }
}

function bindActions(dispatch) {
  return {
    setServers: (data) => dispatch(setServers(data)),
  };
}

const mapStateToProps = (state) => ({
  servers: state.servers,
});

export default connect(mapStateToProps, bindActions)(ServerList);
