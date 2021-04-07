import React from "react";
import { useHistory } from "react-router-dom";

import { ReactComponent as LogoutIcon } from "../../assets/logout-icon.svg";
import { ReactComponent as TestioDarkIcon } from "../../assets/logo-testio-dark.svg";
import Button from "../common/Button/Button";
import "./InternalPageHeader.scss";

export const InternalPageHeader = () => {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("token");
    history.push("/");
  }

  return (
    <div className="internal-page-header">
      <TestioDarkIcon />
      <Button
        className="internal-page-header__logout-button"
        onClick={handleLogout}
        leadingIcon={<LogoutIcon />}
      >
        Logout
      </Button>
    </div>
  );
};

export default InternalPageHeader;