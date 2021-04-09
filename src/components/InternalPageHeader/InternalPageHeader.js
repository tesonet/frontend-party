import React from "react";
import { useHistory } from "react-router-dom";
import { useIntl } from "react-intl";

import { ReactComponent as LogoutIcon } from "../../assets/logout-icon.svg";
import { ReactComponent as TestioDarkIcon } from "../../assets/logo-testio-dark.svg";
import Button from "../common/Button/Button";
import messages from "./messages";
import { logoutHandler } from "../../app/services";
import styles from "./InternalPageHeader.scss";

export const InternalPageHeader = () => {
  const intl = useIntl();
  const history = useHistory();

  return (
    <div className={styles["internal-page-header"]}>
      <TestioDarkIcon />
      <Button
        data-testid="logout-button"
        className={styles["internal-page-header__logout-button"]}
        onClick={() => logoutHandler(history)}
        leadingIcon={<LogoutIcon />}
      >
        {intl.formatMessage(messages.logoutButtonText)}
      </Button>
    </div>
  );
};

export default InternalPageHeader;