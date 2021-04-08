import { defineMessages } from "react-intl";

const scope = "loginBox";

export default defineMessages({
  usernameMissingMessage: {
    id: `${scope}usernameMissingMessage`,
    defaultMessage: "Please fill in your username.",
  },
  passwordMissingMessage: {
    id: `${scope}passwordMissingMessage`,
    defaultMessage: "Please fill in your password.",
  },
  authenticationFailedMessage: {
    id: `${scope}authenticationFailedMessage`,
    defaultMessage: "Invalid username or password. Please try again.",
  },
  loginInProgressButtonText: {
    id: `${scope}loginInProgressMessage`,
    defaultMessage: "Logging in...",
  },
  loginButtonTextDefault: {
    id: `${scope}loginButtonTextDefault`,
    defaultMessage: "Log in",
  },
});
