import React from "react";
import { useHistory } from "react-router-dom";
import { useIntl } from "react-intl";

import { ReactComponent as LogoutIcon } from "../../assets/logout-icon.svg";
import { ReactComponent as TestioDarkIcon } from "../../assets/logo-testio-dark.svg";
import Button from "../common/Button/Button";
import "./InternalPageHeader.scss";
import messages from "./messages";

export const InternalPageHeader = () => {
  const intl = useIntl();
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("token");
    history.push("/");
  }

  return (
    <div className="internal-page-header">
      <TestioDarkIcon />
      <Button
        data-testid="logout-button"
        className="internal-page-header__logout-button"
        onClick={handleLogout}
        leadingIcon={<LogoutIcon />}
      >
        {intl.formatMessage(messages.logoutButtonText)}
      </Button>
    </div>
  );
};

export default InternalPageHeader;