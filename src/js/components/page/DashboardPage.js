import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Button } from "reactstrap";

import { Logout } from "../actions/LoginActions";
import { ServerList } from "../actions/DashboardActions";
import ListProp from "../presentational/ListProp";

class DashboardContainer extends Component {
  constructor() {
    super();
    this.state = { list: [] };
    this.logout = this.logout.bind(this);
  }
  logout () {
    Logout();    
    this.props.history.push("/");
  }

  componentDidMount() {
    ServerList().then(data => {
      this.setState({ list: data.sort((a, b) =>  a.distance - b.distance || a.name.localeCompare(b.name) ) })
    });
  }

  render() {
    return (
      <div id="dashboard">
        <div className="row mt-4 mb-4">
          <div className="col"><div className="logo"></div></div>
          <div className="col text-right">
            <Button onClick={this.logout} color="link" className="logout inner-addon left-addon">
              <span className="glyphicon glyphicon-logout"></span> Logout
            </Button>
          </div>
        </div>
        <div className="list-block">

          <ListProp 
            col1="SERVER"
            col2="DISTANCE"
            list={this.state.list}
            />
        </div>
      </div>
    );
  }
}
export default withRouter(DashboardContainer);