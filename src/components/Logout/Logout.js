import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

const Logout = ({ history }) => {
  const handleLogout = () => {
    localStorage.removeItem("userToken");
    history.push("/login");
  };

  return (
    <Link to="/" onClick={handleLogout}>
      Logout
    </Link>
  );
};

export default withRouter(Logout);
