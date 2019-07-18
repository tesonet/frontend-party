import { connect } from "react-redux";
import {
  getServerListAction,
  orderByName,
  orderByDistance
} from "../../_actions/server-list";

import ServerList from "./ServerList";

const mapStateToProps = state => ({
  serverList: state.serverListReducer.serverList
});

const mapDispatchToProps = {
  getServerListAction,
  orderByName,
  orderByDistance
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServerList);
