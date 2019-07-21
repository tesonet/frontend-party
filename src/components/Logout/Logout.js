import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import classNames from "classnames";

const Logout = ({ className, history }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch({ type: "logout" });
    localStorage.removeItem("userToken");
    history.push("/login");
  };

  return (
    <div className={classNames(className)}>
      <div className="ServerList__logout-icon" />
      <Link to="/" onClick={handleLogout}>
        Logout
      </Link>
    </div>
  );
};

export default withRouter(Logout);
