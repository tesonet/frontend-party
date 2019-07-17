import { connect } from "react-redux";
import { getServerListAction } from "../../_actions/server-list";

import ServerList from "./ServerList";

const mapStateToProps = state => ({
  serverList: state.serverListReducer.serverList
});

const mapDispatchToProps = {
  getServerListAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServerList);
