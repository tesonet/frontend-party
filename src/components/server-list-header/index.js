import { connect } from "react-redux";
import { logoutAction } from "../../_actions/auth";

import ServerListHeader from "./ServerListHeader";

const mapDispatchToProps = {
  logoutAction
};

export default connect(
  null,
  mapDispatchToProps
)(ServerListHeader);
